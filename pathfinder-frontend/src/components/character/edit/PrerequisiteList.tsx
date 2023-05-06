import {faCircleCheck, faCircleQuestion, faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Resolvable, ResolvedValue} from "@kierannichol/formula-js";
import React, {ReactNode, useMemo} from "react";
import CharacterAtLevel from "../../../core/CharacterAtLevel";
import {IDataHub} from "../../../core/DataHub";
import {usePathfinderDatabase} from "../../../database/v4/PathfinderDatabase";
import FormulaTreeFormatter, {
  FormattedValue,
  TreeNodeOperator,
  TreeNodeValue
} from "../../../logic/FormulaTreeFormatter";

interface PrerequisiteListProps {
  formula: Resolvable;
  characterAtLevel: CharacterAtLevel;
}

export default function PrerequisiteList({ formula, characterAtLevel } : PrerequisiteListProps) {
  const pathfinderDb = usePathfinderDatabase();

  const block = useMemo(() => {
    if (formula === undefined) {
      return [];
    }

    return formatFormula(formula, characterAtLevel, pathfinderDb);
  }, [formula, characterAtLevel, pathfinderDb]);

  return (<div>
    {block}
  </div>);
}

function formatFormula(formula: Resolvable, characterAtLevel: CharacterAtLevel, pathfinderDb: IDataHub): ReactNode {
  const formatter = new FormulaTreeFormatter(variable => {
    return pathfinderDb.name(variable) ?? variable;
  });

  const tree = formatter.format(formula, characterAtLevel);
  if (tree === undefined) {
    return '';
  }

  const checkMark = <FontAwesomeIcon style={{ color: 'var(--bs-success)' }} icon={faCircleCheck} />
  const xMark = <FontAwesomeIcon style={{ color: 'var(--bs-danger)' }} icon={faCircleXmark} />
  const unknownMark = <FontAwesomeIcon style={{ color: 'var(--bs-warning)' }} icon={faCircleQuestion} />
  const Empty = <></>

  function formatNode(node: ResolvedValue|undefined): ReactNode {
    if (node === undefined) {
      return undefined;
    }
    if (node instanceof FormattedValue) {
      return <span>{node.asBoolean() ? checkMark : xMark} {node.asFormatted()}</span>
    }

    if (node instanceof TreeNodeValue) {
      const isAll = node.operator === TreeNodeOperator.ALL;

      let html: ReactNode|undefined;
      if (!isAll) {
        // create OR block
        html = <span>{node.mapChildren(child => formatNode(child))
            .filter(x => x !== undefined)
            .map((formatted, i) => <span>{formatted}</span>)
            .reduce((a, b) => <span>{a} or {b}</span>)
        }</span>
      }
      else {
        // create AND block
        html = <span>{node.mapChildren(child => formatNode(child))
          .filter(x => x !== undefined)
          .map((formatted, i) => <span>{formatted}</span>)
          .reduce((a, b) => <span>{a}; {b}</span>)
        }</span>
      }
      return html
    }

    if (node.asText() === 'true') {
      return undefined;
    }

    return <span>{unknownMark} {node.asText()}</span>
  }

  return <div>{formatNode(tree)}</div>
}