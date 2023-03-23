package pathfinder.db;

import java.io.IOException;
import java.util.Optional;
import java.util.stream.Stream;
import pathfinder.model.pathfinder.D20pfsrdCharacterClass;

public interface ClassSourceDatabase {

    Stream<D20pfsrdCharacterClass> streamClasses() throws IOException;

    default Optional<D20pfsrdCharacterClass> findClass(String id) throws IOException {
        return streamClasses()
                .filter(characterClass -> characterClass.id().equals(id))
                .findFirst();
    }
}
