import {ItemOptionSummary} from "./ItemOption.ts";
import {matchTags} from "@/utils/tags.ts";

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