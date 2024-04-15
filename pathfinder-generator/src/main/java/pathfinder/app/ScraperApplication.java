package pathfinder.app;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.elasticsearch.ElasticsearchClientAutoConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import pathfinder.db.LocalPathfinderDatabaseLoader;
import pathfinder.db.PathfinderDatabase;
import pathfinder.scraper.WeaponSpecialAbilityScraper;

@SpringBootApplication(scanBasePackages = {
        "pathfinder.app.config",
        "pathfinder.scraper"
}, exclude = ElasticsearchClientAutoConfiguration.class)
@Slf4j
public class ScraperApplication {

    public static void main(String[] args) {
        SpringApplication.run(ScraperApplication.class, args);
    }

    @Bean
    PathfinderDatabase pathfinderDatabase() {
        return new LocalPathfinderDatabaseLoader().load();
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {
            log.info("Scraping data...");

//            SortekaninItemScraper search = ctx.getBean(SortekaninItemScraper.class);
//            ctx.getBean(ScrollItemDataGenerator.class).scrape();
//            ctx.getBean(PotionItemDataGenerator.class).scrape();

            ctx.getBean(WeaponSpecialAbilityScraper.class).scrape();

            System.exit(0);
        };
    }
}
