import {DataContextState} from "../../../logic/DataContext";
import {CharacterClass} from "../CharacterClass";
import Trait from "../Trait";
import NoTrait from "./NoTrait";

export default class ClassTraits implements Trait {

  static of(classData: CharacterClass|null): Trait {
    if (classData === null) {
      return NoTrait;
    }
    return new ClassTraits(classData);
  }

  private constructor(private readonly classData: CharacterClass) {
  }

  applyTo(level: number, state: DataContextState): void {
    if (level === 0) {
      return;
    }

    state[`class_at_${level}`] = this.classData.id;
    state[this.classData.id] = level;
  }

}