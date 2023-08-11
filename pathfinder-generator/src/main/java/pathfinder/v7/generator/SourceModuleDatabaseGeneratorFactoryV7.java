package pathfinder.v7.generator;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import pathfinder.model.pathfinder.SourceId;

@Configuration
@RequiredArgsConstructor
public class SourceModuleDatabaseGeneratorFactoryV7 {
    private final List<FeatureProviderV7> featureProviders;

    @Bean
    @Scope(BeanDefinition.SCOPE_PROTOTYPE)
    public SourceModuleDatabaseGeneratorV7 getGeneratorV7(SourceId sourceId) {
        return new SourceModuleDatabaseGeneratorV7(sourceId, featureProviders);
    }
}
