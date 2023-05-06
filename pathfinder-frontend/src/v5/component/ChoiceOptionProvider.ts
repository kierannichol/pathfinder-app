import {OptionMap} from "../../core/Choice";
import {IDataHub} from "../../core/DataHub";

export default class ChoiceOptionProvider {
  constructor(private readonly options: (db: IDataHub, category: string|undefined) => OptionMap) {
  }
}