package pathfinder.app;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import opennlp.tools.lemmatizer.DictionaryLemmatizer;
import opennlp.tools.postag.POSModel;
import opennlp.tools.postag.POSTaggerME;
import opennlp.tools.tokenize.TokenizerME;
import opennlp.tools.tokenize.TokenizerModel;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import pathfinder.model.pathfinder.Sources;
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
public class NlpApplication {

    public static void main(String[] args) {
        SpringApplication.run(NlpApplication.class, args);
    }

    @Bean
    PathfinderDatabase pathfinderDatabase() {
        return new LocalPathfinderDatabaseLoader().load();
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {
            try (InputStream inputStreamToken = getClass()
                    .getResourceAsStream("/models/en-token.bin");
                    InputStream inputStreamPOSTagger = getClass()
                    .getResourceAsStream("/models/en-pos-maxent.bin");
                    InputStream dictLemmatizer = getClass()
                        .getResourceAsStream("/models/pf-lemmatizer.dict")) {
                TokenizerModel tokenModel = new TokenizerModel(inputStreamToken);
                TokenizerME tokenizer = new TokenizerME(tokenModel);
                POSModel posModel = new POSModel(inputStreamPOSTagger);


                POSTaggerME posTagger = new POSTaggerME(posModel);
                ;
                DictionaryLemmatizer lemmatizer = new DictionaryLemmatizer(dictLemmatizer);

                var database = ctx.getBean(PathfinderDatabase.class);

                database.query(Query.classFeatures().source(Sources.CORE)).forEach(classFeature -> {
                    String[] tokens = tokenizer.tokenize(classFeature.description().text());
                    String tags[] = posTagger.tag(tokens);

                    String[] lemmas = lemmatizer.lemmatize(tokens, tags);
                    List<String> found = new ArrayList<>();

                    for (int i = 0; i < tokens.length; i++) {
                        found.add((lemmas[i].equals("O") ? tokens[i] : lemmas[i]) + " (%s)".formatted(tags[i]));
                    }

                    log.info(classFeature.name() + ": " + String.join(" ", found));
                });
            }
        };
    }
}
