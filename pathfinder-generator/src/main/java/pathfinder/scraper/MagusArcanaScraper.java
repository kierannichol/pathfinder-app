package pathfinder.scraper;

import java.io.IOException;
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
import pathfinder.model.Description;
import pathfinder.model.pathfinder.Feature;
import pathfinder.util.NameToIdConverter;
import pathfinder.util.NameUtils;

@SpringBootApplication(scanBasePackages = {
        "pathfinder.app.config",
        "pathfinder.scraper"
}, exclude = ElasticsearchClientAutoConfiguration.class)
@Slf4j
public class MagusArcanaScraper extends D20pfsrdBaseScraper {

    @Override
    public void scrape() throws IOException {
        Document document = this.fetch(
                "https://www.d20pfsrd.com/classes/base-classes/magus/magus-arcana/");

        Elements rows = document.select(
                "#article-content table tbody tr");

        log.info("Found {} rows", rows.size());
        for (var row : rows) {
            String nameCellText = row.select("td:nth-child(1)").text();
            if (nameCellText.trim().isEmpty()) {
                continue;
            }

            String prerequisitesCellText = row.select("td:nth-child(2)").text();
            String descriptionCellText = row.select("td:nth-child(3)").text();
            String sourceCellText = row.select("td:nth-child(4)").text();

            String name = Feature.Type.removeTypeFromName(nameCellText);
            name = NameUtils.fixNameOrder(name);
            String type = Feature.Type.fromFeatureName(nameCellText);

            Description description = Description.create(descriptionCellText);
            addToDescription(row, description);

            if (prerequisitesCellText.equals("—")) {
                prerequisitesCellText = null;
            }

            var feature = Feature.builder()
                    .id(NameToIdConverter.generateId(AttributeType.MAGUS_ARCANA, name))
                    .name(name)
                    .type(type)
                    .prerequisites(prerequisitesCellText)
                    .description(description)
                    .source(sourceCellText);

//            log.info(feature.build().toString());
            save("magus_arcana/%s.yml".formatted(feature.id().key), feature.build());
        }
    }

    private void addToDescription(Element row, Description description) throws IOException {
        String link = row.select("td:nth-child(1) > a").attr("href");
        if (link.isEmpty()) {
            return;
        }
        Document document = this.fetch(link);
        String benefit = extractSection(document, "Benefit");
        if (benefit != null) {
            description.addSection("Benefit", benefit);
        }

        String normal = extractSection(document, "Normal");
        if (normal != null) {
            description.addSection("Normal", normal);
        }

        String special = extractSection(document, "Special");
        if (special != null) {
            description.addSection("Special", special);
        }
    }

    private String extractSection(Document document, String sectionLabel) {
        Element benefitElement = document.select("b:contains(%s)".formatted(sectionLabel)).first();
        if (benefitElement != null && benefitElement.parent() != null) {
            String blockText = benefitElement.parent().text();
            String benefit = blockText.substring(benefitElement.text().length()).trim();
            if (benefit.startsWith(":")) {
                benefit = benefit.substring(1).trim();
            }
            return benefit;
        }
        return null;
    }

    public static void main(String[] args) {
        SpringApplication.run(MagusArcanaScraper.class, args);
    }

    @Bean
    PathfinderDatabase pathfinderDatabase() {
        return new LocalPathfinderDatabaseLoader().load();
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {
            log.info("Scraping data...");
            ctx.getBean(MagusArcanaScraper.class).scrape();
            System.exit(0);
        };
    }
}
