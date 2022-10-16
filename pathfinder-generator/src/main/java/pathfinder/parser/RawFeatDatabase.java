package pathfinder.parser;

import java.util.Arrays;
import java.util.Optional;

public class RawFeatDatabase {
    private final RawFeat[] rawFeats;

    public RawFeatDatabase(RawFeat[] rawFeats) {
        this.rawFeats = rawFeats;
    }

    public Optional<RawFeat> findByName(String name) {
        return Arrays.stream(rawFeats)
                .filter(feat -> feat.name.equals(name))
                .findFirst();
    }
}
