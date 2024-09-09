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
import pathfinder.db.modify.GenerateSpellItemsModifier;

@SpringBootApplication(scanBasePackages = {
        "pathfinder.app.config",
        "pathfinder.db"
}, exclude = ElasticsearchClientAutoConfiguration.class)
@Slf4j
public class ModifyDatabaseApplication {

    public static void main(String[] args) {
        SpringApplication.run(ModifyDatabaseApplication.class, args);
    }

    @Bean
    PathfinderDatabase pathfinderDatabase() {
        return new LocalPathfinderDatabaseLoader().load();
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {
            log.info("Batch modifying Pathfinder Database...");
            var bean = ctx.getBean(GenerateSpellItemsModifier.class);
            bean.execute();

            System.exit(0);
        };
    }


}