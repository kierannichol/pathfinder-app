import {useMemo} from "react";
import * as Icon from "react-bootstrap-icons";
import Skills from "../../../database/Skills";
import Character from "../../../v3/model/Character";
import CharacterAtLevel from "../../../v3/model/CharacterAtLevel";
import Choice from "../../../v3/model/Choice";
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
    .filter(choice => choice.type === "skill");
  }, [character]);

  return <div className="skill-editor">
    {Skills.all.map(skill => <SkillRow
        key={skill.id}
        skill={skill}
        skillChoices={skillChoices}
        characterAtLevel={characterAtLevel}
        onChange={onChange} />)}
  </div>
}

interface SkillRowProps {
  skill: any;
  characterAtLevel: CharacterAtLevel;
  skillChoices: Choice[];
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
      const availableSkill = choicesAvailable[0];
      if (availableSkill) {
        onChange(availableSkill.id, skill.id);
      }
    }
    else if (newValueNumber < current) {
      const disposableSkill = choicesUsedForThisSkill[0];
      if (disposableSkill) {
        onChange(disposableSkill.id, '');
      }
    }
  }

  return <div className="skill-row">
    <ClassSkillIcon checked={isTrained} />
    &nbsp;

    <NumberSelect defaultValue={current.toString()}
                  min={current - choicesUsedForThisSkill.length}
                  max={Math.min(max, current + choicesAvailable.length)}
                  onChange={handleSkillChanged} />
    &nbsp;
    {skill.name}{!skill.untrained ? '*' : ''} ({current}/{max})
  </div>
}

function ClassSkillIcon({ checked }: { checked: boolean }) {
  return checked ? <Icon.SquareFill /> : <Icon.Square />
}