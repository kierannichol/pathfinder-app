package pathfinder.scraper.remote.d20pfsrd;

import static java.lang.Integer.parseInt;
import static logic.util.Ordinal.parseOrdinal;
import static pathfinder.util.ListUtils.mapList;
import static pathfinder.util.ListUtils.mapSet;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.function.Function;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import logic.util.Ordinal;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.nodes.Node;
import org.jsoup.nodes.TextNode;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;
import pathfinder.model.Description;
import pathfinder.model.Id;
import pathfinder.model.IdTypes;
import pathfinder.model.pathfinder.ArmorProficiency;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.ClassLevel;
import pathfinder.model.pathfinder.ClassSkill;
import pathfinder.model.pathfinder.D20pfsrdCharacterClass.Level;
import pathfinder.model.pathfinder.D20pfsrdCharacterClass.Type;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.WeaponProficiency;
import pathfinder.model.pathfinder.WeaponType;
import pathfinder.model.pathfinder.Weapons;
import pathfinder.util.ListUtils;
import pathfinder.util.NameToIdConverter;
import pathfinder.util.NameUtils;
import pathfinder.util.StringUtils;

@Component("d20pfsrd Class Scraper")
@Slf4j
public class D20pfsrdClassScraper extends AbstractD20pfsrdScraper {
    private static final Pattern BAB_PATTERN = Pattern.compile("^\\+(\\d+).*$");
    private static final Pattern SPELLS_PER_DAY_PATTERN = Pattern.compile("^([-+]?\\d+).*$");

