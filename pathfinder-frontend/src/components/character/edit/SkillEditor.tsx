import {List} from "immutable";
import {useMemo} from "react";
import * as Icon from "react-bootstrap-icons";
import SkillDatabase from "../../../database/SkillDatabase";
import {Character} from "../../../model/character/Character";
import {CharacterAtLevel} from "../../../model/character/CharacterAtLevel";
import CharacterChoice, {ChoiceType} from "../../../model/character/choices/CharacterChoice";
import Skill from "../../../model/character/Skill";
import NumberSelect from "../../common/NumberSelect";
import "./SkillEditor.scss";

interface SkillEditorProps {
  character: Character;
  characterAtLevel: CharacterAtLevel;
  onChange: (choiceId: string, skillId: string) => void;
}

export function SkillEditor({ character, characterAtLevel, onChange }: SkillEditorProps) {
  const skillChoices = useMemo(() => {
    return character.choicesForLevel(characterAtLevel.level)
    .filter(choice => choice.type === ChoiceType.SKILL_POINT);
  }, [character]);

  return <div className="skill-editor">
    {SkillDatabase.all.map(skill => <SkillRow
        key={skill.id}
        skill={skill}
        skillChoices={skillChoices}
        characterAtLevel={characterAtLevel}
        onChange={onChange} />)}
  </div>
}

interface SkillRowProps {
  skill: Skill;
  characterAtLevel: CharacterAtLevel;
  skillChoices: List<CharacterChoice>;
  onChange: (choiceId: string, skillId: string) => void;
}

function SkillRow({ skill, characterAtLevel, skillChoices, onChange }: SkillRowProps) {
  const current = useMemo(() => characterAtLevel.get(skill.id)?.asNumber() ?? 0, [characterAtLevel]);
  const max = characterAtLevel.level;

  const choicesAvailable = useMemo(() => skillChoices.filter(choice => choice.current === ''), [skillChoices]);
  const choicesUsedForThisSkill = useMemo(() => skillChoices.filter(choice => choice.current === skill.id), [skillChoices]);

  const isTrained = useMemo(() => characterAtLevel.get("trained:" + skill.id)?.asBoolean() ?? false, [characterAtLevel, skill]);

  function handleSkillChanged(newValue: string) {
    const newValueNumber = parseInt(newValue);
    if (newValueNumber > current) {
      const availableSkill = choicesAvailable.get(0);
      if (availableSkill) {
        onChange(availableSkill.key, skill.id);
      }
    }
    else if (newValueNumber < current) {
      const disposableSkill = choicesUsedForThisSkill.get(0);
      if (disposableSkill) {
        onChange(disposableSkill.key, '');
      }
    }
  }

  return <div className="skill-row">
    <ClassSkillIcon checked={isTrained} />
    &nbsp;

    <NumberSelect defaultValue={current.toString()}
                  min={current - choicesUsedForThisSkill.size}
                  max={Math.min(max, current + choicesAvailable.size)}
                  onChange={handleSkillChanged} />
    &nbsp;
    {skill.name}{!skill.untrained ? '*' : ''} ({current}/{max})
  </div>
}

function ClassSkillIcon({ checked }: { checked: boolean }) {
  return checked ? <Icon.SquareFill /> : <Icon.Square />
}