package pathfinder.app;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import pathfinder.db.LocalPathfinderDatabaseCleaner;
import pathfinder.db.LocalPathfinderDatabaseLoader;
import pathfinder.db.PathfinderDatabase;

@SpringBootApplication(scanBasePackages = {
        "pathfinder.app.config",
//        "pathfinder.generator",
//        "pathfinder.db"
        "pathfinder.db"
})
@Slf4j
public class CleanupDatabaseApplication {

    public static void main(String[] args) {
        SpringApplication.run(CleanupDatabaseApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {
            log.info("Cleaning Pathfinder Database...");
            LocalPathfinderDatabaseCleaner cleaner = ctx.getBean(LocalPathfinderDatabaseCleaner.class);
            cleaner.clean();
        };
    }


}