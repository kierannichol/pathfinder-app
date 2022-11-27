import React from "react";
import {Async} from "react-async";
import {useParams} from "react-router-dom";
import {useCharacterRepository} from "../app/reactCharacter";
import LoadingBlock from "../components/common/LoadingBlock";
import Page from "../components/common/Page";
import {Character} from "../model/character/Character";
import CharacterEditView from "../views/CharacterEditView";

export default function CharacterEditRoute() {
  const params = useParams();
  const characterRepository = useCharacterRepository();

  const id = params.id;
  if (id === undefined) {
    throw new Response("No character ID specified", { status: 400 });
  }

  return <Page title="Pathfinder App" className="pf-app">
    <Async promiseFn={() => characterRepository.load(id)}>
        <Async.Loading>
          <LoadingBlock />
        </Async.Loading>
        <Async.Fulfilled>
          {(character: Character) => <CharacterEditView loaded={character} />}
        </Async.Fulfilled>
    </Async>
  </Page>

  // const [ character, setCharacter ] = useState<Character | undefined>();
  // useEffect(() => {
  //   characterRepository.load(id)
  //       .then(loaded => {
  //         if (loaded === undefined) {
  //           throw new Response("Character not found", { status: 404 });
  //         }
  //         setCharacter(loaded);
  //       });
  // }, [characterRepository]);
  //
  // if (character === undefined) {
  //   return <main><LoadingBlock /></main>
  // }

  // return <CharacterEditView character={character} setCharacter={setCharacter} />
}