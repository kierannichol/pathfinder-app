package pathfinder.source;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Stream;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Service;

@Service
@Aspect
@Slf4j
public class SourceDatabaseCacher {
    private static final Path CACHED_BASE_PATH = Path.of(System.getProperty("java.io.tmpdir"), "pf-gen-3");
    private final Map<String, Object> cached = new HashMap<>();

    @Around("execution(* pathfinder.source.scraper.WebScraper.scrape())")
    public Object cacheScrape(ProceedingJoinPoint jp) throws Throwable {
        String classId = classId(jp.getThis().getClass());

        return tryRead(classId).orElse(cache(classId, jp.proceed()));
    }

    @Around("execution(* pathfinder.SourceDatabase.stream())")
    public Object cacheSourceLoad(ProceedingJoinPoint jp) throws Throwable {
        String classId = classId(jp.getThis().getClass());

        return tryRead(classId)
                .map(result -> {
                    if (result instanceof List<?> list) {
                        return list.stream();
                    }
                    return result;
                })
                .orElseGet(() -> {
                    Object data;
                    try {
                        data = jp.proceed();
                        if (data instanceof Stream<?> stream) {
                            List<?> list = stream.toList();
                            cache(classId, list);
                            data = list.stream();
                        }
                        return data;
                    } catch (Throwable e) {
                        throw new Error(e);
                    }
                });
    }

    private Optional<Object> tryRead(String classId) throws IOException, ClassNotFoundException {
        if (cached.containsKey(classId)) {
            return Optional.of(cached.get(classId));
        }

        Path cachePath = cachePath(classId);
        File cacheFile = cachePath.toFile();
        if (!cacheFile.exists()) {
            return Optional.empty();
        }

//        if (cacheFile.lastModified() < System.currentTimeMillis() - Duration.ofDays(1L).toMillis()) {
//            cacheFile.delete();
//            return Optional.empty();
//        }

        var in = new ObjectInputStream(new FileInputStream(cacheFile));
        return Optional.of(in.readObject());
    }

    private String classId(Class<?> type) {
        String simpleName = type.getSimpleName();
        simpleName = simpleName.substring(0, simpleName.indexOf('$'));
        return simpleName;
    }

    private Object cache(String classId, Object data) throws IOException {
        CACHED_BASE_PATH.toFile().mkdirs();
        Path cachePath = cachePath(classId);
        var out = new ObjectOutputStream(new FileOutputStream(cachePath.toFile()));
        out.writeObject(data);
        cached.put(classId, data);
        return data;
    }

    private Path cachePath(String classId) {
        return CACHED_BASE_PATH.resolve(classId + ".cache");
    }
}
