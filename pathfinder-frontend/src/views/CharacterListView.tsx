import {useState} from "react";
import {Button, ListGroup} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {loadState, saveState} from "../app/localStorage";
import NewCharacterDialog from "../components/character/NewCharacterDialog";
import {HeaderRow} from "../components/Rows";
import {Character, PackedCharacter} from "../model/character/Character";
import CharacterChoice from "../model/character/choices/CharacterChoice";
import "./CharacterListView.scss";

function loadAllCharacters(): Character[] {
  // localStorage.clear();
  const characters: Character[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key !== null) {
      const loadedState = loadState<PackedCharacter>(key);
      if (loadedState !== undefined) {
        characters.push(Character.unpack(loadedState));
      }
    }
  }
  return characters;
}

function CharacterListView() {
  const navigate = useNavigate();

  const [ characterList, setCharacterList ] = useState(() => loadAllCharacters());

  const handleCreate = (characterName: string) => {
    const id = `${characterList.length + 1}`;
    const newCharacter = new Character(id)
        .select(CharacterChoice.CHARACTER_NAME, characterName);
    saveState(`character-${id}`, newCharacter.pack());
    // setCharacterList(loadAllCharacters());
    navigate(`/character/edit/${id}`);
  };

  return (<main>
    <HeaderRow>Characters</HeaderRow>
    <ListGroup>
      {characterList.map(character => <CharacterItemRow key={character.id} character={character} />)}
    </ListGroup>
    <AddCharacterButton onCreate={handleCreate}/>
  </main>);
}

interface CharacterItemRowProps {
  character: Character;
}

function CharacterItemRow({ character }: CharacterItemRowProps) {
  return <ListGroup.Item action href={`/character/edit/${character.id}`}>
    {character.getChoice(CharacterChoice.CHARACTER_NAME)}
  </ListGroup.Item>
}

interface AddCharacterButtonProps {
  onCreate: (name: string) => void;
}

function AddCharacterButton({ onCreate }: AddCharacterButtonProps) {
  const [ show, setShow ] = useState(false);

  function handleCreate(characterName: string) {
    setShow(false);
    onCreate(characterName);
  }

  function handleCancel() {
    setShow(false);
  }

  return (<>
    <Button onClick={_ => setShow(true)}>+ Character</Button>
    {show && <NewCharacterDialog show={show}
                                 onCreate={handleCreate}
                                 onCancel={handleCancel} />}
  </>);
}

export default CharacterListView;