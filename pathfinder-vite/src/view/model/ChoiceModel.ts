import {FeatureSummaryModel} from "./FeatureModel.ts";
import {DatabaseModel} from "./DatabaseModel.ts";

export type ChoiceSelectedHandler = (choice: ChoiceModel, selected: string|string[]) => void;

export abstract class ChoiceModel {
  abstract readonly path: string;
  abstract readonly label: string;
  abstract readonly type: string;
  abstract readonly key: string;
  abstract readonly repeatingIndex: number;
  abstract readonly inputType: ChoiceInputType;
}

export class ChoiceCategoryModel {
  label: React.ReactNode;
  tag: string = "";
}

export enum ChoiceInputType {
  Text,
  Select,
}

export abstract class TextChoiceModel extends ChoiceModel {
  readonly inputType: ChoiceInputType = ChoiceInputType.Text;
}

export abstract class SelectChoiceModel extends ChoiceModel {
  readonly inputType: ChoiceInputType = ChoiceInputType.Select;
  abstract readonly categories: ChoiceCategoryModel[];

  abstract options(db: DatabaseModel, query: string | undefined, tag: string | undefined): FeatureSummaryModel[];
}

export abstract class MultiSelectChoiceModel extends ChoiceModel {
  readonly inputType: ChoiceInputType = ChoiceInputType.Select;
  abstract readonly categories: ChoiceCategoryModel[];

  abstract options(db: DatabaseModel, query: string | undefined, tag: string | undefined): FeatureSummaryModel[];
}