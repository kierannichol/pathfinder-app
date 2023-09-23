package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import pathfinder.data.CharacterTemplateDbo;

public record CharacterTemplate(List<CharacterLevelTemplate> levels) {

    public CharacterTemplateDbo toDbo() {
        return CharacterTemplateDbo.newBuilder()
                .addAllLevels(mapList(levels, CharacterLevelTemplate::toDbo))
                .build();
    }

    public static class Builder {
        private final Map<Integer, CharacterLevelTemplate.Builder> levels = new HashMap<>();

        public Builder level(int levelNumber, Consumer<CharacterLevelTemplate.Builder> buildFn) {
            CharacterLevelTemplate.Builder level = levels.computeIfAbsent(levelNumber,
                    k -> new CharacterLevelTemplate.Builder(levelNumber));
            buildFn.accept(level);
            return this;
        }

        public CharacterTemplate build() {
            return new CharacterTemplate(mapList(levels.values(), CharacterLevelTemplate.Builder::build));
        }
    }
}
