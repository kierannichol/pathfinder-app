import {useCharacterStore} from "../../data/model/Character.react.tsx";
import useAsyncMemo from "../../utils/useAsyncMemo.tsx";
import Panel from "../components/Panel.tsx";
import {useState} from "react";
import {Button} from "react-bootstrap";
import NewCharacterDialog from "../components/character/NewCharacterDialog.tsx";
import styles from "./CharacterList.module.scss";
import {useNavigate} from "react-router-dom";
import LoadingBlock from "../components/LoadingBlock.tsx";
import CharacterSummary from "../../data/model/CharacterSummary";

export default function CharacterList() {
  const characterStore = useCharacterStore();
  const navigate = useNavigate();

  const [ characters, isLoading,  ] = useAsyncMemo(() => characterStore.list(),
      [characterStore]);

  const handleCreate = async (characterName: string) => {
    const created = await characterStore.create({
      'character_name': characterName
    });
    navigate(`/character/edit/${created.id}`)
  };

  return <main>
    <header>Characters</header>
    <section>
      {isLoading ? <LoadingBlock/> : <div className={styles.characters}>
      {characters?.map(character => <CharacterListEntry
          key={character.id}
          character={character} />)}
      </div>}
      <div className={styles.controls}>
        <AddCharacterButton disabled={isLoading} onCreate={handleCreate}/>
      </div>
    </section>
  </main>
}

interface CharacterListEntryProps {
  character: CharacterSummary;
}

function CharacterListEntry({ character }: CharacterListEntryProps) {
  const navigate = useNavigate();
  return <Panel
      className={styles.character}
      onClick={() => {
        navigate(`/character/edit/${character.id}`)
      }}>
    {character.name}
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