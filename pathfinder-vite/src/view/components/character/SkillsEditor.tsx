import CharacterAtLevel from "../../../data/v8/CharacterAtLevel.ts";
import {ChoiceSelectedHandler} from "../../../data/v8/Choice.ts";

interface SkillsEditorProps {
  characterAtLevel: CharacterAtLevel;
  onChange: ChoiceSelectedHandler;
}

export default function SkillsEditor({ characterAtLevel, onChange }: SkillsEditorProps) {
  return <div>Skills</div>
}