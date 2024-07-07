import styles from "./PrerequisiteList.module.scss";
import {Resolvable, ResolvedValue} from "@kierannichol/formula-js";
import React, {ReactNode} from "react";
import FormulaTreeFormatter, {
  FormattedValue,
  TreeNodeOperator,
  TreeNodeValue
} from "../../../utils/logic/FormulaTreeFormatter.ts";
import {classNames} from "../../../utils/classNames.ts";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import CharacterAtLevel from "../../../data/v8/CharacterAtLevel.ts";
import Database from "../../../data/v8/Database.ts";
import {PrerequisiteValidation, PrerequisiteValidationEntry} from "../../../data/v8/PrerequisiteValidation.ts";

interface PrerequisiteListProps {
  formula: string;
  validation: PrerequisiteValidation;
}

function UnknownMark() {
  return <span>?</span>
}

export default function PrerequisiteList({ formula, validation } : PrerequisiteListProps) {
  const renderTooltip =
      <Tooltip className={styles.tooltip}>
        {formula}
      </Tooltip>;

  return (<OverlayTrigger placement="bottom"
                          trigger={["hover", "focus"]}
                          overlay={renderTooltip}>
    <div>
      {validation.entries.map((entry, index) =>
          <div key={index}>
            <PrerequisiteValidationEntryBlock entry={entry} />
          </div>)}
    </div>
  </OverlayTrigger>);

  // const renderTooltip =
  //     <Tooltip className={styles.tooltip}>
  //       {formula.asFormula()}
  //     </Tooltip>;
  //
  // return (<OverlayTrigger placement="bottom"
  //                         trigger={["hover", "focus"]}
  //                         overlay={renderTooltip}>
  //   <div>
  //     {block.map((b, i) => <div key={i}>{b}</div>)}
  //   </div>
  // </OverlayTrigger>);
}

interface PrerequisiteValidationEntryBlockProps {
  entry: PrerequisiteValidationEntry;
}

function PrerequisiteValidationEntryBlock({ entry }: PrerequisiteValidationEntryBlockProps) {
  return <span className={classNames([ entry.valid ? styles.element : styles.elementInvalid ])}>{entry.description}</span>
}

function formatFormula(featureId: string, formula: Resolvable, maxStacks: number|null, characterAtLevel: CharacterAtLevel, pathfinderDb: Database): ReactNode {
  const formatter = new FormulaTreeFormatter(variable => {
    let name = pathfinderDb.name(variable);
    return name !== undefined && name !== '' ? name : variable;
  });

  const tree = formatter.format(formula, characterAtLevel);
  if (tree === undefined) {
    return <></>;
  }

  function formatNode(node: ResolvedValue|undefined, index: number): ReactNode {
    if (node === undefined) {
      return <></>;
    }
    if (node instanceof FormattedValue) {
      let formatted: ReactNode = node.asFormatted();
      return <span key={index} className={node.asBoolean() ? styles.element : styles.elementInvalid}>{formatted}</span>
    }

    if (node instanceof TreeNodeValue) {
      const isAll = node.operator === TreeNodeOperator.ALL;

      if (!isAll) {
        // create OR block
        return <span key={index}>{node.mapChildren(child => formatNode(child, index + 1))
            .filter(x => x !== undefined)
            .map((formatted, _) => <span>{formatted}</span>)
            .reduce((a, b) => <>{a} or {b}</>)
        }</span>
      }
        // create AND block
        return <span key={index}>{node.mapChildren(child => formatNode(child, index + 1))
          .filter(x => x !== undefined)
          .map((formatted, _) => <span>{formatted}</span>)
          .reduce((a, b) => <>{a}; {b}</>)
        }</span>
    }

    if (node.asText() === 'true') {
      return <span key={index}></span>;
    }

    return <span key={index} className={styles.element}><UnknownMark/> {node.asText()}</span>
  }

  return <div>
    <div>{formatNode(tree, 1)}</div>
  </div>
}