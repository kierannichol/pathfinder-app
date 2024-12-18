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
import pathfinder.db.query.Query;
import pathfinder.model.pathfinder.WeaponProficiency;

@SpringBootApplication(scanBasePackages = {
        "pathfinder.app.config",
        "pathfinder.generator"
}, exclude = ElasticsearchClientAutoConfiguration.class)
@Slf4j
public class QueryApplication {

    public static void main(String[] args) {
        SpringApplication.run(QueryApplication.class, args);
    }

    @Bean
    PathfinderDatabase pathfinderDatabase() {
        return new LocalPathfinderDatabaseLoader().load();
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {
            PathfinderDatabase db = ctx.getBean(PathfinderDatabase.class);

            System.out.println("effects:");
            db.query(Query.weapons().proficiency(WeaponProficiency.MARTIAL))
                            .forEach(weapon -> {
                                System.out.printf("  - \"SET proficiency:%s 1\"%n", weapon.id());
                            });


            System.exit(0);
        };
    }
}
