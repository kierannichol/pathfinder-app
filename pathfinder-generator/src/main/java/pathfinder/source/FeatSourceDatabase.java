package pathfinder.source;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;
import pathfinder.model.Feat;
import pathfinder.parser.NameToIdConverter;
import pathfinder.util.NameUtils;

public interface FeatSourceDatabase {

    Stream<Feat> streamFeats() throws IOException;

    default Optional<String> findIdByName(String name) {
        List<String> nameAndParentheses = NameUtils.extractNameAndParentheses(name);

        try {
            return streamFeats()
                    .filter(feat -> feat.name().equals(nameAndParentheses.get(0)))
                    .map(feat -> {
                        if (nameAndParentheses.size() < 2) {
                            return feat.id();
                        }

                        return feat.id() + "#" + NameToIdConverter.partialId(nameAndParentheses.get(1).trim());
                    })
                    .findFirst();
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }
}
