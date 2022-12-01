import {faCircleCheck, faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {ReactNode, useMemo} from "react";
import {PathfinderDatabase, usePathfinderDatabase} from "../../../database/v2/PathfinderDatabase";
import FormulaTreeFormatter, {
  FormattedValue,
  TreeNodeOperator,
  TreeNodeValue
} from "../../../logic/FormulaTreeFormatter";
import {ResolvedValue} from "../../../logic/ResolvedValue";
import {AbilitySummary} from "../../../model/character/Ability";
import {CharacterAtLevel} from "../../../model/character/CharacterAtLevel";

interface PrerequisiteListProps {
  abilitySummary: AbilitySummary;
  characterAtLevel: CharacterAtLevel;
}

export default function PrerequisiteList({ abilitySummary, characterAtLevel } : PrerequisiteListProps) {
  const pathfinderDb = usePathfinderDatabase();

  const formulaText = abilitySummary.prerequisites_formula;

  const block = useMemo(() => {
    if (formulaText === undefined || formulaText === '') {
      return [];
    }

    // const formulaWithoutSelfReference = formulaText
    //     .replace('!@' + abilitySummary.id, '')
    //     .replaceAll(/\s+AND\s*$/g, '')
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

function formatFormula(formula: string, characterAtLevel: CharacterAtLevel, pathfinderDb: PathfinderDatabase): ReactNode {
  const formatter = new FormulaTreeFormatter(variable => {
    return pathfinderDb.name(variable) ?? variable;
  });

  const tree = formatter.format(formula, characterAtLevel);
  if (tree === undefined) {
    return formula;
  }

  const checkMark = <FontAwesomeIcon style={{ color: 'green' }} icon={faCircleCheck} />
  const xMark = <FontAwesomeIcon style={{ color: 'red' }} icon={faCircleXmark} />

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

    return <span>{node.asText()}</span>
  }

  return <div>{formatNode(tree)}</div>
}