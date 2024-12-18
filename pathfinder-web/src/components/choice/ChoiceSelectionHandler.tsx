import {ChoiceRef} from "@/data/Choice.ts";

export type ChoiceSelectionHandler = (choiceRef: ChoiceRef, selected: string | string[]) => void;