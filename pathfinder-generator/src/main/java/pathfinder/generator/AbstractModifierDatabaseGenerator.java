package pathfinder.generator;

import com.google.protobuf.Message;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import pathfinder.data.v3.EffectDbo;
import pathfinder.data.v3.ModificationDatabaseDbo;
import pathfinder.data.v3.ModificationDetailsDbo;
import pathfinder.data.v3.ModificationSummaryDbo;
import pathfinder.generator.encode.AbilityEncoder;
import pathfinder.generator.encode.CharacterEffectEncoder;
import pathfinder.model.CharacterModifier;

public abstract class AbstractModifierDatabaseGenerator extends AbstractDatabaseGenerator<CharacterModifier, ModificationSummaryDbo, ModificationDetailsDbo> {

    @Autowired
    private CharacterEffectEncoder characterEffectEncoder;

    @Autowired
    private AbilityEncoder abilityEncoder;

    protected abstract String getDatabaseId();

    @Override
    protected ModificationSummaryDbo encodedSummary(CharacterModifier model) {
        List<ModificationSummaryDbo> abilityDbos = model.effects().stream().flatMap(effect ->
                        effect.abilities().map(ability -> abilityEncoder.encodeSummary(ability, "ability")))
                .toList();

        List<ModificationSummaryDbo> featDbos = model.effects().stream().flatMap(effect ->
                        effect.feats().map(feat -> abilityEncoder.encodeSummary(feat.asAbility(), "feat")))
                .toList();

        return ModificationSummaryDbo.newBuilder()
                .setId(model.id())
                .setName(model.name())
                .setType(getDatabaseId())
                .addAllChildren(featDbos)
                .addAllChildren(abilityDbos)
                .build();
    }

    @Override
    protected ModificationDetailsDbo encodedDetailed(CharacterModifier model,
            ModificationSummaryDbo modificationSummaryDbo) {

        List<ModificationDetailsDbo> abilityDbos = model.effects().stream().flatMap(effect ->
                effect.abilities().map(ability -> abilityEncoder.encodeDetails(ability, "ability")))
                .toList();

        List<ModificationDetailsDbo> featDbos = model.effects().stream().flatMap(effect ->
                        effect.feats().map(feat -> abilityEncoder.encodeDetails(feat.asAbility(), "feat")))
                .toList();

        List<EffectDbo> effects = model.effects().stream()
                .flatMap(effect -> characterEffectEncoder.encode(effect).stream())
                .toList();

        return ModificationDetailsDbo.newBuilder()
                .setId(model.id())
                .setName(model.name())
                .setType(getDatabaseId())
                .setDescriptionText(model.descriptionText())
                .addAllEffects(effects)
                .addAllChildren(featDbos)
                .addAllChildren(abilityDbos)
                .build();
    }

    @Override
    protected Message createSummaryDatabase(List<ModificationSummaryDbo> summaries) {
        return ModificationDatabaseDbo.newBuilder()
                .setDatabaseId(getDatabaseId())
                .addAllSummaries(summaries)
                .build();
    }
}
