import CharacterAtLevel from "../../../data/model/CharacterAtLevel";
import {ChoiceSelectedHandler} from "../../../data/model/ChoiceRef";

interface SkillsEditorProps {
  characterAtLevel: CharacterAtLevel;
  onChange: ChoiceSelectedHandler;
}

export default function SkillsEditor({ characterAtLevel, onChange }: SkillsEditorProps) {
  return <div>Skills</div>
}