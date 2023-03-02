package pathfinder.scraper.local;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.NotCached;

@Service("Bardic Masterpiece YAML Generator")
@Slf4j
@NotCached
@RequiredArgsConstructor
public class BardicMasterpieceYamlGenerator {//extends AbstractLocalYamlSourceDatabase implements LocalSourceDatabaseGenerator {

//    private final D20pfsrdBardicMasterpieceScraper scraper;
//
//    public void generateLocalDatabase() {
//        Stream<Spell> entityStream = scraper.streamSpells()
//                .map(spell -> new Spell(spell.id(), spell.name()));
//
//        save("bardic_masterpiece_database.yml", entityStream);
//    }
}
