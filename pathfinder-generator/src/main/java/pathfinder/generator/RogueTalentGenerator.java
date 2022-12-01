package pathfinder.generator;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import pathfinder.SourceDatabase;
import pathfinder.model.Ability;
import pathfinder.model.Sources;
import pathfinder.source.RogueTalentSourceDatabase;

@Service("Rogue Talent Database Generator")
@Slf4j
@Lazy
@RequiredArgsConstructor
public class RogueTalentGenerator extends AbstractAbilityDatabaseGenerator {

    private final RogueTalentSourceDatabase sourceDatabase;

    @Override
    protected SourceDatabase<Ability> getAbilitySourceDatabase() {
        return sourceDatabase;
    }

    @Override
    protected String getRelativeOutputPath() {
        return "roguetalent";
    }

    @Override
    protected String getOutputDatabaseName() {
        return "RogueTalentDatabase";
    }

    @Override
    protected boolean filterAbilities(Ability ability) {
        return Sources.tryFindSourceByCode(ability.source()).isPresent();
    }
}
