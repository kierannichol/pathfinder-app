package pathfinder.source.scraper.d20pfsrd;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import pathfinder.model.Modifier;
import pathfinder.model.Modifiers;
import pathfinder.model.Race;
import pathfinder.model.Size;
import pathfinder.parser.NameToIdConverter;
import pathfinder.source.RaceSourceDatabase;
import pathfinder.source.SpellSourceDatabase;
import pathfinder.util.NameUtils;

@Service("d20pfsrd Race Scraper")
@Slf4j
@RequiredArgsConstructor
public class D20pfsrdRaceScraper extends AbstractD20pfsrdScraper implements
        RaceSourceDatabase {

    private final SpellSourceDatabase spellSourceDatabase;

    public List<Race> scrape() throws IOException {
        Document document = fetch(
                new URL("https://www.d20pfsrd.com/races/"));

        List<Race> races = new ArrayList<>();

        Elements tableRows = document.select("table[border=1] tbody tr");
        tableRows.forEach(row -> {
            Elements columns = row.select("td");
            if (columns.size() != 14) {
                return;
            }

            String name = NameUtils.sanitize(columns.get(0).text());
            String sizeText = columns.get(3).text();
            String typeText = columns.get(4).text();
            String speedText = columns.get(5).text();
            String startingLanguages = columns.get(6).text();

            if (speedText.isBlank()) {
                return;
            }

            Race race = null;
            try {
                race = new Race(
                        NameToIdConverter.raceId(name),
                        name,
                        Size.findByLongName(sizeText).orElseThrow(() -> new NoSuchElementException(sizeText)),
                        typeText,
                        Integer.parseInt(speedText.split(" ")[0]),
                        Arrays.stream(startingLanguages.split(","))
                                .map(NameUtils::sanitize)
                                .toList(),
                        scrapeBonuses(columns)
                );
            } catch (IOException e) {
                throw new UncheckedIOException(e);
            }
            races.add(race);
        });

        return races;
    }

    private List<String> scrapeBonuses(Elements columns) throws IOException {
        List<String> abilityScorePluses = split(columns.get(1).text());
        List<String> abilityScoreMinuses = split(columns.get(2).text());

        List<String> defensiveTraits = split(columns.get(8).text());
        List<String> offensiveTraits = split(columns.get(9).text());
        String skillBonuses = columns.get(10).text();
        String bonusFeats = columns.get(11).text();
        List<String> specialAbilities = split(columns.get(12).text());
        String racePoints = columns.get(13).text();
        List<String> senses = split(columns.get(7).text());

        List<String> bonuses = new ArrayList<>();

        bonuses.addAll(plusesToModifiers(abilityScorePluses));
        bonuses.addAll(minusesToModifiers(abilityScoreMinuses));

        if (bonusFeats.equalsIgnoreCase("ANY ONE")) {
            bonuses.add(Modifiers.BONUS_FEAT.id());
        }

        for (String specialAbility : specialAbilities) {
            spellSourceDatabase.streamSpells()
                    .filter(spell -> spell.name().equalsIgnoreCase(specialAbility))
                    .findFirst()
                    .ifPresent(spell -> bonuses.add(spell.id()));
        }
//        for (String trait : defensiveTraits) {
//            prerequisiteParser.tryGetIdFromName(trait)
//                    .ifPresent(bonuses::add);
//        }
//        for (String trait : offensiveTraits) {
//            prerequisiteParser.tryGetIdFromName(trait)
//                    .ifPresent(bonuses::add);
//        }
        for (String sense : senses) {
            switch (sense.toUpperCase()) {
                case "LOW-LIGHT VISION" -> bonuses.add("modifier:low_light_vision");
                case "DARKVISION 60 FT." -> bonuses.add("modifier:darkvision_60");
                case "DARKVISION 120 FT." -> bonuses.add("modifier:darkvision_120");
                case "DARKVISION" -> bonuses.add("modifier:darkvision");
                case "LIGHT SENSITIVITY" -> bonuses.add("modifier:light_sensitivity");
                case "SUPERIOR DARKVISION" -> bonuses.add("modifier:superior_darkvision");
                case "LIGHT BLINDNESS" -> bonuses.add("modifier:light_blindness");
            }
        }


        return bonuses.stream()
                .filter(Objects::nonNull)
                .toList();
    }

    private List<String> plusesToModifiers(List<String> pluses) {
        return pluses.stream().map(plus -> switch (plus.toUpperCase()) {
            case "STR" -> Modifiers.STR_PLUS_2;
            case "CON" -> Modifiers.CON_PLUS_2;
            case "DEX" -> Modifiers.DEX_PLUS_2;
            case "INT" -> Modifiers.INT_PLUS_2;
            case "WIS" -> Modifiers.WIS_PLUS_2;
            case "CHA" -> Modifiers.CHA_PLUS_2;
            case "ANY" -> Modifiers.ASI_2;
            default -> null;
        })
                .filter(Objects::nonNull)
                .map(Modifier::id).toList();
    }

    private List<String> minusesToModifiers(List<String> minuses) {
        return minuses.stream().map(minus -> switch (minus.toUpperCase()) {
            case "STR" -> Modifiers.STR_MINUS_2;
            case "CON" -> Modifiers.CON_MINUS_2;
            case "DEX" -> Modifiers.DEX_MINUS_2;
            case "INT" -> Modifiers.INT_MINUS_2;
            case "WIS" -> Modifiers.WIS_MINUS_2;
            case "CHA" -> Modifiers.CHA_MINUS_2;
            default -> null;
        })
                .filter(Objects::nonNull)
                .map(Modifier::id).toList();
    }

    @Override
    public Stream<Race> streamRaces() throws IOException {
        return scrape().stream();
    }

    private List<String> split(String bulk) {
        return Arrays.stream(bulk.split(","))
                .map(NameUtils::sanitize)
                .map(String::trim)
                .toList();
    }
}
