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
import pathfinder.db.modify.FixNameModifier;

@SpringBootApplication(scanBasePackages = {
        "pathfinder.app.config",
        "pathfinder.db"
}, exclude = ElasticsearchClientAutoConfiguration.class)
@Slf4j
public class FixNamesApplication {

    public static void main(String[] args) {
        SpringApplication.run(FixNamesApplication.class, args);
    }

    @Bean
    PathfinderDatabase pathfinderDatabase() {
        return new LocalPathfinderDatabaseLoader().load();
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {
            log.info("Fixing Names in Pathfinder Database...");
            var bean = ctx.getBean(FixNameModifier.class);
            bean.execute();

            System.exit(0);
        };
    }


}