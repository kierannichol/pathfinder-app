package pathfinder.generator.encode;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.data.v3.ModificationDetailsDbo;
import pathfinder.data.v3.ModificationSummaryDbo;
import pathfinder.generator.db.parse.PrerequisiteParser;
import pathfinder.model.Ability;
import pathfinder.model.v3.Effects;

@Component
@RequiredArgsConstructor
public class AbilityEncoder {
    private final EffectsEncoder effectsEncoder;
    private final PrerequisiteParser prerequisiteParser;

    public ModificationSummaryDbo encodeSummary(Ability ability, String type) {
        return ModificationSummaryDbo.newBuilder()
                .setId(ability.id())
                .setName(ability.name())
                .setType(type)
                .setPrerequisiteFormula(prerequisiteParser.extractPrerequisites(ability))
                .build();
    }

    public ModificationDetailsDbo encodeDetails(Ability ability, String type) {
        Effects effects = new Effects();

        effects.adjustState(0, ability.id(), 1);

        return ModificationDetailsDbo.newBuilder()
                .setId(ability.id())
                .setName(ability.name())
                .setType(type)
                .addAllEffects(effectsEncoder.encode(effects))
                .setPrerequisiteFormula(prerequisiteParser.extractPrerequisites(ability))
                .setDescriptionText(textOrDefault(ability.description()))
                .setBenefitText(textOrDefault(ability.benefit()))
                .setNormalText(textOrDefault(ability.normal()))
                .setSpecialText(textOrDefault(ability.special()))
                .setNoteText(textOrDefault(ability.note()))
                .build();
    }

    public List<ModificationSummaryDbo> encodeAllSummaries(List<Ability> abilities, String type) {
        return abilities.stream().map(ability -> encodeSummary(ability, type)).toList();
    }

    public List<ModificationDetailsDbo> encodeAllDetails(List<Ability> abilities, String type) {
        return abilities.stream().map(ability -> encodeDetails(ability, type)).toList();
    }

    private String textOrDefault(String text) {
        if (text == null) {
            return "";
        }
        return text;
    }
}
