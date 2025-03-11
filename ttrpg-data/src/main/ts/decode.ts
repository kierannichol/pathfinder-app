import {Choice, SelectChoice, TextChoice} from "@ttrpg-data/Choice";
import {ChoiceData} from "@ttrpg-db/Choice";

export function decodeChoice(data: ChoiceData): Choice {
  if (data.has_select) {
    return new SelectChoice(data.id);
  } else {
    return new TextChoice(data.id, data.text.target_key);
  }
}