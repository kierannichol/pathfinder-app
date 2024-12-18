import {RequiresAuth} from "@/app/auth.tsx";
import {useLoaderData} from "react-router-dom";
import CharacterEditView from "@/view/character/edit/CharacterEditView.tsx";
import Character from "@/data/Character.ts";
import {useMemo, useState} from "react";
import {ChoiceRef} from "@/data/Choice.ts";
import {CharacterEditLoaderData} from "@/view/character/edit/characterEditLoader.tsx";
import {CharacterAtLevelProvider} from "@/view/character/edit/CharacterAtLevelContext.tsx";
import {CharacterUpdateProvider} from "@/view/character/edit/CharacterUpdateContext.tsx";
import {CharacterProvider} from "@/view/character/edit/CharacterContext.tsx";
import {CharacterStoreContext, DatabaseContext} from "@/data/context";

export default function CharacterEditRoute() {
  const { character, characterStore, database } = useLoaderData() as CharacterEditLoaderData;
  const [ workingCharacter, setWorkingCharacter ] = useState<Character>(character);

  function handleChange(choice: ChoiceRef, value: string|string[]) {
    if ((typeof value === 'string') && workingCharacter.selected(choice.path) === value) {
      return;
    }

    workingCharacter.selectAll({ [choice.path]: value })
      .then(result => {
        setWorkingCharacter(result);
        characterStore.save(result)
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  }

  const characterEditContext = useMemo(() => {
    return {
      character: workingCharacter,
      update: handleChange,
    }
  }, [character, workingCharacter]);

  return <RequiresAuth>
    <DatabaseContext.Provider value={database}>
      <CharacterStoreContext.Provider value={characterStore}>
        <CharacterProvider character={characterEditContext.character}>
          <CharacterUpdateProvider updateFn={characterEditContext.update}>
            <CharacterAtLevelProvider level={'current'}>
              <CharacterEditView />
              <div className='spacer'/>
            </CharacterAtLevelProvider>
          </CharacterUpdateProvider>
        </CharacterProvider>
      </CharacterStoreContext.Provider>
    </DatabaseContext.Provider>
  </RequiresAuth>
}