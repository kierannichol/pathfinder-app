import {ChoiceSelectedHandler} from "../../model/ChoiceModel.ts";
import {CharacterAtLevelModel} from "../../model/CharacterAtLevelModel.ts";

interface SkillsEditorProps {
  characterAtLevel: CharacterAtLevelModel;
  onChange: ChoiceSelectedHandler;
}

export default function SkillsEditor({ characterAtLevel, onChange }: SkillsEditorProps) {
  return <div>Skills</div>
}