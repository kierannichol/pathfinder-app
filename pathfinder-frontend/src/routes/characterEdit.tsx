import React from "react";
import {useLoaderData} from "react-router-dom";
import {withGlobalCharacterRepository} from "../app/reactCharacter";
import Page from "../components/common/Page";
import {withGlobalPathfinderDatabase} from "../database/v3/PathfinderDatabase";
import CharacterEditView from "../views/CharacterEditView";

export async function characterEditLoader({ params }: any) {
  const characterId = params.id;

  if (characterId === undefined) {
    throw new Response("Character ID required", { status: 400 });
  }

  const characterRepository = await withGlobalCharacterRepository();
  const character = await characterRepository.load(characterId);
  if (character === undefined) {
    throw new Response("Character not found", { status: 404 });
  }

  const pathfinderDb = await withGlobalPathfinderDatabase();

  return { character, pathfinderDb };
}

export default function CharacterEditRoute() {
  const { character } = useLoaderData() as any;

  // const params = useParams();
  // const characterRepository = useCharacterRepository();

  // const id = params.id;
  // if (id === undefined) {
  //   throw new Response("No character ID specified", { status: 400 });
  // }

  return <Page title="Pathfinder App" className="pf-app">
    <CharacterEditView loaded={character} />
    {/*<Async promiseFn={() => characterRepository.load(id)}>*/}
    {/*    <Async.Loading>*/}
    {/*      <LoadingBlock />*/}
    {/*    </Async.Loading>*/}
    {/*    <Async.Fulfilled>*/}
    {/*      {(character: Character) => <CharacterEditView loaded={character} />}*/}
    {/*    </Async.Fulfilled>*/}
    {/*</Async>*/}
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