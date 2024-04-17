package pathfinder.db;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.file.Files;
import java.nio.file.NoSuchFileException;
import java.nio.file.Path;
import pathfinder.data.IdDatabaseDbo;
import pathfinder.model.Id;
import pathfinder.model.id.IntId;

public class PersistedIdGenerator implements IdGenerator {
    private final SourceModuleIdGenerator source;
    private final Path savePath;

    public PersistedIdGenerator(String sourceCode, SourceModuleIdGenerator source) {
        this.source = source;
        this.savePath = Path.of("ids_%s.bin".formatted(sourceCode));
        load();
    }

    public IntId generate(Id id) {
        return generate(id.string());
    }

    public synchronized IntId generate(String code) {
        try {
            return source.generate(code);
        } finally {
            save();
        }
    }

    private void load() {
        try {
            byte[] bytes = Files.readAllBytes(savePath);
            source.set(IdDatabaseDbo.parseFrom(bytes));
        } catch (NoSuchFileException e) {
            // ignore
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    private void save() {
        try {
            Files.write(savePath,
                    source.get().toByteArray());
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }
}
