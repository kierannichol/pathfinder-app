import CharacterEditor from "../components/character/edit/CharacterEditor.tsx";
import Character from "../../data/v8/Character.ts";

interface CharacterEditViewProps {
  loaded: Character;
}

export default function CharacterEditView({ loaded }: CharacterEditViewProps) {
  return <div>
    <CharacterEditor loaded={loaded} />
    <div className="spacer"/>
  </div>
}