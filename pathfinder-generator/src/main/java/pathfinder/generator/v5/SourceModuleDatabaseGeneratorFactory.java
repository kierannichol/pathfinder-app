package pathfinder.generator.v5;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import pathfinder.generator.v5.provider.EntityProvider;
import pathfinder.model.pathfinder.Source;

@Configuration
@RequiredArgsConstructor
public class SourceModuleDatabaseGeneratorFactory {
    private final List<EntityProvider> entityProviders;

    @Bean
    @Scope(BeanDefinition.SCOPE_PROTOTYPE)
    public SourceModuleDatabaseGenerator getGenerator(Source source) {
        return new SourceModuleDatabaseGenerator(source, entityProviders);
    }
}
