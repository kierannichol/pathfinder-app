package pathfinder.app.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import pathfinder.model.json.PathfinderJsonModule;

@Configuration
public class YamlConfiguration {

    @Bean
    ObjectMapper yaml() {
        return new ObjectMapper(new YAMLFactory()
                .disable(com.fasterxml.jackson.dataformat.yaml.YAMLGenerator.Feature.WRITE_DOC_START_MARKER))
                .setPropertyNamingStrategy(PropertyNamingStrategies.SNAKE_CASE)
                .registerModule(new PathfinderJsonModule());
    }

}
