import styles from "./PrerequisiteList.module.scss";
import {Resolvable, ResolvedValue} from "@kierannichol/formula-js";
import {ReactNode, useMemo} from "react";
import FormulaTreeFormatter, {
  FormattedValue,
  TreeNodeOperator,
  TreeNodeValue
} from "../../../utils/logic/FormulaTreeFormatter.ts";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import {CharacterAtLevelModel} from "../../model/CharacterAtLevelModel.ts";
import {DatabaseModel} from "../../model/DatabaseModel.ts";
import {useDatabaseModel} from "../../model/ModelContext.tsx";

interface PrerequisiteListProps {
  featureId: string,
  formula: Resolvable;
  maxStacks: number|null,
  characterAtLevel: CharacterAtLevelModel;
}

function UnknownMark() {
  return <span>?</span>
}

export default function PrerequisiteList({ featureId, formula, maxStacks, characterAtLevel } : PrerequisiteListProps) {
  const pathfinderDb = useDatabaseModel();

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

  const renderTooltip =
      <Tooltip className={styles.tooltip}>
        {formula.asFormula()}
      </Tooltip>;

  return (<OverlayTrigger placement="bottom"
                          trigger={["hover", "focus"]}
                          overlay={renderTooltip}>
    <div>
      {block.map((b, i) => <div key={i}>{b}</div>)}
    </div>
  </OverlayTrigger>);
}

function formatFormula(featureId: string, formula: Resolvable, maxStacks: number|null, characterAtLevel: CharacterAtLevelModel, pathfinderDb: DatabaseModel): ReactNode {
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

function genAlreadyHasBlock(currentStacks: number, maxStacks: number|null): ReactNode|undefined {
  if (maxStacks === null || currentStacks < maxStacks) {
    return undefined;
  }
  const message = maxStacks === 1
      ? 'Must not already have this feature.'
      : `Cannot have more than ${maxStacks} of this feature.';`
  return <span key={'already-has'} className={styles.elementInvalid}>{message}</span>;
}