package pathfinder.app;

import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import pathfinder.model.pathfinder.Source;
import pathfinder.model.pathfinder.Sources;
import pathfinder.v6.generator.SourceModuleDatabaseGeneratorV6;

@SpringBootApplication(scanBasePackages = {
        "pathfinder.app.config",
//        "pathfinder.generator",
//        "pathfinder.db"
        "pathfinder.v6",
        "pathfinder.generator"
})
@Slf4j
public class GeneratorApplication {

    public static void main(String[] args) {
        SpringApplication.run(GeneratorApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {
            //                    Sources.ADVANCED_RACE_GUIDE,

            var sources = List.of(
                    Sources.CORE,
                    Sources.ADVANCED_PLAYERS_GUIDE,
                    Sources.GAMEMASTERY_GUIDE,
                    Sources.ADVANCED_CLASS_GUIDE,
                    Sources.ULTIMATE_COMBAT,
                    Sources.ULTIMATE_MAGIC,
                    Sources.ULTIMATE_EQUIPMENT,
                    Sources.UNCHAINED
            );

            for (Source source : sources) {
                log.info("Generating module \"%s\"...".formatted(source.name()));
                ctx.getBean(SourceModuleDatabaseGeneratorV6.class, source).generate();
            }
        };
    }
}
