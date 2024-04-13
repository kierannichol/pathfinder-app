package pathfinder.scraper;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.CharacterClass.CharacterClassBuilder;
import pathfinder.model.pathfinder.ClassLevel;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.Feature.Type;
import pathfinder.model.pathfinder.Skills;
import pathfinder.model.pathfinder.Sources;
import pathfinder.util.NameToIdConverter;

@Slf4j
@Component
@RequiredArgsConstructor
public class OccultAdventuresScraper extends D20pfsrdBaseScraper {

    @Override
    public void scrape() throws IOException {
        scrapeClass("https://www.d20pfsrd.com/alternative-rule-systems/occult-adventures/occult-classes/kineticist");
        scrapeClass("https://www.d20pfsrd.com/alternative-rule-systems/occult-adventures/occult-classes/medium");
        scrapeClass("https://www.d20pfsrd.com/alternative-rule-systems/occult-adventures/occult-classes/mesmerist");
        scrapeClass("https://www.d20pfsrd.com/alternative-rule-systems/occult-adventures/occult-classes/occultist");
        scrapeClass("https://www.d20pfsrd.com/alternative-rule-systems/occult-adventures/occult-classes/spiritualist");
    }

    private void scrapeClass(String url) throws IOException {
        CharacterClassBuilder characterClass = CharacterClass.builder();

        Document doc = Jsoup.parse(
                new URL(url),
                5000);

        String name = doc.select("#article-content > h1").text();
        characterClass.name(name);
//        log.info("Name: " + name);

        Id classId = NameToIdConverter.classId(name);
        characterClass.id(classId);

        characterClass.category("OCCULT");

        String description = doc.select("#article-content > p:nth-child(6)").text();
        characterClass.description(description);
//        log.info("Description: " + description);

        String alignment = liftColonKeyValue(doc.selectFirst("p:contains(Alignment:)").text());
        characterClass.alignment(alignment);
//        log.info("Alignment: " + alignment);

        String hitDie = liftColonKeyValue(doc.selectFirst("p:contains(Hit Die:)").text()).toUpperCase();
        characterClass.hitDie(hitDie);
//        log.info("Hit Die: " + hitDie);

        var classSkills = parseClassSkills(doc);
//        log.info("Class Skills: " + classSkills);
        classSkills.forEach(characterClass::addClassSkill);

        int skillRanksPerLevel = Integer.parseInt(
                liftColonKeyValue(doc.selectFirst("p:contains(Skill Ranks per Level:)").text()));
//        log.info("Skill Ranks per Level: " + skillRanksPerLevel);
        characterClass.skillRanksPerLevel(Integer.toString(skillRanksPerLevel));

        var classFeatures = parseClassFeatures(doc, name, classId);
//        log.info("Class Features: " + classFeatures);
        classFeatures.forEach(characterClass::addClassFeature);

        var classLevels = parseClassLevels(doc, classFeatures);
//        log.info("Class Levels: " + classLevels);
        classLevels.forEach(characterClass::addLevel);

        parseBabAndSaves(doc, characterClass);

        characterClass.source(Sources.OCCULT_ADVENTURES.code());

        CharacterClass built = characterClass.build();
        log.info(built.toString());

        save("class/" + built.id().key + ".yml", built);
    }

    private void parseBabAndSaves(Document doc, CharacterClassBuilder builder) {
        Elements table = doc.select("p:contains(Skill Ranks per Level:) + table");
        var lastRow = table.select("tbody tr:nth-child(20) td");

        String babText = lastRow.get(1).text();
        String fortSave = lastRow.get(2).text();
        String refSave = lastRow.get(3).text();
        String willSave = lastRow.get(4).text();

        builder.bab(switch (babText) {
            case "+20/+15/+10/+5" -> "A";
            case "+15/+10/+5" -> "B";
            case "+10/+5" -> "C";
            default -> throw new IllegalArgumentException("Unknown BAB: " + babText);
        });

        builder.fort(switch (fortSave) {
            case "+12" -> "A";
            case "+6" -> "B";
            default -> throw new IllegalArgumentException("Unknown Fort Save: " + fortSave);
        });

        builder.ref(switch (refSave) {
            case "+12" -> "A";
            case "+6" -> "B";
            default -> throw new IllegalArgumentException("Unknown Ref Save: " + refSave);
        });

        builder.will(switch (willSave) {
            case "+12" -> "A";
            case "+6" -> "B";
            default -> throw new IllegalArgumentException("Unknown Will Save: " + willSave);
        });
    }

