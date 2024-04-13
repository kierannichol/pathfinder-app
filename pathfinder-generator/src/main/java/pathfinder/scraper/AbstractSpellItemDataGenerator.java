package pathfinder.scraper;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import pathfinder.db.PathfinderDatabase;
import pathfinder.db.query.Query;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.ItemData;
import pathfinder.model.pathfinder.Spell;
import pathfinder.model.pathfinder.Spell.Level;
import pathfinder.util.NameToIdConverter;

@RequiredArgsConstructor(access = AccessLevel.PROTECTED)
@Slf4j
public abstract class AbstractSpellItemDataGenerator extends AbstractScraper {
    private final PathfinderDatabase database;

    @Override
    public void scrape() throws IOException {
        database.query(Query.spells())
                .forEach(spell -> {
                    tryGeneratePotion(spell).ifPresent(item -> {
                        save("item/" + item.id().key + ".yml", item);
                    });
                });
    }

    protected abstract String itemName(Spell spell);
    protected abstract String itemDescription(Spell spell);
    protected abstract String itemType();
    protected abstract String itemWeight();
    protected abstract double itemCost(List<Spell.Level> spellLevels);

    private Optional<ItemData> tryGeneratePotion(Spell spell) {
        List<Level> spellLevels = new ArrayList<>(spell.levels());
        spellLevels.sort(Comparator.comparing(Level::level));
        double cost = itemCost(spellLevels);
        if (cost == 0) {
            return Optional.empty();
        }

        String name = itemName(spell);
        Id id = NameToIdConverter.itemId(name);
        log.info("Creating " + name);
        return Optional.of(new ItemData(id,
                name,
                itemDescription(spell),
                itemType(),
                cost + " gp",
                itemWeight(),
                "None",
                null,
                null,
                null,
                null,
                null,
                null,
                casterLevel(spellLevels),
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                spell.sources(),
                null,
                null,
                null,
                null));
    }

    private int casterLevel(List<Spell.Level> spellLevels) {
        List<String> allowed = List.of("cleric", "druid", "wizard", "sorcerer", "bard", "paladin", "ranger");
        for (var level : spellLevels) {
            if (allowed.contains(level.classId().key)) {
                return level.level();
            }
        }
        return 0;
    }
}
