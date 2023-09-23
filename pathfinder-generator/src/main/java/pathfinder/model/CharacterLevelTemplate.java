package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.List;
import lombok.RequiredArgsConstructor;
import pathfinder.data.CharacterLevelTemplateDbo;

public record CharacterLevelTemplate(int levelNumber,
                                     List<Effect> effects,
                                     List<Link> links,
                                     List<Unlink> unlinks,
                                     List<Choice> choices) {

    @RequiredArgsConstructor
    public static class Builder extends AbstractComponentBuilder<Builder> {
        private final int levelNumber;

        public int levelNumber() {
            return levelNumber;
        }

        public CharacterLevelTemplate build() {
            return new CharacterLevelTemplate(levelNumber, effects, links, unlinks, choices);
        }
    }

    public CharacterLevelTemplateDbo toDbo() {
        return CharacterLevelTemplateDbo.newBuilder()
                .setLevelNumber(levelNumber)
                .addAllEffects(mapList(effects, Effect::toDbo))
                .addAllLinks(mapList(links, Link::toDbo))
                .addAllUnlinks(mapList(unlinks, Unlink::toDbo))
                .addAllChoices(mapList(choices, Choice::toDbo))
                .build();
    }
}
