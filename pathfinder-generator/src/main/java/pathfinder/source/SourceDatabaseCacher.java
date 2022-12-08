package pathfinder.source;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InvalidClassException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.lang.reflect.Method;
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
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import pathfinder.spring.FileCached;

@Service
@Aspect
@Slf4j
public class SourceDatabaseCacher {
    private static final Path CACHED_BASE_PATH = Path.of(System.getProperty("java.io.tmpdir"), "pf-gen-3");
    private final Map<String, Object> cached = new HashMap<>();

    @Value("${source.file.cache.enabled:false}")
    private boolean fileCachedEnabled;

    @Around("execution(* pathfinder.source.*SourceDatabase.stream*())")
    public Object cacheSourceLoad(ProceedingJoinPoint jp) throws Throwable {
        MethodSignature signature = (MethodSignature) jp.getSignature();
        Method method = signature.getMethod();

        String cacheId = classId(jp.getTarget().getClass()) + "_" + method.getName();

        if (!jp.getTarget().getClass().isAnnotationPresent(FileCached.class)) {
            return jp.proceed();
        }

        return tryRead(cacheId)
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
                            cache(cacheId, list);
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

        if (!fileCachedEnabled) {
            return Optional.empty();
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
        try {
            return Optional.of(in.readObject());
        } catch (InvalidClassException e) {
            return Optional.empty();
        }
    }

    private String classId(Class<?> type) {
        String simpleName = type.getSimpleName();
//        simpleName = simpleName.substring(0, simpleName.indexOf('$'));
        return simpleName;
    }

    private Object cache(String classId, Object data) throws IOException {
        cached.put(classId, data);

        if (fileCachedEnabled) {
            CACHED_BASE_PATH.toFile().mkdirs();
            Path cachePath = cachePath(classId);
            var out = new ObjectOutputStream(new FileOutputStream(cachePath.toFile()));
            out.writeObject(data);
        }

        return data;
    }

    private Path cachePath(String classId) {
        return CACHED_BASE_PATH.resolve(classId + ".cache");
    }
}