    private List<ClassLevel> parseClassLevels(Document doc, List<Feature> classFeatures) {
        List<ClassLevel> classLevels = new ArrayList<>();

        Elements table = doc.select("p:contains(Skill Ranks per Level:) + table");

        String nameFixRegex = "(\\d+/day)|(\\d+d\\d+)|([^a-zA-Z' ])|( increase)";

        var specialElements= table.select("tbody tr td:nth-child(6)");
        for (int i = 0; i < specialElements.size(); i++) {
            int level = i + 1;
            String specialsText = specialElements.get(i).text();
            List<Id> specials = Arrays.stream(specialsText.split(", ?"))
                    .map(specialText -> specialText.replaceAll(nameFixRegex, "").trim())
                    .map(specialName -> {
                        for (Feature classFeature : classFeatures) {
                            specialName = switch (specialName.toLowerCase()) {
                                case "focus power" -> "focus powers";
                                case "mesmerist trick" -> "mesmerist tricks";
                                default -> specialName;
                            };
                            if (specialName.equalsIgnoreCase(classFeature.name().replaceAll(nameFixRegex, "").trim())) {
                                return classFeature.id();
                            }
                        }
                        throw new IllegalArgumentException("No feature found for " + specialName);
                    })
                    .toList();

            classLevels.add(ClassLevel.builder()
                    .level(level)
                    .addClassFeatureIds(specials)
                    .build());
        }

        return classLevels;
    }

