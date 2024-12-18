import {matchTags} from "@pathfinder-lib/utils/tags";
import {ItemOptionSummary} from "./ItemOption.ts";

export class ItemOptionGroup {
  constructor(public readonly name: string,
              public readonly optionTags: number[],
              public readonly hasMaxSelectable: boolean,
              public readonly maxSelectable: number) {
  }

  hasOption(option: ItemOptionSummary) {
    return matchTags(option.tags, this.optionTags);
  }
}