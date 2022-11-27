import React from "react";
import {RequiresAuth} from "../app/auth";
import Page from "../components/common/Page";
import CharacterListView from "../views/CharacterListView";

export default function CharacterListRoute() {
  return <Page title="Pathfinder App" className="pf-app">
    <RequiresAuth>
      <CharacterListView />
    </RequiresAuth>
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