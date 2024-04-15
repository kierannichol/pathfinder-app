import CharacterEditor from "../components/character/CharacterEditor.tsx";
import Character from "../../data/v8/Character.ts";

interface CharacterEditProps {
  loaded: Character;
}

export default function CharacterEdit({ loaded }: CharacterEditProps) {
  return <div>
    <CharacterEditor loaded={loaded} />
    <div className="spacer"/>
  </div>
}