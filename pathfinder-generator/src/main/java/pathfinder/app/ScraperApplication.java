package pathfinder.app;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import pathfinder.db.LocalPathfinderDatabaseLoader;
import pathfinder.db.PathfinderDatabase;
import pathfinder.scraper.Scraper;
import pathfinder.scraper.UtilityWildTalentScraper;

@SpringBootApplication(scanBasePackages = {
        "pathfinder.app.config",
        "pathfinder.scraper"
})
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

            Scraper scraper = ctx.getBean(UtilityWildTalentScraper.class);
            scraper.scrape();
        };
    }
}
