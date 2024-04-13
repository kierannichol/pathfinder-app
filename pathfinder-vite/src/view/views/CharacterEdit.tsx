import CharacterEditor from "../components/character/CharacterEditor.tsx";
import {CharacterModel} from "../model/CharacterModel.ts";

interface CharacterEditProps {
  loaded: CharacterModel;
}

export default function CharacterEdit({ loaded }: CharacterEditProps) {
  return <div>
    <CharacterEditor loaded={loaded} />
    <div className="spacer"/>
  </div>
}