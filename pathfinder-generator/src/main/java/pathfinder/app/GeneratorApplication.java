package pathfinder.app;

import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Sources;
import pathfinder.v7.db.PathfinderDatabase;
import pathfinder.v7.generator.SourceModuleDatabaseGeneratorV7;
import pathfinder.v7.local.LocalPathfinderDatabaseLoader;

@SpringBootApplication(scanBasePackages = {
        "pathfinder.app.config",
//        "pathfinder.generator",
//        "pathfinder.db"
        "pathfinder.v7",
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
            //                    Sources.ADVANCED_RACE_GUIDE,

            var sources = List.of(
                    Sources.CORE,
                    Sources.findSourceByNameOrCode("Pathfinder Player Companion: Heroes of the High Court"),
//                    Sources.ADVANCED_PLAYERS_GUIDE,
//                    Sources.GAMEMASTERY_GUIDE,
                    Sources.ADVANCED_CLASS_GUIDE
//                    Sources.ULTIMATE_COMBAT,
//                    Sources.ULTIMATE_MAGIC,
//                    Sources.ULTIMATE_EQUIPMENT,
//                    Sources.UNCHAINED
            );

            for (SourceId sourceId : sources) {
                log.info("Generating module \"%s\"...".formatted(sourceId.name()));
                ctx.getBean(SourceModuleDatabaseGeneratorV7.class, sourceId).generate();
            }
        };
    }
}
