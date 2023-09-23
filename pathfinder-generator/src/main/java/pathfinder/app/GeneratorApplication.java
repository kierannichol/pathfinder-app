package pathfinder.app;

import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import pathfinder.generator.CharacterTemplateGenerator;
import pathfinder.generator.DatabaseWriter;
import pathfinder.model.CharacterTemplate;
import pathfinder.model.CharacterTemplate.Builder;
import pathfinder.model.Choice;
import pathfinder.model.Effect;
import pathfinder.model.FeatureSelectByTagChoice;
import pathfinder.model.FeatureSelectCategory;
import pathfinder.model.FeatureSelectSortBy;
import pathfinder.model.TextChoice;
import pathfinder.model.pathfinder.AbilityScore;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Sources;
import pathfinder.db.PathfinderDatabase;
import pathfinder.generator.SourceModuleDatabaseGenerator;
import pathfinder.db.LocalPathfinderDatabaseLoader;

@SpringBootApplication(scanBasePackages = {
        "pathfinder.app.config",
//        "pathfinder.generator",
//        "pathfinder.db"
        "pathfinder.generator"
})
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

            log.info("Generating base entities...");

            CharacterTemplate base = characterTemplateGenerator.generate();
            writer.write(base.toDbo(), "character_template");

            var sources = List.of(
                    Sources.CORE,
                    Sources.findSourceByNameOrCode("Pathfinder Player Companion: Heroes of the High Court"),
                    Sources.ADVANCED_PLAYERS_GUIDE,
                    Sources.GAMEMASTERY_GUIDE,
                    Sources.ADVANCED_CLASS_GUIDE,
                    Sources.ULTIMATE_COMBAT,
                    Sources.ULTIMATE_MAGIC,
                    Sources.ULTIMATE_EQUIPMENT,
                    Sources.UNCHAINED
            );

            for (SourceId sourceId : sources) {
                log.info("Generating module \"%s\"...".formatted(sourceId.name()));
                ctx.getBean(SourceModuleDatabaseGenerator.class, sourceId).generate();
            }
        };
    }
}
