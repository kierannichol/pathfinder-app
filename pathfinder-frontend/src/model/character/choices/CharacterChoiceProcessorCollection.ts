import Trait from "../Trait";
import CharacterChoice from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";

class CharacterChoiceProcessorCollection {
  private readonly processorsByChoiceType: {[type:string]: ICharacterChoiceProcessor<any>};

  public constructor(processors: ICharacterChoiceProcessor<CharacterChoice>[]) {
    this.processorsByChoiceType = {};
    for (let processor of processors) {
      this.processorsByChoiceType[processor.supportedChoiceType] = processor;
    }
  }

  async select(choice: CharacterChoice, value: string): Promise<CharacterChoice[]> {
    const processor = this.processorsByChoiceType[choice.type];
    if (processor === undefined) {
      console.warn(`No choice processor found for ${choice.type}`)
      return [ choice ];
    }
    return processor.select(choice, value);
  }

  async traits(choice: CharacterChoice): Promise<Trait[]> {
    const processor = this.processorsByChoiceType[choice.type];
    if (processor === undefined) {
      console.warn(`No choice processor found for ${choice.type}`)
      return [];
    }
    return processor.traits(choice);
  }

}

export default CharacterChoiceProcessorCollection;