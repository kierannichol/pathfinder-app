package pathfinder.app;

import java.io.IOException;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import pathfinder.generator.v4.ArchetypeDatabaseGenerator;
import pathfinder.generator.v4.ArchetypeFeatureDatabaseGenerator;
import pathfinder.generator.v4.ClassDatabaseGenerator;
import pathfinder.generator.v4.DatabaseGeneratorV4;
import pathfinder.generator.v4.FavoredClassDatabaseGenerator;
import pathfinder.generator.v4.FeatDatabaseGenerator;
import pathfinder.generator.v4.RaceDatabaseGenerator;

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
            ctx.getBean(FeatDatabaseGenerator.class).generate();
            ctx.getBean(ClassDatabaseGenerator.class).generate();
            ctx.getBean(FavoredClassDatabaseGenerator.class).generate();
            ctx.getBean(RaceDatabaseGenerator.class).generate();
            ctx.getBean(ArchetypeDatabaseGenerator.class).generate();
            ctx.getBean(ArchetypeFeatureDatabaseGenerator.class).generate();
//            ctx.getBean(RagePowerDatabaseGenerator.class).generate();

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
