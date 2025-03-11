import {Feature} from "@ttrpg-data/Feature.js";
import {Trait} from "@ttrpg-data/Trait.js";
import {ResolvedValue} from "@kierannichol/formula-js";
import {ResolveContext} from "./ResolveContext";
import {TraitPath} from "@ttrpg-data/TraitPath";

export interface Choice extends Trait {
  id: string;
}

//         repeated string option_tags = 1;
//         repeated string feature_ids = 2;
//         repeated Category categories = 3;
//         SortBy sort_by = 4;

export class SelectChoiceCategory {
  constructor(public readonly label: string,
              public readonly tag: string) {
  }
}

export class SelectChoice implements Choice {
  constructor(public readonly id: string,
              private selected: Feature | null = null) {
  }

  clone(): Trait {
    return new SelectChoice(this.id, this.selected?.clone());
  }

  async resolve(parent: TraitPath, context: ResolveContext): Promise<void> {
    const path = parent.append(this.id);
    const selectedId = context.selected(path.toString());
    if ((selectedId ?? '') === '') {
      this.selected = null;
      return;
    }
    this.selected = await context.load(selectedId);
    await this.selected.resolve(path, context);
  }

  apply(key: string, value: ResolvedValue) {
    return this.selected?.apply(key, value) ?? value;
  }

  keys(): string[] {
    return this.selected?.keys() ?? [];
  }
}

export class TextChoice implements Choice {
  constructor(public readonly id: string,
              private readonly key: string,
              private value: string = '') {
  }

  async resolve(parent: TraitPath, context: ResolveContext): Promise<void> {
    const path = parent.append(this.id);
    const selectedText = context.selected(path.toString());
    this.value = selectedText ?? '';
  }

  apply(key: string, value: ResolvedValue): ResolvedValue {
    if (this.key !== key || this.value === '') {
      return value;
    }
    return ResolvedValue.of(this.value);
  }

  keys(): string[] {
    return this.value !== '' ? [this.key] : [];
  }

  clone(): Trait {
    return new TextChoice(this.id, this.key, this.value);
  }
}