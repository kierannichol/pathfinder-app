package pathfinder.scraper.local;

import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.NotCached;
import pathfinder.model.pathfinder.Spell;
import pathfinder.scraper.remote.nethys.NethysSpellsScraper;

@Service("Spell YAML Generator")
@Slf4j
@NotCached
@RequiredArgsConstructor
public class SpellYamlGeneratorGenerator extends AbstractLocalYamlDatabaseGenerator implements LocalSourceDatabaseGenerator {
    private final NethysSpellsScraper scraper;

    @Override
    public void generateLocalDatabase() {
        Stream<Spell> spellStream = scraper.streamSpells();

        AtomicLong index = new AtomicLong(0);
        spellStream.collect(
                Collectors.groupingBy(x -> (index.getAndIncrement() % 2) + 1))
                .forEach((i, spells) -> save("spells_database_" + i + ".yml", spells));
    }
}
