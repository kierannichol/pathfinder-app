import useAsyncMemo from "../../utils/useAsyncMemo.tsx";
import Panel from "../components/Panel.tsx";
import {useEffect, useMemo, useState} from "react";
import {Button} from "react-bootstrap";
import NewCharacterDialog from "../components/character/NewCharacterDialog.tsx";
import styles from "./CharacterList.module.scss";
import {useNavigate} from "react-router-dom";
import LoadingBlock from "../components/LoadingBlock.tsx";
import DeleteIcon from "../components/icons/DeleteIcon.tsx";
import {classNames} from "@/utils/classNames.ts";
import {useCharacterStore, useDatabase} from "../../data/context.tsx";
import CharacterSummary from "../../data/v8/CharacterSummary.ts";
import DuplicateIcon from "@/view/components/icons/DuplicateIcon.tsx";
import CopyCharacterDialog from "@/view/components/character/CopyCharacterDialog.tsx";

export default function CharacterList() {
  const characterStore = useCharacterStore();
  const navigate = useNavigate();

  const [ characters, setCharacters ] = useState<CharacterSummary[]>([]);

  const [ loadedCharacters, isLoading ] = useAsyncMemo(() => characterStore.list(),
      [characterStore]);

  useEffect(() => {
    setCharacters(loadedCharacters);
  }, [ loadedCharacters ]);

  const handleCreate = async (characterName: string, favoredClassId: string) => {
    const data: {[key:string]:any} = {
      'character_name': characterName,
      'favored_class': favoredClassId
    };
    const characterClassId = favoredClassId.replace("favored_class", "class");
    for (let level = 1; level <= 20; level++) {
      data[`${level}:class`] = characterClassId;
    }
    const created = await characterStore.create(data);
    navigate(`/character/plan/${created.id}`)
  };

  const handleDuplicate = async (characterToCopy: CharacterSummary, newName: string) => {
    const copyCharacter = await characterStore.load(characterToCopy.id);
    if (!copyCharacter) {
      console.error("Could not load character", characterToCopy.id);
      return;
    }

    const selections = {
      ...copyCharacter.pack().selections,
    };
    selections['character_name'] = newName;

    console.log(newName)
    console.log(selections);

    const created = await characterStore.create(selections);
    navigate(`/character/plan/${created.id}`)
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
          onDelete={handleDelete}
          onDuplicate={handleDuplicate} />)}
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
  onDuplicate: (characterToCopy: CharacterSummary, newName: string) => void;
}

function CharacterListEntry({ character, onDelete, onDuplicate }: CharacterListEntryProps) {
  const navigate = useNavigate();
  const db = useDatabase();

  const favoredClassName = useMemo(
      () => db.name(character.favored_class),
      [character, db]);

  return <Panel
      className={styles.character}>

    <div className={classNames([styles.nameContainer, 'clickable'])} onClick={() => {
      navigate(`/character/plan/${character.id}`)
    }}>
      <div className={styles.nameLabel}>
        {character.name}
        <div className={styles.favoredClassLabel}>
          ({favoredClassName})
        </div>
      </div>
    </div>
    <DuplicateCharacterButton characterToCopy={character} onDuplicate={onDuplicate} />
    <div className={classNames([styles.deleteButtonContainer, 'clickable'])} onClick={() => {
      onDelete(character.id);
    }}>
      <DeleteIcon/>
    </div>
  </Panel>
}

interface AddCharacterButtonProps {
  onCreate: (name: string, classId: string) => void;
  disabled?: boolean;
}

function AddCharacterButton({onCreate, disabled = false }: AddCharacterButtonProps) {
  const [ show, setShow ] = useState(false);

  function handleCreate(characterName: string, characterClassId: string) {
    setShow(false);
    onCreate(characterName, characterClassId);
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

function DuplicateCharacterButton({ characterToCopy, onDuplicate }: { characterToCopy: CharacterSummary, onDuplicate: (characterToCopy: CharacterSummary, newName: string) => void }) {
  const [ show, setShow ] = useState(false);

  function handleCreateCopy(characterName: string) {
    setShow(false);
    onDuplicate(characterToCopy, characterName);
  }

  function handleCancel() {
    setShow(false);
  }

  return <div className={classNames([styles.duplicateButtonContainer, 'clickable'])} onClick={_ => setShow(true)}>
    <DuplicateIcon/>
    {show && <CopyCharacterDialog show={show}
                                 defaultCharacterName={characterToCopy.name}
                                 onCreateCopy={handleCreateCopy}
                                 onCancel={handleCancel} />}
  </div>
}