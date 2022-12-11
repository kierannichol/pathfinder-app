package pathfinder.app;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import pathfinder.generator.ClassDatabaseGenerator;
import pathfinder.generator.SorcererBloodlineDatabaseGenerator;

@SpringBootApplication(scanBasePackages = {
        "pathfinder.encoder",
        "pathfinder.generator",
        "pathfinder.source"
})
@Slf4j
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {
//            ctx.getBean(CompleteAbilityDatabaseGenerator.class).generate();
            ctx.getBean(ClassDatabaseGenerator.class).generate();
            ctx.getBean(SorcererBloodlineDatabaseGenerator.class).generate();
//            ctx.getBean(OracleMysteryDatabaseGenerator.class).generate();
//            ctx.getBean(FeatDatabaseGenerator.class).generate();

//            ctx.getBean(NethysSpellsScraper.class).stream()
//                    .forEach(spell -> log.info(spell.name()));

//            for (Ability ability : scraped) {
//                log.info(ability.toString());
//            }

//            Map<String, DatabaseGenerator> generators = ctx.getBeansOfType(DatabaseGenerator.class);
//            for (Map.Entry<String, DatabaseGenerator> entry : generators.entrySet()) {
//                log.info("Running {}...", entry.getKey());
//                entry.getValue().generate();
//            }
        };
    }

}
