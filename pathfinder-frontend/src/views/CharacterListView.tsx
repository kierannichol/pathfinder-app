import {useState} from "react";
import {Button, ListGroup} from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import {Link, useNavigate} from "react-router-dom";
import {useCharacterRepository} from "../app/reactCharacter";
import {useAsyncMemo} from "../app/reactHooks";
import NewCharacterDialog from "../components/character/NewCharacterDialog";
import LoadingBlock from "../components/common/LoadingBlock";
import {HeaderRow} from "../components/GridHelpers";
import Character from "../v3/model/Character";
import "./CharacterListView.scss";

function CharacterListView() {
  const navigate = useNavigate();
  const characterRepository = useCharacterRepository();

  const [ characterList ] = useAsyncMemo(() => characterRepository.list(),
      [ characterRepository ]);

  const isLoaded = characterList !== undefined;

  const handleCreate = (characterName: string) => {
    if (characterList === undefined) {
      return;
    }
    const id = `${characterList.length + 1}`;
    characterRepository.create()
        .then(async (newCharacter) => {
          newCharacter = await newCharacter.select("level0:character_name", characterName);
          characterRepository.save(newCharacter)
              .then(() => navigate(`/character/edit/${id}`));
        });
  };

  return (<main>
    <HeaderRow>Characters</HeaderRow>
    <ListGroup>
      {characterList?.map(character => <CharacterItemRow key={character.id} character={character} />)
          ?? <div className="d-flex justify-content-center"><LoadingBlock/></div>}
      <ListGroup.Item>
        <AddCharacterButton disabled={!isLoaded} onCreate={handleCreate}/>
      </ListGroup.Item>
    </ListGroup>
  </main>);
}

interface CharacterItemRowProps {
  character: Character;
}

function CharacterItemRow({ character }: CharacterItemRowProps) {
  const characterRepository = useCharacterRepository()
  const [ deleting, setDeleting ] = useState(false)

  console.log(character);

  const deleteAction = () => {
    setDeleting(true)
    characterRepository.delete(character.id)
        .then(() => setDeleting(false))
  }

  return <ListGroup.Item>
    <div className="d-flex flex-row w-100 align-items-center">
      <Link className="d-flex flex-grow-1" to={`/character/edit/${character.id}`}>
        {character.choice("level0:character_name")?.current}
      </Link>
      <Link to={'#'} className="d-flex ms-3" onClick={_ => deleteAction()}>
        {deleting ? <LoadingBlock/> : <Icon.XLg />}
      </Link>
    </div>
  </ListGroup.Item>
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

export default CharacterListView;