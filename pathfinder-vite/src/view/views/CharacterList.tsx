import {useCharacterStore} from "../../data/model/Character.react.tsx";
import useAsyncMemo from "../../utils/useAsyncMemo.tsx";
import Panel from "../components/Panel.tsx";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import NewCharacterDialog from "../components/character/NewCharacterDialog.tsx";
import styles from "./CharacterList.module.scss";
import {useNavigate} from "react-router-dom";
import LoadingBlock from "../components/LoadingBlock.tsx";
import CharacterSummary from "../../data/model/CharacterSummary";
import DeleteIcon from "../components/icons/DeleteIcon.tsx";
import {classNames} from "../../utils/classNames.ts";

export default function CharacterList() {
  const characterStore = useCharacterStore();
  const navigate = useNavigate();

  const [ characters, setCharacters ] = useState<CharacterSummary[]>([]);

  const [ loadedCharacters, isLoading ] = useAsyncMemo(() => characterStore.list(),
      [characterStore]);

  useEffect(() => {
    setCharacters(loadedCharacters);
  }, [ loadedCharacters ]);

  const handleCreate = async (characterName: string) => {
    const created = await characterStore.create({
      'character_name': characterName
    });
    navigate(`/character/edit/${created.id}`)
  };

  const handleDelete = async (characterId: string) => {
    setCharacters(characters.filter(character => character.id !== characterId))
    await characterStore.delete(characterId);
  };

  return <main>
    <header>Characters</header>
    <section>
      {isLoading ? <LoadingBlock/> : <div className={styles.characters}>
      {characters?.map(character => <CharacterListEntry
          key={character.id}
          character={character}
          onDelete={handleDelete} />)}
      </div>}
      <div className={styles.controls}>
        <AddCharacterButton disabled={isLoading} onCreate={handleCreate} />
      </div>
    </section>
  </main>
}

interface CharacterListEntryProps {
  character: CharacterSummary;
  onDelete: (id: string) => void;
}

function CharacterListEntry({ character, onDelete }: CharacterListEntryProps) {
  const navigate = useNavigate();
  return <Panel
      className={styles.character}>

    <div className={classNames([styles.nameContainer, 'clickable'])} onClick={() => {
      navigate(`/character/edit/${character.id}`)
    }}>
      {character.name}
    </div>
    <div className={classNames([styles.deleteButtonContainer, 'clickable'])} onClick={() => {
      onDelete(character.id);
    }}>
      <DeleteIcon />
    </div>
  </Panel>
}

interface AddCharacterButtonProps {
  onCreate: (name: string) => void;
  disabled?: boolean;
}

function AddCharacterButton({ onCreate, disabled = false }: AddCharacterButtonProps) {
  const [ show, setShow ] = useState(false);

  function handleCreate(characterName: string) {
    setShow(false);
    onCreate(characterName);
  }

  function handleCancel() {
    setShow(false);
  }

  return (<>
    <Button disabled={disabled} onClick={_ => setShow(true)} size="lg">+ Character</Button>
    {show && <NewCharacterDialog show={show}
                                 onCreate={handleCreate}
                                 onCancel={handleCancel} />}
  </>);
}