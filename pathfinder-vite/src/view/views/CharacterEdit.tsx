import CharacterEditor from "../components/character/CharacterEditor.tsx";
import Character from "../../data/model/Character.ts";

interface CharacterEditProps {
  loaded: Character;
}

export default function CharacterEdit({ loaded }: CharacterEditProps) {
  return <CharacterEditor loaded={loaded} />
}