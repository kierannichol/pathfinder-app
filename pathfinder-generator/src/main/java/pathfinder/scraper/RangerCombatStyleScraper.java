package pathfinder.scraper;

import java.io.IOException;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.elasticsearch.ElasticsearchClientAutoConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import pathfinder.db.LocalPathfinderDatabaseLoader;
import pathfinder.db.PathfinderDatabase;
import pathfinder.model.AttributeType;
import pathfinder.model.pathfinder.RangerCombatStyle;
import pathfinder.model.pathfinder.Sources;
import pathfinder.util.NameToIdConverter;

@SpringBootApplication(scanBasePackages = {
        "pathfinder.app.config",
}, exclude = ElasticsearchClientAutoConfiguration.class)
@Slf4j
public class RangerCombatStyleScraper extends D20pfsrdBaseScraper {

    @Override
    public void scrape() throws IOException {
        Document document = this.fetch(
                "https://www.d20pfsrd.com/classes/core-classes/ranger/ranger-combat-styles/");

        Elements styleHeaderElements = document.select("#article-content h4");
        for (Element styleHeaderElement : styleHeaderElements) {
            Element styleListElement = styleHeaderElement.nextElementSibling();
            if (!styleListElement.is("ul")) {
                styleListElement = styleListElement.nextElementSibling();
            }
            var style = parseStyleListElement(styleHeaderElement.text(), styleListElement);
            save("ranger_combat_style/%s.yml".formatted(NameToIdConverter.partialId(style.name())), style);
        }
    }

    private RangerCombatStyle parseStyleListElement(String name, Element styleListElement) {
        Elements styleElements = styleListElement.select("li");

        return new RangerCombatStyle(
                NameToIdConverter.generateId(AttributeType.RANGER_COMBAT_STYLE, name),
                name,
                extractFeatures(styleElements.get(0)),
                extractFeatures(styleElements.get(1)),
                extractFeatures(styleElements.get(2)),
                Sources.CORE.code());
    }

    private List<String> extractFeatures(Element listItemElement) {
        return listItemElement.select("a").stream()
                .map(Element::text)
                .toList();
    }

    public static void main(String[] args) {
        SpringApplication.run(RangerCombatStyleScraper.class, args);
    }

    @Bean
    PathfinderDatabase pathfinderDatabase() {
        return new LocalPathfinderDatabaseLoader().load();
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {
            log.info("Scraping Ranger Combat Styles data...");
            ctx.getBean(RangerCombatStyleScraper.class).scrape();
            System.exit(0);
        };
    }
}
