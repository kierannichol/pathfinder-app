package pathfinder.source.scraper;

import java.util.Optional;

public record ScrapedFeature(String name, String source, String description, java.util.Map<String, String> blocks) {

    public Optional<String> tryGetBlock(String name) {
        return Optional.ofNullable(blocks.get(name.toLowerCase()));
    }
}
