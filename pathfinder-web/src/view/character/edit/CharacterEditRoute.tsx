import {RequiresAuth} from "@/app/auth.tsx";
import {useLoaderData} from "react-router-dom";
import CharacterEditView from "@/view/character/edit/CharacterEditView.tsx";
import Character from "@/data/Character.ts";
import {useEffect, useMemo, useState} from "react";
import {ChoiceRef} from "@/data/Choice.ts";
import {CharacterEditLoaderData} from "@/view/character/edit/characterEditLoader.tsx";
import {CharacterAtLevelProvider} from "@/view/character/edit/CharacterAtLevelContext.tsx";
import {CharacterUpdateProvider} from "@/view/character/edit/CharacterUpdateContext.tsx";
import {CharacterProvider} from "@/view/character/edit/CharacterContext.tsx";
import {CharacterStoreContext, DatabaseContext} from "@/data/context";

export default function CharacterEditRoute() {
  const { character, characterStore, database } = useLoaderData() as CharacterEditLoaderData;
  const [ workingCharacter, setWorkingCharacter ] = useState<Character>(character);

  const characterAtLevel = useMemo(() => {
    return workingCharacter.atLevel(parseInt(workingCharacter.selected('current_level') as string));
  }, [workingCharacter]);

  useEffect(() => {
    document.title = workingCharacter.name;
  }, [workingCharacter]);

  function handleChange(choice: ChoiceRef, value: string|string[]|undefined) {
    if ((typeof value === 'string') && workingCharacter.selected(choice.path) === value) {
      return;
    }

    workingCharacter.selectAll({ [choice.path]: value ?? '' })
      .then(result => {
        setWorkingCharacter(result);
        characterStore.save(result)
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  }

  return <RequiresAuth>
    <DatabaseContext.Provider value={database}>
      <CharacterStoreContext.Provider value={characterStore}>
        <CharacterProvider character={workingCharacter}>
          <CharacterUpdateProvider updateFn={handleChange}>
            <CharacterAtLevelProvider characterAtLevel={characterAtLevel}>
              <CharacterEditView />
              <div className='spacer'/>
            </CharacterAtLevelProvider>
          </CharacterUpdateProvider>
        </CharacterProvider>
      </CharacterStoreContext.Provider>
    </DatabaseContext.Provider>
  </RequiresAuth>
}