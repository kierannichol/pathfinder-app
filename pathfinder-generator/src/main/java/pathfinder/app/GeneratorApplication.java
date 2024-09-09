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
import pathfinder.generator.CharacterTemplateGenerator;
import pathfinder.generator.DatabaseWriter;
import pathfinder.generator.SourceBookIndexGenerator;
import pathfinder.generator.SourceModuleDatabaseGenerator;
import pathfinder.generator.SourceModuleItemDatabaseGenerator;
import pathfinder.model.CharacterTemplate;
import pathfinder.model.pathfinder.SourceId;

@SpringBootApplication(scanBasePackages = {
        "pathfinder.app.config",
        "pathfinder.generator"
}, exclude = ElasticsearchClientAutoConfiguration.class)
@Slf4j
public class GeneratorApplication {

    public static void main(String[] args) {
        SpringApplication.run(GeneratorApplication.class, args);
    }

    @Bean
    PathfinderDatabase pathfinderDatabase() {
        return new LocalPathfinderDatabaseLoader().load();
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {
            DatabaseWriter writer = ctx.getBean(DatabaseWriter.class);
            CharacterTemplateGenerator characterTemplateGenerator = ctx.getBean(CharacterTemplateGenerator.class);
            PathfinderDatabase db = ctx.getBean(PathfinderDatabase.class);

            log.info("Generating base entities...");

            CharacterTemplate base = characterTemplateGenerator.generate();
            writer.write(base.toDbo(), "character_template");

//            var sources = List.of(
//                    Sources.CORE,
//                    Sources.COMPANION_HEROES_OF_THE_HIGH_COURT,
//                    Sources.ADVANCED_PLAYERS_GUIDE,
//                    Sources.GAMEMASTERY_GUIDE,
//                    Sources.ADVANCED_CLASS_GUIDE,
//                    Sources.ULTIMATE_COMBAT,
//                    Sources.ULTIMATE_MAGIC,
//                    Sources.ULTIMATE_EQUIPMENT,
//                    Sources.UNCHAINED,
//                    Sources.OCCULT_ADVENTURES,
//                    Sources.ADVANCED_RACE_GUIDE,
//                    Sources.THE_INNER_SEA_WORLD_GUIDE
//            );
            var sources = db.sources();

            ctx.getBean(SourceBookIndexGenerator.class).generate();

            for (SourceId sourceId : sources) {
                if (!sourceId.enabled()) {
                    continue;
                }
                log.info("Generating module \"%s\"...".formatted(sourceId.name()));
                ctx.getBean(SourceModuleDatabaseGenerator.class, sourceId).generate();
                ctx.getBean(SourceModuleItemDatabaseGenerator.class, sourceId).generate();
            }

            System.exit(0);
        };
    }
}
