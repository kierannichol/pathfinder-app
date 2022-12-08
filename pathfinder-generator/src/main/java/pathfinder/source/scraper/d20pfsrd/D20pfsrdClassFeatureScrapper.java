package pathfinder.source.scraper.d20pfsrd;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.HttpStatusException;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Service;
import pathfinder.model.Ability;
import pathfinder.parser.AttributeType;

@Service("d20pfsrd Class Feature Scraper")
@Slf4j
@RequiredArgsConstructor
public class D20pfsrdClassFeatureScrapper extends AbstractD20pfsrdScraper {
    private static Map<String, AttributeType> ATTRIBUTE_TYPES_BY_NAME = new HashMap<>();
    static {
        /*
        RAGE_POWER("rage_power"),
    ROGUE_TALENT("rogue_talent"),
    MAGUS_ARCANA("magus_arcana"),
    ALCHEMIST_DISCOVERY("discovery"),
    BARDIC_MASTERPIECE("masterpiece"),
    GUNSLINGER_DEED("deed"),
    ORACLE_MYSTERY("mystery"),
    ORACLE_CURSE("curse"),
    VIGILANTE_SOCIAL_TALENT("vigilante_social_talent"),
    VIGILANTE_TALENT("vigilante_talent"),
    WITCH_HEX("witch_hex"),
    ARCANIST_EXPLOIT("arcanist_exploit"),
    INVESTIGATOR_TALENT("investigator_talent"),
    SHAMAN_HEX("shaman_hex"),
    SLAYER_TALENT("slayer_talent"),
    SWASHBUCKLER_DEED("swashbuckler_deed"),
    WARPRIEST_BLESSINGS("blessing"),
    UNCHAINED_RAGE_POWER("unchained_rage_power"),
    UNCHAINED_KI_POWER("unchained_ki_power"),
    UNCHAINED_ROGUE_TALENT("unchained_rogue_talent"),
         */
        ATTRIBUTE_TYPES_BY_NAME.put("Rage Powers", AttributeType.RAGE_POWER);
        ATTRIBUTE_TYPES_BY_NAME.put("Rogue Talents", AttributeType.ROGUE_TALENT);
        ATTRIBUTE_TYPES_BY_NAME.put("Magus Arcana", AttributeType.MAGUS_ARCANA);
        ATTRIBUTE_TYPES_BY_NAME.put("Discoveries", AttributeType.ALCHEMIST_DISCOVERY);
        ATTRIBUTE_TYPES_BY_NAME.put("Masterpieces", AttributeType.BARDIC_MASTERPIECE);
        ATTRIBUTE_TYPES_BY_NAME.put("Gunslinger's Deeds", AttributeType.GUNSLINGER_DEED);
        ATTRIBUTE_TYPES_BY_NAME.put("Mysteries", AttributeType.ORACLE_MYSTERY);
        ATTRIBUTE_TYPES_BY_NAME.put("Curses", AttributeType.ORACLE_CURSE);
//        ATTRIBUTE_TYPES_BY_NAME.put("vigilante_social_talent", AttributeType.VIGILANTE_SOCIAL_TALENT);
//        ATTRIBUTE_TYPES_BY_NAME.put("vigilante_talent", AttributeType.VIGILANTE_TALENT);
        ATTRIBUTE_TYPES_BY_NAME.put("witch_hex", AttributeType.WITCH_HEX);
        ATTRIBUTE_TYPES_BY_NAME.put("arcanist_exploit", AttributeType.ARCANIST_EXPLOIT);

        ATTRIBUTE_TYPES_BY_NAME.put("investigator_talent", AttributeType.INVESTIGATOR_TALENT);
        ATTRIBUTE_TYPES_BY_NAME.put("shaman_hex", AttributeType.SHAMAN_HEX);
        ATTRIBUTE_TYPES_BY_NAME.put("slayer_talent", AttributeType.SLAYER_TALENT);
        ATTRIBUTE_TYPES_BY_NAME.put("swashbuckler_deed", AttributeType.SWASHBUCKLER_DEED);
        ATTRIBUTE_TYPES_BY_NAME.put("warpriest_blessings", AttributeType.WARPRIEST_BLESSINGS);
        ATTRIBUTE_TYPES_BY_NAME.put("unchained_rage_power", AttributeType.UNCHAINED_RAGE_POWER);
        ATTRIBUTE_TYPES_BY_NAME.put("unchained_ki_power", AttributeType.UNCHAINED_KI_POWER);
        ATTRIBUTE_TYPES_BY_NAME.put("unchained_rogue_talent", AttributeType.UNCHAINED_ROGUE_TALENT);

    }
    private final D20pfsrdAbilityPageScraper abilityPageScraper;
    private final List<Ability> cached = new ArrayList<>();

    public List<Ability> scrape() throws IOException {
        if (cached.isEmpty()) {
            Document document = fetch(new URL("https://www.d20pfsrd.com/"));

            cached.addAll(scrapeType(document, "Core Classes"));
            cached.addAll(scrapeType(document, "Base Classes"));
            cached.addAll(scrapeType(document, "Hybrid Classes"));
            cached.addAll(scrapeType(document, "Unchained Classes"));
        }
        return cached;
    }

    private List<Ability> scrapeType(Document document, String typeName) throws IOException {

        List<Ability> foundAbilities = new ArrayList<>();

        Element headerElement = document
                .select("main")
                .first()
                .getElementsContainingOwnText(typeName).first();
        Element contentSection = headerElement.parent().nextElementSibling();

        Iterator<Element> links = contentSection.select("a, br").iterator();

        while (links.hasNext()) {
            Element classElement = links.next();
            while (links.hasNext()) {
                Element next = links.next();
                if (next.is("br")) {
                    break;
                }



                foundAbilities.addAll(scrapeClassFeaturePage(new URL(next.attr("href"))));
            }
        }

        return List.of();
    }

    private List<Ability> scrapeClassFeaturePage(URL url) throws IOException {
        Document document = fetch(url);
        Element main = document.selectFirst("main");
        if (main == null) {
            throw new IllegalStateException("<main> element missing from " + document.title());
        }

        return main.select("a").stream()
                .filter(a -> a.attr("href").startsWith(url.toString())
                    && !a.attr("href").startsWith(url + "#"))
                .map(a -> {
                    try {
                        var ability = abilityPageScraper.scrape(AttributeType.ABILITY, new URL(a.attr("href")));
                        log.info(ability.toString());
                        return ability;
                    } catch (HttpStatusException e) {
                        if (e.getStatusCode() != 404) {
                            throw new UncheckedIOException(e);
                        }
                        return null;
                    } catch (IOException e) {
                        throw new UncheckedIOException(e);
                    }
                })
                .filter(Objects::nonNull)
                .toList();
    }
}
