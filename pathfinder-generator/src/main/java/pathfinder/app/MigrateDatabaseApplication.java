package pathfinder.app;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import pathfinder.db.LocalPathfinderDatabaseLoader;
import pathfinder.db.LocalPathfinderDatabaseMigrator;
import pathfinder.db.PathfinderDatabase;

@SpringBootApplication(scanBasePackages = {
        "pathfinder.app.config",
//        "pathfinder.generator",
//        "pathfinder.db"
        "pathfinder.db"
})
@Slf4j
public class MigrateDatabaseApplication {

    public static void main(String[] args) {
        SpringApplication.run(MigrateDatabaseApplication.class, args);
    }

    @Bean
    PathfinderDatabase pathfinderDatabase() {
        return new LocalPathfinderDatabaseLoader().load();
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {
            log.info("Migrating Pathfinder Database...");
            LocalPathfinderDatabaseMigrator migrator = ctx.getBean(LocalPathfinderDatabaseMigrator.class);
            migrator.migrate();
        };
    }


}