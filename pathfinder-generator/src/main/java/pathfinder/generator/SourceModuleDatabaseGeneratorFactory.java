package pathfinder.generator;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import pathfinder.generator.provider.EntityProvider;
import pathfinder.model.pathfinder.SourceId;

@Configuration
@RequiredArgsConstructor
public class SourceModuleDatabaseGeneratorFactory {
    private final List<EntityProvider> entityProviders;

    @Bean
    @Scope(BeanDefinition.SCOPE_PROTOTYPE)
    public SourceModuleDatabaseGenerator getGenerator(SourceId sourceId) {
        return new SourceModuleDatabaseGenerator(sourceId, entityProviders);
    }
}
