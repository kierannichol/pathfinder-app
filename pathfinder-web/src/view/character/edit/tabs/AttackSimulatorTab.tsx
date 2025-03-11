import * as React from 'react';
import {AttackSimulatorView} from "@/components/simulation/AttackSimulatorView.tsx";
import {useCharacterAtLevel} from "@/view/character/edit/CharacterAtLevelContext.tsx";
import {EquipmentSetStoreContext, ItemDatabaseContext} from "@/data/context.ts";
import useAsyncMemo from "@/utils/useAsyncMemo.tsx";
import {useCharacter} from "@/view/character/edit/CharacterContext.tsx";
import LoadingBlock from "@/components/LoadingBlock.tsx";
import {withGlobalEquipmentSetStore, withGlobalItemDatabase} from "@/data/init.ts";
import {EquipmentSet} from "@/data/Equipment.ts";

export function AttackSimulatorTab() {
  const character = useCharacter();
  const [itemDatabase] = useAsyncMemo(async () => withGlobalItemDatabase(), []);
  const [equipmentSetStore] = useAsyncMemo(() => withGlobalEquipmentSetStore(), [itemDatabase]);
  const [equipmentSet] = useAsyncMemo(async () =>
          (await equipmentSetStore?.load(character.id))
          ?? EquipmentSet.create(character.name, itemDatabase, character.id),
      [equipmentSetStore, character.id]);

  const characterAtLevel = useCharacterAtLevel();
  if (!itemDatabase || !equipmentSetStore || !equipmentSet) {
    return <LoadingBlock />
  }

  function handleModify(modified: EquipmentSet) {
    return equipmentSetStore.save(modified);
  }

  return (
      <ItemDatabaseContext value={itemDatabase}>
        <EquipmentSetStoreContext value={equipmentSetStore}>
          <section>
            <AttackSimulatorView characterAtLevel={characterAtLevel} equipmentSet={equipmentSet} onModify={handleModify}/>
          </section>
        </EquipmentSetStoreContext>
      </ItemDatabaseContext>
  )
}