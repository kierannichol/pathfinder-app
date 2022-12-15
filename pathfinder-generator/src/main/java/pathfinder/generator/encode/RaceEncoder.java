package pathfinder.generator.encode;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.data.v3.ModificationDetailsDbo;
import pathfinder.model.Race;
import pathfinder.model.v3.Effects;

@Component
@RequiredArgsConstructor
public class RaceEncoder {
    private final EffectsEncoder effectsEncoder;
    private final AbilityEncoder abilityEncoder;

    public ModificationDetailsDbo encodeDetailed(Race race) {
        Effects effects = new Effects();

        effects.setState(0, "race", race.id());
        effects.setState(0, "size", race.size().id());
        effects.setState(0, "speed:base", race.speed());

        for (String modifier : race.modifiers()) {
            switch (modifier) {
                case "modifier:bonus_feat":
                    effects.selectChoice(1,
                            "feat",
                            "level1:race_bonus_feat",
                            "Bonus Feat (%s)".formatted(race.name()),
                            "feat/*");
                    break;
                case "modifier:asi_2":
                    effects.selectChoice(0,
                            "asi",
                            "level0:race_asi",
                            "Ability Score Increase",
                            "ability_score/*");
                    break;
                case "modifier:str_plus_2":
                    effects.adjustState(0, "str:race", 2);
                    break;
                case "modifier:str_minus_2":
                    effects.adjustState(0, "str:race", -2);
                    break;
                case "modifier:dex_plus_2":
                    effects.adjustState(0, "dex:race", 2);
                    break;
                case "modifier:dex_minus_2":
                    effects.adjustState(0, "dex:race", -2);
                    break;
                case "modifier:con_plus_2":
                    effects.adjustState(0, "con:race", 2);
                    break;
                case "modifier:con_minus_2":
                    effects.adjustState(0, "con:race", -2);
                    break;
                case "modifier:int_plus_2":
                    effects.adjustState(0, "int:race", 2);
                    break;
                case "modifier:int_minus_2":
                    effects.adjustState(0, "int:race", -2);
                    break;
                case "modifier:wis_plus_2":
                    effects.adjustState(0, "wis:race", 2);
                    break;
                case "modifier:wis_minus_2":
                    effects.adjustState(0, "wis:race", -2);
                    break;
                case "modifier:cha_plus_2":
                    effects.adjustState(0, "cha:race", 2);
                    break;
                case "modifier:cha_minus_2":
                    effects.adjustState(0, "cha:race", -2);
                    break;
            }
        }

        return ModificationDetailsDbo.newBuilder()
                .setId(race.id())
                .setName(race.name())
                .addAllEffects(effectsEncoder.encode(effects))
                .setType("race")
                .build();
    }
}
