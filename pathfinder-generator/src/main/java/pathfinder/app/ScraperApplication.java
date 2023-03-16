package pathfinder.app;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import pathfinder.scraper.local.D20pfsrdClassYamlGenerator;

@SpringBootApplication(scanBasePackages = {
        "pathfinder.app.config",
        "pathfinder.scraper",
        "pathfinder.source"
})
@Slf4j
public class ScraperApplication {

    public static void main(String[] args) {
        SpringApplication.run(ScraperApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {

            ctx.getBean(D20pfsrdClassYamlGenerator.class).generateLocalDatabase();

//            ctx.getBean(SpellYamlGenerator.class).generateLocalDatabase();
//            ctx.getBean(D20pfsrdRaceYamlGenerator.class).generateLocalDatabase();
//            ctx.getBean(MagusArcanaYamlGenerator.class).generateLocalDatabase();
//            ctx.getBean(D20pfsrdFeatYamlGenerator.class).generateLocalDatabase();
//            ctx.getBean(D20pfsrdClassYamlGenerator.class).generateLocalDatabase();

//            Map<String, DatabaseGenerator> generators = ctx.getBeansOfType(DatabaseGenerator.class);
//            for (Map.Entry<String, DatabaseGenerator> entry : generators.entrySet()) {
//                log.info("Running {}...", entry.getKey());
//                entry.getValue().generate();
//            }
        };
    }

}