    private List<Feature> parseClassFeatures(Document doc, String className, Id classId) {
        List<Feature> features = new ArrayList<>();

        if (classId.equals(Id.of("class:medium"))
                || classId.equals(Id.of("class:spiritualist"))
                || classId.equals(Id.of("class:mesmerist"))) {
            features.add(Feature.builder()
                    .id(NameToIdConverter.abilityId("Knacks"))
                    .name("Knacks")
                    .description(className + " learn a number of knacks, or 0-level spells. These spells are cast like any other spell, but they don't consume slots and can be used again.")
                    .source(Sources.OCCULT_ADVENTURES.code())
                    .build());
        }

        doc.select("h3:contains(Class Features) ~ h4").forEach(h4 -> {
            String featureNameFull = h4.text();
            Elements nextSiblings = h4.nextElementSiblings();
            var startOfNextFeature = nextSiblings.select("h1, h2, h3, h4").first();
            int indexOfNextFeature = nextSiblings.indexOf(startOfNextFeature);
            var descriptionElements = indexOfNextFeature >= 0
                ? nextSiblings.subList(0, indexOfNextFeature)
                : nextSiblings;

            String featureName = Type.removeTypeFromName(featureNameFull);
            String type = Type.fromFeatureName(featureNameFull);
            String description = descriptionElements.stream().map(element -> element.text()).collect(Collectors.joining("\n"));

            Feature feature = Feature.builder()
                    .id(NameToIdConverter.abilityId(featureName))
                    .name(featureName)
                    .type(type)
                    .description(description)
                    .source(Sources.OCCULT_ADVENTURES.code())
                    .build();

            if (feature.name().equals("Wild Talents")) {
                featureName = "Utility Wild Talent";
                Feature utilityWildTalent = Feature.builder()
                        .id(NameToIdConverter.abilityId(featureName))
                        .name(featureName)
                        .type(type)
                        .description(description)
                        .source(Sources.OCCULT_ADVENTURES.code())
                        .build();

                features.add(utilityWildTalent);
                return;
            }

            if (feature.name().equals("Metakinesis")) {
                featureName = "Metakinesis (Empower)";
                features.add(Feature.builder()
                        .id(NameToIdConverter.abilityId(featureName))
                        .name(featureName)
                        .type(type)
                        .description(description)
                        .source(Sources.OCCULT_ADVENTURES.code())
                        .build());
                featureName = "Metakinesis (Maximize)";
                features.add(Feature.builder()
                        .id(NameToIdConverter.abilityId(featureName))
                        .name(featureName)
                        .type(type)
                        .description(description)
                        .source(Sources.OCCULT_ADVENTURES.code())
                        .build());
                featureName = "Metakinesis (Quicken)";
                features.add(Feature.builder()
                        .id(NameToIdConverter.abilityId(featureName))
                        .name(featureName)
                        .type(type)
                        .description(description)
                        .source(Sources.OCCULT_ADVENTURES.code())
                        .build());
                featureName = "Metakinesis (Twice)";
                features.add(Feature.builder()
                        .id(NameToIdConverter.abilityId(featureName))
                        .name(featureName)
                        .type(type)
                        .description(description)
                        .source(Sources.OCCULT_ADVENTURES.code())
                        .build());
                return;
            }

            if (feature.name().equalsIgnoreCase("Spirit")) {
                featureName = "Spirit Power (Lesser)";
                features.add(Feature.builder()
                        .id(NameToIdConverter.abilityId(featureName))
                        .name(featureName)
                        .type(type)
                        .description(description)
                        .source(Sources.OCCULT_ADVENTURES.code())
                        .build());

                featureName = "Spirit Power (Intermediate)";
                features.add(Feature.builder()
                        .id(NameToIdConverter.abilityId(featureName))
                        .name(featureName)
                        .type(type)
                        .description(description)
                        .source(Sources.OCCULT_ADVENTURES.code())
                        .build());

                featureName = "Spirit Power (Greater)";
                features.add(Feature.builder()
                        .id(NameToIdConverter.abilityId(featureName))
                        .name(featureName)
                        .type(type)
                        .description(description)
                        .source(Sources.OCCULT_ADVENTURES.code())
                        .build());

                featureName = "Spirit Power (Supreme)";
                features.add(Feature.builder()
                        .id(NameToIdConverter.abilityId(featureName))
                        .name(featureName)
                        .type(type)
                        .description(description)
                        .source(Sources.OCCULT_ADVENTURES.code())
                        .build());
            }

            if (feature.name().equalsIgnoreCase("Touch Treatment")) {
                featureName = "Touch Treatment (Minor)";
                features.add(Feature.builder()
                        .id(NameToIdConverter.abilityId(featureName))
                        .name(featureName)
                        .type(type)
                        .description(description)
                        .source(Sources.OCCULT_ADVENTURES.code())
                        .build());

                featureName = "Touch Treatment (Moderate)";
                features.add(Feature.builder()
                        .id(NameToIdConverter.abilityId(featureName))
                        .name(featureName)
                        .type(type)
                        .description(description)
                        .source(Sources.OCCULT_ADVENTURES.code())
                        .build());

                featureName = "Touch Treatment (Greater)";
                features.add(Feature.builder()
                        .id(NameToIdConverter.abilityId(featureName))
                        .name(featureName)
                        .type(type)
                        .description(description)
                        .source(Sources.OCCULT_ADVENTURES.code())
                        .build());

                featureName = "Touch Treatment (Break Enchantment)";
                features.add(Feature.builder()
                        .id(NameToIdConverter.abilityId(featureName))
                        .name(featureName)
                        .type(type)
                        .description(description)
                        .source(Sources.OCCULT_ADVENTURES.code())
                        .build());

                return;
            }

            features.add(feature);
        });

        return features;
    }

    private List<Id> parseClassSkills(Document doc) {
        var classSkillsText = doc.selectFirst("h3:contains(Class Skills) + p").text();

        List<Id> classSkills = new ArrayList<>();
        Skills.ALL.forEach(skill -> {
            if (classSkillsText.contains(skill.name())) {
                classSkills.add(skill.id());
            }
        });

        return classSkills;
    }
}
