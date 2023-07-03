package pathfinder.v6.generator;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import pathfinder.model.pathfinder.Source;

@Configuration
@RequiredArgsConstructor
public class SourceModuleDatabaseGeneratorFactoryV6 {
    private final List<FeatureProvider> featureProviders;

    @Bean
    @Scope(BeanDefinition.SCOPE_PROTOTYPE)
    public SourceModuleDatabaseGeneratorV6 getGeneratorV6(Source source) {
        return new SourceModuleDatabaseGeneratorV6(source, featureProviders);
    }
}
