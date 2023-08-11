package pathfinder.app;

import java.io.InputStream;
import lombok.extern.slf4j.Slf4j;
import opennlp.tools.doccat.DoccatModel;
import opennlp.tools.doccat.DocumentCategorizerME;
import opennlp.tools.sentdetect.SentenceDetectorME;
import opennlp.tools.sentdetect.SentenceModel;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import pathfinder.model.pathfinder.Archetype;
import pathfinder.v7.db.PathfinderDatabase;
import pathfinder.v7.db.query.Query;
import pathfinder.v7.local.LocalPathfinderDatabaseLoader;

@SpringBootApplication(scanBasePackages = {
        "pathfinder.app.config",
//        "pathfinder.generator",
//        "pathfinder.db"
        "pathfinder.v7",
        "pathfinder.generator"
})
@Slf4j
public class NlpTrainerApplication {

    public static void main(String[] args) {
        SpringApplication.run(NlpTrainerApplication.class, args);
    }

    @Bean
    PathfinderDatabase pathfinderDatabase() {
        return new LocalPathfinderDatabaseLoader().load();
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {
            try (InputStream sentenceIS = getClass().getResourceAsStream("/models/en-sent.bin");
                    InputStream doccatIS = getClass().getResourceAsStream("/train/pf-cat.bin")) {

                SentenceModel sentenceModel = new SentenceModel(sentenceIS);
                DoccatModel doccatModel = new DoccatModel(doccatIS);
                DocumentCategorizerME categorizer = new DocumentCategorizerME(doccatModel);
                SentenceDetectorME sentenceDetector = new SentenceDetectorME(sentenceModel);

                var database = ctx.getBean(PathfinderDatabase.class);
                database.query(Query.namedEntities(Archetype.class)).forEach(namedEntity -> {
                    String text = namedEntity.description().text().trim();
                    if (!text.isEmpty()) {
                        String[] sentences = sentenceDetector.sentDetect(text);
                        double[] categories = categorizer.categorize(sentences);
                        String result = categorizer.getAllResults(categories);
                        System.out.println(text + ": " + result);
                    }
                });
            }
        };
    }
}
