import {faCircleCheck, faCircleQuestion, faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {ReactNode, useMemo} from "react";
import {usePathfinderDatabase} from "../../../database/v3/PathfinderDatabase";
import FormulaTreeFormatter, {
  FormattedValue,
  TreeNodeOperator,
  TreeNodeValue
} from "../../../logic/FormulaTreeFormatter";
import {ResolvedValue} from "../../../logic/ResolvedValue";
import CharacterAtLevel from "../../../v3/model/CharacterAtLevel";
import DataHub from "../../../v3/model/DataHub";

interface PrerequisiteListProps {
  formula: string;
  characterAtLevel: CharacterAtLevel;
}

export default function PrerequisiteList({ formula, characterAtLevel } : PrerequisiteListProps) {
  const pathfinderDb = usePathfinderDatabase();

  const formulaText = formula;

  const block = useMemo(() => {
    if (formulaText === undefined || formulaText === '') {
      return [];
    }

    // const formulaWithoutSelfReference = formulaText
    //     .replaceAll(new RegExp("(\\s*AND)?\\s*\\(!@" + abilitySummary.id + "\\)$", "g"), '')
    //
    // if (formulaWithoutSelfReference === '') {
    //   return [];
    // }

    return formatFormula(formulaText, characterAtLevel, pathfinderDb);
  }, [formulaText, characterAtLevel]);

  return (<div>
    {block}
  </div>);
}

function formatFormula(formula: string, characterAtLevel: CharacterAtLevel, pathfinderDb: DataHub): ReactNode {
  const formatter = new FormulaTreeFormatter(variable => {
    return pathfinderDb.name(variable) ?? variable;
  });

  const tree = formatter.format(formula, characterAtLevel);
  if (tree === undefined) {
    return formula;
  }

  const checkMark = <FontAwesomeIcon style={{ color: 'var(--bs-success)' }} icon={faCircleCheck} />
  const xMark = <FontAwesomeIcon style={{ color: 'var(--bs-danger)' }} icon={faCircleXmark} />
  const unknownMark = <FontAwesomeIcon style={{ color: 'var(--bs-warning)' }} icon={faCircleQuestion} />

  function formatNode(node: ResolvedValue|undefined): ReactNode {
    if (node === undefined) {
      return undefined;
    }
    if (node instanceof FormattedValue) {
      return <span>{node.asBoolean() ? checkMark : xMark} {node.asFormatted()}</span>
    }

    if (node instanceof TreeNodeValue) {
      const isAll = node.operator === TreeNodeOperator.ALL;

      let html = undefined;
      if (!isAll) {
        // create OR block
        html = node.map(child => formatNode(child))
            .reduce((prev, node, currentIndex) => <>{prev} <div>{currentIndex > 0 ? <b>OR</b> : <></>} {node}</div></>, <></>);
      }
      else {
        // create AND block
        html = node.map(child => formatNode(child))
        .reduce((prev, node) => <>{prev} <div>{node}</div></>, <></>);
      }
      return html
    }

    return <span>{unknownMark} {node.asText()}</span>
  }

  return <div>{formatNode(tree)}</div>
}