package pathfinder.generator.app;

import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import pathfinder.generator.DatabaseGenerator;

@SpringBootApplication(scanBasePackages = { "pathfinder.generator", "pathfinder.scraper" })
@Slf4j
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {

            Map<String, DatabaseGenerator> generators = ctx.getBeansOfType(DatabaseGenerator.class);
            for (Map.Entry<String, DatabaseGenerator> entry : generators.entrySet()) {
                log.info("Running {}...", entry.getKey());
                entry.getValue().generate();
            }
        };
    }

}