    public Stream<CharacterClass> streamClasses() {
        try {
            List<CharacterClass> classDatabase = new ArrayList<>();

            scrapeTypeToYaml(Type.CORE, new URL("https://www.d20pfsrd.com/classes/core-classes/"), classDatabase);
            scrapeTypeToYaml(Type.BASE, new URL("https://www.d20pfsrd.com/classes/base-classes/"), classDatabase);
            scrapeTypeToYaml(Type.HYBRID, new URL("https://www.d20pfsrd.com/classes/hybrid-classes/"), classDatabase);
            scrapeTypeToYaml(Type.UNCHAINED, new URL("https://www.d20pfsrd.com/classes/unchained-classes/"),
                    classDatabase);

            return classDatabase
                    .stream()
                    .map(this::customFixes);
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    private CharacterClass customFixes(CharacterClass characterClass) {
        if (characterClass.id().equals(Id.of("class:bloodrager"))) {
            Id bloodlineFeatId = Id.of("ability:bloodline_feat#bloodrager");
            Id bloodlineSpellId = Id.of("ability:bloodline_spell#bloodrager");

            var modifiedLevels = mapList(characterClass.levels(), level -> {
                var modifiedClassFeatureIds = new ArrayList<>(level.classFeatureIds());

                switch (level.level()) {
                    case 6:
                    case 9:
                    case 12:
                    case 15:
                    case 18:
                        modifiedClassFeatureIds.remove(Id.of("ability:bloodline#bloodrager"));
                        modifiedClassFeatureIds.add(bloodlineFeatId);
                        break;
                    case 7:
                    case 10:
                    case 13:
                    case 16:
                        modifiedClassFeatureIds.remove(Id.of("ability:bloodline#bloodrager"));
                        modifiedClassFeatureIds.add(bloodlineSpellId);
                        break;
                }

                return new ClassLevel(level.level(), modifiedClassFeatureIds, level.spellsPerDay(), level.spellsKnown());
            });

            var modifiedClassFeatures = new HashSet<>(characterClass.class_features());
            modifiedClassFeatures.add(new Feature(bloodlineFeatId,
                    "Bloodline Feat",
                    "",
                    Description.create("At 6th level and every 3 levels thereafter, a bloodrager receives one bonus feat chosen from a list specific to each bloodline. The bloodrager must meet the prerequisites for these bonus feats."),
                    "",
                    characterClass.source()));
            modifiedClassFeatures.add(new Feature(bloodlineSpellId,
                    "Bloodline Spell",
                    "",
                    Description.create("At 7th, 10th, 13th, and 16th levels, a bloodrager learns an additional spell derived from his bloodline. These spells are in addition to the number of spells given on Table: Bloodrager. These spells cannot be exchanged for different spells at higher levels."),
                    "",
                    characterClass.source()));

            return new CharacterClass(characterClass.id(),
                    characterClass.name(),
                    characterClass.category(),
                    characterClass.description(),
                    characterClass.source(),
                    characterClass.hit_die(),
                    characterClass.alignment(),
                    characterClass.class_skills(),
                    characterClass.skill_ranks_per_level(),
                    characterClass.bab(),
                    characterClass.fort(),
                    characterClass.ref(),
                    characterClass.will(),
                    characterClass.weapon_proficiencies(),
                    characterClass.armor_proficiencies(),
                    modifiedLevels,
                    characterClass.spell_caster_types(),
                    modifiedClassFeatures);
        }

        return characterClass;
    }

    private List<String> determineSpellCasterTypes(Id classId) {
        return switch (classId.key) {
            case "wizard", "sorcerer", "bloodrager", "bard", "magus", "summoner", "witch" -> List.of("arcane");
            case "cleric", "paladin", "ranger", "druid", "inquisitor", "oracle", "omdura" -> List.of("divine");
            default -> List.of();
        };
    }

    private void scrapeTypeToYaml(Type type, URL url, List<CharacterClass> classDatabase) throws IOException {
        Document document = fetch(url);

        Elements classLinks = document.select(".ogn-childpages>li>a");

        classLinks.stream()
                .map(link -> link.attr("href"))
                .forEach(href -> {
                    try {
                        scrapeCharacterClassToYaml(type, new URL(href), classDatabase);
                    } catch (IOException e) {
                        throw new UncheckedIOException(e);
                    }
                });
    }

    public void scrapeCharacterClassToYaml(Type type, URL url, List<CharacterClass> classDatabase) throws IOException {
        Document document = fetch(url);
        Element content = contentElement(document);

        String name = StringUtils.sanitize(content.selectFirst("h1").text());
        Id classId = NameToIdConverter.classId(name);
        Id id = classId;
        log.info("Scraping class " + name);

        String source = scrapeSourceFromCopyrightSection(document);

        Elements descriptionElements = findElementsBetween(content.selectFirst("h1"), this::elementIsEndOfSection);
        descriptionElements.removeIf(element -> element.is("div") || element.is("table"));

        String description = StringUtils.sanitize(descriptionElements.text());

        List<Block> classDescriptionLineBlocks = lineBlocks(descriptionElements).toList();

        String hitDie = blockTextNoPeriod(classDescriptionLineBlocks, "Hit Die").orElse("?").toUpperCase();
        String alignment = blockTextNoPeriod(classDescriptionLineBlocks, "Alignment").orElse("?");

        String skillsPerLevel = selectSection(content, "h3", "Class Skills")
                .flatMap(s -> blockTextNoPeriod(s.contentElements(), "Skill Ranks per Level"))
                .orElse("");

        skillsPerLevel = skillsPerLevel.replaceAll("(\\d+).*", "$1");

        Set<ClassSkill> classSkills = parseClassSkills(document);
        List<Level> levels = parseLevels(document, id);

        Set<Feature> classFeatures = levels.stream()
                .flatMap(level -> level.specials().stream())
                .collect(Collectors.toSet());

        // Proficiencies
        String proficiencyDescription = selectSection(content, "Weapon and Armor Proficiency")
                .or(() -> selectSection(content, "Weapon Proficiency"))
                .or(() -> selectSection(content, "Armor Proficiency"))
                .map(Block::contentText)
                .orElse("");
        Set<ArmorProficiency> armorProficiencies = scrapeArmorProficiencies(proficiencyDescription);
        Set<WeaponType> weaponProficiencies = scrapeWeaponProficiencies(proficiencyDescription);

        // Write YAML Entry
        CharacterClass classYaml = new CharacterClass(
                classId,
                name,
                type.name(),
                description,
                source,
                hitDie,
                alignment,
                mapSet(classSkills, ClassSkill::id),
                skillsPerLevel,
                progressionTier(levels, Level::bab),
                progressionTier(levels, Level::fortSave),
                progressionTier(levels, Level::refSave),
                progressionTier(levels, Level::willSave),
                new HashSet<>(ListUtils.mapSet(weaponProficiencies, wp -> IdTypes.PROFICIENCY.withKey(wp.id()))),
                new HashSet<>(ListUtils.mapSet(armorProficiencies, ArmorProficiency::id)),
                levels.stream()
                        .map(level -> new ClassLevel(level.level(),
                                mapList(level.specials(), Feature::id),
                                level.spellsPerDay(), level.spellsKnown()))
                        .toList(),
                determineSpellCasterTypes(classId),
                levels.stream()
                        .flatMap(level -> level.specials().stream()
                                .distinct()
                                .map(special -> new Feature(special.id(), special.name(), special.type(), special.description(), "", source)))
                        .collect(Collectors.toSet()));

        classDatabase.add(classYaml);
    }

    private static String progressionTier(List<Level> levels, Function<Level, Integer> statFn) {
        Level lastLevel = levels.get(levels.size() - 1);
        int stat = statFn.apply(lastLevel);
        return switch (stat) {
            case 20, 12 -> "A";
            case 15, 6 -> "B";
            case 10 -> "C";
            default -> throw new IllegalArgumentException("Unknown progression tier for " + stat);
        };
    }

    private static Set<WeaponType> scrapeWeaponProficiencies(String proficiencyDescription) {
        Set<WeaponType> weaponProficiencies = new HashSet<>();
        if (proficiencyDescription.contains("all simple and martial weapons")) {
            Weapons.ALL_WEAPONS.stream()
                    .filter(weapon -> weapon.requiredProficiency() == WeaponProficiency.SIMPLE || weapon.requiredProficiency() == WeaponProficiency.MARTIAL)
                    .forEach(weaponProficiencies::add);
        }
        if (proficiencyDescription.contains("all simple weapons")) {
            Weapons.ALL_WEAPONS.stream()
                    .filter(weapon -> weapon.requiredProficiency() == WeaponProficiency.SIMPLE)
                    .forEach(weaponProficiencies::add);
        }
        Weapons.ALL_WEAPONS.stream()
                .filter(weapon -> proficiencyDescription.toLowerCase().contains(NameUtils.fixNameOrder(weapon.name().toLowerCase())))
                .forEach(weaponProficiencies::add);
        return weaponProficiencies;
    }

    private static Set<ArmorProficiency> scrapeArmorProficiencies(String proficiencyDescription) {
        Set<ArmorProficiency> armorProficiencies = new HashSet<>();
        if (proficiencyDescription.contains("with all types of armor") || proficiencyDescription.contains("with all armor")) {
            armorProficiencies.add(ArmorProficiency.LIGHT_ARMOR);
            armorProficiencies.add(ArmorProficiency.MEDIUM_ARMOR);
            armorProficiencies.add(ArmorProficiency.HEAVY_ARMOR);
        }
        if (proficiencyDescription.contains("light armor")) {
            armorProficiencies.add(ArmorProficiency.LIGHT_ARMOR);
        }
        if (proficiencyDescription.contains("medium armor")) {
            armorProficiencies.add(ArmorProficiency.MEDIUM_ARMOR);
        }
        if (proficiencyDescription.contains("light and medium armor")) {
            armorProficiencies.add(ArmorProficiency.LIGHT_ARMOR);
            armorProficiencies.add(ArmorProficiency.MEDIUM_ARMOR);
        }
        if ((proficiencyDescription.contains("with shields") && !proficiencyDescription.contains("not with shields")) || proficiencyDescription.contains("and shields")) {
            armorProficiencies.add(ArmorProficiency.BUCKLER);
            armorProficiencies.add(ArmorProficiency.LIGHT_SHIELD);
            armorProficiencies.add(ArmorProficiency.HEAVY_SHIELD);
            armorProficiencies.add(ArmorProficiency.TOWER_SHIELD);
        }
        if (proficiencyDescription.contains("except tower shields")) {
            armorProficiencies.remove(ArmorProficiency.TOWER_SHIELD);
        }
        return armorProficiencies;
    }

    private String scrapeShortDescription(Document document) {
        Element roleHeaderElement = document.getElementsContainingOwnText("Role").first();
        Element roleTextElement = roleHeaderElement.parent();
        return roleTextElement.text().replaceAll("^Role:\\s+", "");
    }

    private String parseClassName(Document document) {
        return document.select("#article-content>h1").first().text();
    }

    private List<Level> parseLevels(Document document, Id classId) {
        var table = document.select("#article-content table[border=1]").first();
        var rows = table.select("tbody tr");

        return rows.stream()
                .map(row -> parseLevelRow(row, classId))
                .filter(Objects::nonNull)
                .toList();
    }

    private Level parseLevelRow(Element element, Id classId) {
        var columns = element.select("td");
        if (columns.size() < 5) {
            return null;
        }

        int level = parseOrdinal(columns.get(0).text());
        int bab = parseBab(columns.get(1).text());
        int fortSave = parseInt(columns.get(2).text());
        int refSave = parseInt(columns.get(3).text());
        int willSave = parseInt(columns.get(4).text());

        int specialsColumnIndex = 5;
        // Extra number column sometimes (TODO: should parse this)
        if (columns.get(specialsColumnIndex).attr("class").equals("number")) {
            specialsColumnIndex++;
        }
        Elements specialLinks = columns.get(specialsColumnIndex).select("a");
        List<Feature> specials = specialLinks.stream()
                .map(el -> parseSpecial(el, classId))
                .filter(Objects::nonNull)
                .toList();

        Map<Integer, Integer> spellsPerDay = new HashMap<>();
        for (int i = specialsColumnIndex + 1; i < columns.size(); i++) {
            String spellsPerDayText = columns.get(i).text();
            if ("—".equals(spellsPerDayText)) {
                continue;
            }

            spellsPerDay.put(i - specialsColumnIndex, parseSpellsPerDay(spellsPerDayText));
        }

        Map<Integer, Integer> spellsKnown = new HashMap<>();
        Element spellsKnownHeading = element.ownerDocument()
                .getElementsMatchingText(" Spells (Known|Prepared)")
                .stream().filter(e -> e.is("caption"))
                .findFirst()
                .orElse(null);

        if (spellsKnownHeading != null) {
            var spellLevelHeadingsCols = spellsKnownHeading
                    .parent()
                    .select("thead > tr:last-child > th");

            int rowOffset = 0;
            if (spellLevelHeadingsCols.size() == 0) {
                spellLevelHeadingsCols = spellsKnownHeading
                        .parent()
                        .select("tbody > tr:first-child > th");
                rowOffset = 1;
            }

            var spellLevelHeadings = spellLevelHeadingsCols.stream()
                    .filter(e -> e.is(".number"))
                    .map(col -> Ordinal.parseOrdinal(col.text()))
                    .toList();

            var spellsKnownColumns = spellsKnownHeading
                    .parent()
                    .select("tbody > tr:nth-child(%d) > td".formatted(level+rowOffset));

            for (int i = 1; i < spellsKnownColumns.size(); i++) {
                String spellsKnownText = spellsKnownColumns.get(i).text();
                if ("—".equals(spellsKnownText)) {
                    continue;
                }
                spellsKnown.put(spellLevelHeadings.get(i-1), Integer.parseInt(spellsKnownText));
            }
        }

        return new Level(
                level,
                bab,
                fortSave,
                refSave,
                willSave,
                specials,
                spellsPerDay,
                spellsKnown
        );
    }

    private Feature parseSpecial(Element element, Id classId) {
//        String name = element.text();
        String specialLabel = element.text();
        specialLabel = NameUtils.sanitize(specialLabel);
        Id id = NameToIdConverter.abilityId(specialLabel)
                .withOption(classId.key);

        StringBuilder descriptionBuilder = new StringBuilder();

        Document document = element.ownerDocument();
        Element linkTarget = findLinkAnchor(element);
        if (linkTarget == null) {
            return null;
        }

        Element headerElement = linkTarget.parent();
        if (headerElement.is("span")) {
            headerElement = headerElement.parent();
        }

        Element nameElement = headerElement;

        if (headerElement.is("h4")) {
            Element nextSibling = headerElement.nextElementSibling();
            while (nextSibling != null && nextSibling.is("p")) {
                descriptionBuilder.append(nextSibling.text());
                nextSibling = nextSibling.nextElementSibling();
            }
        }
        else if (headerElement.is("p")) {
            nameElement = headerElement.selectFirst("b");
            if (nameElement != null) {
                Node nextSibling = nameElement.nextSibling();
                if (nextSibling instanceof TextNode textSibling) {
                    descriptionBuilder.append(textSibling.text());
                }
            } else if (linkTarget.nextElementSibling() != null && linkTarget.nextElementSibling().is("a")) {
                nameElement = linkTarget.nextElementSibling();
                Node sibling = linkTarget;
                while (sibling != null && sibling.previousSibling() != null && !(sibling.previousSibling() instanceof Element siblingElement && siblingElement.is("br"))) {
                    sibling = sibling.previousSibling();
                }
                while (sibling != null && !(sibling instanceof Element siblingElement && siblingElement.is("br"))) {
                    if (sibling instanceof TextNode textSibling) {
                        descriptionBuilder.append(textSibling.text());
                    }
                    else if (sibling instanceof Element siblingElement) {
                        descriptionBuilder.append(siblingElement.text());
                    }
                    sibling = sibling.nextSibling();
                }
            }
        }

        String sectionName = StringUtils.sanitize(nameElement.text());
        String type = Feature.Type.fromFeatureName(sectionName);

//        String name = nameElement.text();
        String name = specialLabel;
        name = NameUtils.sanitize(name);
        name = name.replaceAll(" \\((Sp|Su|Ex)\\)", "");
        name = NameUtils.fixNameOrder(name);
//        String id = NameToIdConverter.abilityId(name);

        name = StringUtils.toCamelCase(name);

        String description = descriptionBuilder.toString().trim()
                .replaceAll("^:", "")
                .replace("[See FAQ]", "")
                .trim();
        description = StringUtils.sanitize(description);

        return Feature.builder()
                .id(id)
                .name(name)
                .type(type)
                .description(Description.create(description))
                .build();
    }

    private int parseBab(String str) {
        Matcher matcher = BAB_PATTERN.matcher(str);
        if (!matcher.find()) {
            throw new IllegalArgumentException("Not a valid BAB: " + str);
        }
        return parseInt(matcher.group(1));
    }

    private int parseSpellsPerDay(String str) {
        Matcher matcher = SPELLS_PER_DAY_PATTERN.matcher(str.replace("–", "-"));
        if (!matcher.find()) {
            throw new IllegalArgumentException("Not a valid spells per day: " + str);
        }
        return parseInt(matcher.group(1));
    }

    private Set<ClassSkill> parseClassSkills(Document document) {
        Element headerText = document.getElementById("Class_Skills");
        if (headerText == null) {
            headerText = document.getElementById("Class_skills");
        }
        Element header = headerText.parent();
        Element skillsParagraph = header.nextElementSibling();
        return skillsParagraph.select("a")
                .stream().filter(link -> link.attr("href").startsWith("https://www.d20pfsrd.com/skills/"))
                .map(Element::text)
                .map(NameToIdConverter::skillId)
                .map(ClassSkill::new)
                .collect(Collectors.toSet());
    }
}
