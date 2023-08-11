import {faCircleQuestion} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Resolvable, ResolvedValue} from "@kierannichol/formula-js";
import React, {ReactNode, useMemo} from "react";
import FormulaTreeFormatter, {
  FormattedValue,
  TreeNodeOperator,
  TreeNodeValue
} from "../../../logic/FormulaTreeFormatter";
import CharacterAtLevel from "../../../v7/CharacterAtLevel";
import Database from "../../../v7/Database";
import {usePathfinderDatabaseV7} from "../../../v7/PathfinderDatabaseV7";
import styles from "./PrerequisiteList.module.scss";

interface PrerequisiteListProps {
  featureId: string,
  formula: Resolvable;
  maxStacks: number|null,
  characterAtLevel: CharacterAtLevel;
}

function UnknownMark() {
  return <FontAwesomeIcon style={{ color: 'var(--bs-warning)' }} icon={faCircleQuestion} />
}

export default function PrerequisiteList({ featureId, formula, maxStacks, characterAtLevel } : PrerequisiteListProps) {
  const pathfinderDb = usePathfinderDatabaseV7();

  const block = useMemo(() => {
    const blocks = [];

    const alreadyHasBlock = genAlreadyHasBlock(
        (characterAtLevel.resolve(featureId)?.asNumber() ?? 0),
        maxStacks);
    if (alreadyHasBlock) {
      blocks.push(alreadyHasBlock);
    }

    if (formula !== undefined) {
      blocks.push(formatFormula(featureId, formula, maxStacks, characterAtLevel, pathfinderDb));
    }

    return blocks;
  }, [featureId, maxStacks, formula, characterAtLevel, pathfinderDb]);

  return (<div>
    {block}
  </div>);
}

function formatFormula(featureId: string, formula: Resolvable, maxStacks: number|null, characterAtLevel: CharacterAtLevel, pathfinderDb: Database): ReactNode {
  const formatter = new FormulaTreeFormatter(variable => {
    return pathfinderDb.name(variable) ?? variable;
  });

  const tree = formatter.format(formula, characterAtLevel);
  if (tree === undefined) {
    return <></>;
  }

  function formatNode(node: ResolvedValue|undefined): ReactNode {
    if (node === undefined) {
      return undefined;
    }
    if (node instanceof FormattedValue) {
      let formatted: ReactNode = node.asFormatted();
      return <span className={node.asBoolean() ? styles.element : styles.elementInvalid}>{formatted}</span>
    }

    if (node instanceof TreeNodeValue) {
      const isAll = node.operator === TreeNodeOperator.ALL;

      let html: ReactNode|undefined;
      if (!isAll) {
        // create OR block
        html = <span>{node.mapChildren(child => formatNode(child))
            .filter(x => x !== undefined)
            .map((formatted, _) => <span>{formatted}</span>)
            .reduce((a, b, i) => <span>{a} or {b}</span>)
        }</span>
      }
      else {
        // create AND block
        html = <span>{node.mapChildren(child => formatNode(child))
          .filter(x => x !== undefined)
          .map((formatted, _) => <span>{formatted}</span>)
          .reduce((a, b, i) => <span>{a}; {b}</span>)
        }</span>
      }
      return html
    }

    if (node.asText() === 'true') {
      return undefined;
    }

    return <span className={styles.element}><UnknownMark/> {node.asText()}</span>
  }

  return <div>
    {/*<div><code>{formula.asFormula()}</code></div>*/}
    <div>{formatNode(tree)}</div>
  </div>
}

function genAlreadyHasBlock(currentStacks: number, maxStacks: number|null): ReactNode|undefined {
  if (maxStacks === null || currentStacks < maxStacks) {
    return undefined;
  }
  const message = maxStacks === 1
      ? 'Must not already have this feature.'
      : `Cannot have more than ${maxStacks} of this feature.';`
  return <span key={'already-has'} className={styles.elementInvalid}>{message}</span>;
}