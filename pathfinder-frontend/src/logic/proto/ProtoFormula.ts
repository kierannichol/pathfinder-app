import {FormulaDbo} from "../../compiled";
import {DataContext} from "../DataContext";
import Resolvable from "../Resolvable";
import ResolvedValue from "../ResolvedValue";

export default class ProtoFormula extends Resolvable {

  static from(formulaData: FormulaDbo): Resolvable {
    return new ProtoFormula(formulaData);
  }

  resolve(context?: DataContext): ResolvedValue | undefined {
    return this.resolveOp(this.formulaData.operation,
        context ?? DataContext.Empty);
  }

  asFormula(): string {
    throw new Error("Method not implemented.");
  }

  private constructor(private readonly formulaData: FormulaDbo) {
    super();
  }

  private resolveOp(op: FormulaDbo.OperationDbo | null | undefined, context: DataContext): ResolvedValue {
    if (op === null || op === undefined) {
      return ResolvedValue.none();
    }
    const key = op.op;
    switch (key) {
      case "integerValue":
        return ResolvedValue.of(op.integerValue ?? 0);
      case "decimalValue":
        return ResolvedValue.of(op.decimalValue ?? 0);
      case "booleanValue":
        return ResolvedValue.of(op.booleanValue ?? false);
      case "stringValue":
        return ResolvedValue.of(op.stringValue ?? "");
      case "andOperation":
        return ResolvedValue.of(this.resolveOp(op.andOperation?.a, context).asBoolean()
            && this.resolveOp(op.andOperation?.b, context).asBoolean());
      case "orOperation":
        return ResolvedValue.of(this.resolveOp(op.orOperation?.a, context).asBoolean()
            || this.resolveOp(op.orOperation?.b, context).asBoolean());
      case "notOperation":
        return ResolvedValue.of(!this.resolveOp(op.notOperation?.a, context));
      case "addOperation":
        return ResolvedValue.of(this.resolveOp(op[key]?.a, context).asNumber()
            + this.resolveOp(op[key]?.b, context).asNumber());
      case "subtractOperation":
        return ResolvedValue.of(this.resolveOp(op.subtractOperation?.a, context).asNumber()
            - this.resolveOp(op.subtractOperation?.b, context).asNumber());
      case "multiplyOperation":
        return ResolvedValue.of(this.resolveOp(op.multiplyOperation?.a, context).asNumber()
            * this.resolveOp(op.multiplyOperation?.b, context).asNumber());
      case "divideOperation":
        return ResolvedValue.of(this.resolveOp(op.divideOperation?.a, context).asNumber()
            / this.resolveOp(op.divideOperation?.b, context).asNumber());
      case "variableValue":
        return (op.variableValue && context.get(op.variableValue.variableId)) ?? ResolvedValue.none();
      case "equalsOperation":
        return ResolvedValue.of(this.resolveOp(op[key]?.a, context)
            .equals(this.resolveOp(op[key]?.b, context)));
      case "greaterThanOperation":
        return ResolvedValue.of(this.resolveOp(op[key]?.a, context).asNumber()
            > this.resolveOp(op[key]?.b, context).asNumber());
      case "greaterThanOrEqualsOperation":
        return ResolvedValue.of(this.resolveOp(op[key]?.a, context).asNumber()
            >= this.resolveOp(op[key]?.b, context).asNumber());
      case "lessThanOperation":
        return ResolvedValue.of(this.resolveOp(op[key]?.a, context).asNumber()
            < this.resolveOp(op[key]?.b, context).asNumber());
      case "lessThanOrEqualsOperation":
        return ResolvedValue.of(this.resolveOp(op[key]?.a, context).asNumber()
            <= this.resolveOp(op[key]?.b, context).asNumber());
      case "absFunction":
        return ResolvedValue.of(Math.abs(this.resolveOp(op[key]?.param, context).asNumber()));
    }

    throw Error("Unknown operation: " + op.op);
  }
}