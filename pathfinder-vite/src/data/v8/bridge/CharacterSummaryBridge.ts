import {CharacterSummaryModel} from "../../../view/model/CharacterSummaryModel.ts";
import CharacterSummary from "../CharacterSummary.ts";

export class CharacterSummaryBridge extends CharacterSummaryModel {

  constructor(private readonly data: CharacterSummary) {
    super();
  }

  get id(): string {
    return this.data.id;
  }

  get name(): string {
    return this.data.name;
  }

}