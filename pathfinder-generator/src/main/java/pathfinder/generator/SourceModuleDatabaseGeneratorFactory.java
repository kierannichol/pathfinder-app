package pathfinder.generator;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import pathfinder.model.pathfinder.SourceId;

@Configuration
@RequiredArgsConstructor
public class SourceModuleDatabaseGeneratorFactory {
    private final List<FeatureProvider> featureProviders;
    private final DatabaseWriter writer;

    @Bean
    @Scope(BeanDefinition.SCOPE_PROTOTYPE)
    public SourceModuleDatabaseGenerator getGeneratorV7(SourceId sourceId) {
        return new SourceModuleDatabaseGenerator(sourceId, featureProviders, writer);
    }
}
