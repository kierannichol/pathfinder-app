import useAsyncMemo from "../../../utils/useAsyncMemo.tsx";
import {useEffect, useMemo, useState} from "react";
import styles from "./CharacterList.module.css";
import {useNavigate} from "react-router-dom";
import LoadingBlock from "@/components/LoadingBlock.tsx";
import DeleteIcon from "@/components/base/icons/DeleteIcon.tsx";
import CharacterSummary from "@/data/CharacterSummary.ts";
import DuplicateIcon from "@/components/base/icons/CopyIcon.tsx";
import Button from "@/components/base/form/Button.tsx";
import NewCharacterDialog from "@/view/character/list/NewCharacterDialog.tsx";
import {classNames} from "@pathfinder-lib/utils/classNames";
import {useCharacterStore, useDatabase} from "@/data/context.ts";

export default function CharacterListView() {
  const characterStore = useCharacterStore();
  const navigate = useNavigate();

  const [ characters, setCharacters ] = useState<CharacterSummary[]>([]);

  const [ loadedCharacters, isLoading ] = useAsyncMemo(() => characterStore.list(),
      [characterStore]);

  useEffect(() => {
    setCharacters(loadedCharacters);
  }, [ loadedCharacters ]);

  const handleCreate = async (characterName: string, favoredClassId: string) => {
    const data: {[key:string]:string} = {
      'character_name': characterName,
      'favored_class': favoredClassId
    };
    const characterClassId = favoredClassId.replace("favored_class", "class");
    for (let level = 1; level <= 20; level++) {
      data[`${level}:class`] = characterClassId;
    }
    const created = await characterStore.create(data);
    navigate(`/character/edit/${created.id}`)
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

  return <div
      className={styles.character}>

    <div className={classNames([styles.nameContainer, 'clickable'])} onClick={() => {
      navigate(`/character/edit/${character.id}`)
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
  </div>
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
    <Button disabled={disabled} onClick={_ => setShow(true)}>+ Character</Button>
    <NewCharacterDialog show={show}
                        onCreate={handleCreate}
                        onCancel={handleCancel} />
  </>);
}

function DuplicateCharacterButton({ characterToCopy, onDuplicate }: { characterToCopy: CharacterSummary, onDuplicate: (characterToCopy: CharacterSummary, newName: string) => void }) {
  // const [ show, setShow ] = useState(false);

  // function handleCreateCopy(characterName: string) {
  //   setShow(false);
  //   onDuplicate(characterToCopy, characterName);
  // }
  //
  // function handleCancel() {
  //   setShow(false);
  // }

  function handleDuplicateClicked() {
    onDuplicate(characterToCopy, characterToCopy.name + " (Copy)")
  }

  return <div className={classNames([styles.duplicateButtonContainer, 'clickable'])} onClick={_ => handleDuplicateClicked()}>
    <DuplicateIcon/>
    {/*{show && <CopyCharacterDialog show={show}*/}
    {/*                              defaultCharacterName={characterToCopy.name}*/}
    {/*                              onCreateCopy={handleCreateCopy}*/}
    {/*                              onCancel={handleCancel} />}*/}
  </div>
}