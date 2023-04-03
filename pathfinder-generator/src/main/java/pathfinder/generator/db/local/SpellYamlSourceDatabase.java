package pathfinder.generator.db.local;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.generator.db.SpellSourceDatabase;
import pathfinder.model.NamedEntity;
import pathfinder.model.NamedEntitySource;
import pathfinder.model.pathfinder.Spell;

@Component
public class SpellYamlSourceDatabase extends AbstractYamlSourceDatabase implements NamedEntitySource, SpellSourceDatabase {

    private final Map<String, Spell> spellsByName = new HashMap<>();
    private boolean loaded = false;

    private synchronized void load() {
        if (loaded) {
            return;
        }
        loaded = true;
        Stream.concat(
                load("spells_database_1.yml", Spell[].class),
                load("spells_database_2.yml", Spell[].class))
                .forEach(spell -> {
                    spellsByName.put(spell.name().toLowerCase(), spell);
                });
    }

    @Override
    public Stream<Spell> streamSpells() {
        load();
        return spellsByName.values().stream();
    }

    public Optional<Spell> findSpellByName(String name) {
        return Optional.ofNullable(spellsByName.get(translateSpellName(name)));
    }

    private String translateSpellName(String name) {
        return switch (name.toLowerCase()) {
            case "summon monster i" -> "summon monster 1";
            case "summon monster ii" -> "summon monster 2";
            case "summon monster iii" -> "summon monster 3";
            case "summon monster iv" -> "summon monster 4";
            case "summon monster v" -> "summon monster 5";
            case "summon monster vi" -> "summon monster 6";
            case "summon monster vii" -> "summon monster 7";
            case "summon monster viii" -> "summon monster 8";
            case "summon monster ix" -> "summon monster 9";
            default -> name.toLowerCase();
        };
    }

    @Override
    public Stream<? extends NamedEntity> namedEntities() {
        return streamSpells();
    }
}
