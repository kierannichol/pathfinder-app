import React from "react";
import {useLoaderData} from "react-router-dom";
import {CharacterRepositoryContextProvider} from "../app/reactCharacter";
import Page from "../components/common/Page";
import {PathfinderDatabaseContextV7, withGlobalPathfinderDatabaseV7} from "../v7/PathfinderDatabaseV7";
import SourceBrowseView from "../views/SourceBrowseView";

export async function browseLoader({ params }: any) {
  const database = await withGlobalPathfinderDatabaseV7();

  return { database };
}

export default function BrowseRoute() {
  const { database } = useLoaderData() as any;

  return <Page title="Pathfinder App" className="pf-app">
    <PathfinderDatabaseContextV7.Provider value={database}>
      <CharacterRepositoryContextProvider database={database}>
        <SourceBrowseView />
      </CharacterRepositoryContextProvider>
    </PathfinderDatabaseContextV7.Provider>
  </Page>
}