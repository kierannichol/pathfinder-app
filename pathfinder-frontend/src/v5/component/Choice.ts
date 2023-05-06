import {Formula, Resolvable} from "@kierannichol/formula-js";
import {Option, OptionCategory, OptionMap, Outcome, UnresolvedOption} from "../../core/Choice";
import {IDataHub} from "../../core/DataHub";
import Description from "../../core/Description";
import Effect from "../../core/Effect";
import Entity from "../Entity";
import ChoiceCategory from "./ChoiceCategory";
import ChoiceKey from "./ChoiceKey";
import ChoiceOptionProvider from "./ChoiceOptionProvider";
import ChoiceType from "./ChoiceType";
import Label from "./Label";
import TextOutcome from "./TextOutcome";

interface Choice {

}

class Choice extends Entity {

  static text(key: string, label: string, type: string, effectsFn: (value: string) => Effect[]): Choice {
    const choice = new Choice();
    choice.createComponent(ChoiceKey, key);
    choice.createComponent(Label, label);
    choice.createComponent(ChoiceType, type);
    choice.createComponent(TextOutcome, effectsFn);
    return choice;
  }

  static select(key: string, label: string, type: string, optionsFn: (db: IDataHub, category: string|undefined) => OptionMap, categories: OptionCategory[] = []): Choice {
    const choice = new Choice();
    choice.createComponent(ChoiceKey, key);
    choice.createComponent(Label, label);
    choice.createComponent(ChoiceType, type);
    choice.createComponent(ChoiceOptionProvider, optionsFn);
    categories.forEach(category => choice.addComponent(ChoiceCategory, category.id, category.label));
    return choice;
  }

  static option(id: string, name: string, prerequisiteFormula: string|Resolvable, descriptionFn: () => Promise<Description>, outcomeFn: () => Promise<Outcome>): Option {
    return new UnresolvedOption(id, name, Formula.parse(prerequisiteFormula), descriptionFn, outcomeFn);
  }

  constructor() {
    super();
  }

}

export default Choice;