import Section from "@/view/components/character/edit/common/Section.tsx";
import {useCharacterAtLevel} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import {useMemo} from "react";
import {UnderlinedSelectChoiceInput} from "@/view/components/character/edit/fields/UnderlinedSelectChoiceInput.tsx";
import {ChoiceRef, ResolvedMultiSelectChoice} from "@/data/v8/Choice.ts";

interface SpellsSectionProps {

}

export default function SpellsSection({}: SpellsSectionProps) {
  const character = useCharacterAtLevel();

  const spellChoices = useMemo(() => {
    return character.choicesOfType('spell')
        .map(choice => choice as ResolvedMultiSelectChoice)
        .flatMap(choice => {
          const choices: ChoiceAndIndex[] = [];
          for (let i = 0; i < (choice.maxLimit(character) ?? 1); i++) {
            choices.push({
              choice: choice,
              index: i+1
            });
          }
          return choices;
        })
  }, [character])

  return <Section header='Spells'>
    {spellChoices.map(choiceAndIndex => <UnderlinedSelectChoiceInput key={choiceAndIndex.choice.path + choiceAndIndex.index}
                                                                     choice={choiceAndIndex.choice}
                                                                     choiceIndex={choiceAndIndex.index} />)}
  </Section>
};

interface ChoiceAndIndex {
  choice: ChoiceRef;
  index: number;
}