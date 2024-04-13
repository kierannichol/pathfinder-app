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
public class SourceModuleItemDatabaseGeneratorFactory {
    private final List<ItemProvider> itemProviders;
    private final List<ItemOptionsProvider> itemOptionsProviders;
    private final DatabaseWriter writer;

    @Bean
    @Scope(BeanDefinition.SCOPE_PROTOTYPE)
    public SourceModuleItemDatabaseGenerator getItemGeneratorV7(SourceId sourceId) {
        return new SourceModuleItemDatabaseGenerator(sourceId, itemProviders, itemOptionsProviders, writer);
    }
}
