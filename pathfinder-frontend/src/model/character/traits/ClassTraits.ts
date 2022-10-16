import Trait from "../Trait";
import {DataContextState} from "../../../logic/DataContext";
import {ClassData} from "../../../compiled";
import NoTrait from "./NoTrait";

export default class ClassTraits implements Trait {

  static of(classData: ClassData|null): Trait {
    if (classData === null) {
      return NoTrait;
    }
    return new ClassTraits(classData);
  }

  private constructor(private readonly classData: ClassData) {
  }

  applyTo(level: number, state: DataContextState): void {
    if (level === 0) {
      return;
    }

    const levelData = this.classData.levels[level - 1];

    state[`class_at_${level}`] = this.classData.id;
    state[`class:${this.classData.id}`] = level;
    state['bab'] = levelData.bab;
    state['fort_save'] = levelData.fortSave;
    state['reflex_save'] = levelData.refSave;
    state['will_save'] = levelData.willSave;
  }

}