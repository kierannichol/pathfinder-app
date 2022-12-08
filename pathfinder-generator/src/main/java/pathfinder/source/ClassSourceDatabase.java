package pathfinder.source;

import java.io.IOException;
import java.util.stream.Stream;
import pathfinder.model.CharacterClass;

public interface ClassSourceDatabase {

    Stream<CharacterClass> streamClasses() throws IOException;
}
