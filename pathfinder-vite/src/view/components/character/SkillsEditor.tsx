import {ChoiceSelectedHandler} from "../..//Choice.ts";
import {CharacterAtLevel} from "../..//CharacterAtLevel.ts";

interface SkillsEditorProps {
  characterAtLevel: CharacterAtLevel;
  onChange: ChoiceSelectedHandler;
}

export default function SkillsEditor({ characterAtLevel, onChange }: SkillsEditorProps) {
  return <div>Skills</div>
}