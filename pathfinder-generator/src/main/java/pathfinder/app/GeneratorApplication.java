package pathfinder.app;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import pathfinder.generator.DatabaseGeneratorV4;
import pathfinder.generator.v5.SourceModuleDatabaseGenerator;
import pathfinder.model.pathfinder.Source;
import pathfinder.model.pathfinder.Sources;

@SpringBootApplication(scanBasePackages = {
        "pathfinder.app.config",
        "pathfinder.generator",
        "pathfinder.source"
})
@Slf4j
public class GeneratorApplication {

    public static void main(String[] args) {
        SpringApplication.run(GeneratorApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {

            var sources = List.of(
//                    Sources.CORE,
//                    Sources.ADVANCED_PLAYERS_GUIDE,
//                    Sources.GAMEMASTERY_GUIDE,
////                    Sources.ADVANCED_RACE_GUIDE,
//                    Sources.ADVANCED_CLASS_GUIDE,
//                    Sources.ULTIMATE_COMBAT,
                    Sources.ULTIMATE_MAGIC
//                    Sources.ULTIMATE_EQUIPMENT,
//                    Sources.UNCHAINED
            );

            for (Source source : sources) {
                log.info("Generating module \"%s\"...".formatted(source.name()));
                ctx.getBean(SourceModuleDatabaseGenerator.class, source).generate();
            }

//            ctx.getBean(FeatDatabaseGenerator.class).generate();
//
//            ctx.getBean(ClassDatabaseGenerator.class).generate();
//            ctx.getBean(ClassFeatureDatabaseGenerator.class).generate();
//
//            ctx.getBean(FavoredClassDatabaseGenerator.class).generate();
//            ctx.getBean(RaceDatabaseGenerator.class).generate();
//            ctx.getBean(ArchetypeDatabaseGenerator.class).generate();
//            ctx.getBean(ArchetypeFeatureDatabaseGenerator.class).generate();
//            ctx.getBean(BloodragerBloodlineDatabaseGenerator.class).generate();
//            ctx.getBean(BloodragerBloodlineFeatureDatabaseGenerator.class).generate();

//            generateAll(ctx);
        };
    }

    private void generateAll(ApplicationContext ctx) throws IOException {
        Map<String, DatabaseGeneratorV4> generators = ctx.getBeansOfType(DatabaseGeneratorV4.class);
        for (var entry : generators.entrySet()) {
            log.info("Running {}...", entry.getKey());
            entry.getValue().generate();
        }
    }
}
