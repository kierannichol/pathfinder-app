import {useMemo} from "react";
import * as Icon from "react-bootstrap-icons";
import Character from "../../../core/Character";
import CharacterAtLevel from "../../../core/CharacterAtLevel";
import {ChoiceNode} from "../../../core/Choice";
import Skills from "../../../database/Skills";
import NumberSelect from "../../common/NumberSelect";
import "./SkillEditor.scss";

interface SkillEditorProps {
  character: Character;
  characterAtLevel: CharacterAtLevel;
  onChange: (choiceId: string, skillId: string) => void;
}

export function SkillEditor({ character, characterAtLevel, onChange }: SkillEditorProps) {
  const skillChoices = useMemo(() => {
    return characterAtLevel.choicesOfType("skill");
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
  skillChoices: ChoiceNode[];
  onChange: (choiceId: string, skillId: string) => void;
}

function SkillRow({ skill, characterAtLevel, skillChoices, onChange }: SkillRowProps) {
  const current = useMemo(() => characterAtLevel.get(skill.id)?.asNumber() ?? 0, [skill, characterAtLevel]);
  const max = characterAtLevel.level;

  const choicesAvailable = useMemo(() => skillChoices.filter(choice => choice.current === ''), [skillChoices]);
  const choicesUsedForThisSkill = useMemo(() => skillChoices.filter(choice => choice.current === skill.id),
      [skill, skillChoices]);

  const isTrained = useMemo(() => characterAtLevel.get("trained:" + skill.id)?.asBoolean() ?? false, [characterAtLevel, skill]);

  function handleSkillChanged(newValue: string) {
    const newValueNumber = parseInt(newValue);
    if (newValueNumber > current) {
      const availableSkill = choicesAvailable[0];
      if (availableSkill) {
        onChange(availableSkill.key, skill.id);
      }
    }
    else if (newValueNumber < current) {
      const disposableSkill = choicesUsedForThisSkill[0];
      if (disposableSkill) {
        onChange(disposableSkill.key, '');
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