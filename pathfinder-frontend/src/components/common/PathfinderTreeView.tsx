import {HTMLAttributes, ReactElement} from "react";
import {array} from "../../util/pfutils";
import PathfinderButton from "./PathfinderButton";
import PathfinderSelect from "./PathfinderSelect";

type NodeChildrenType = ReactElement<BranchNodeProps>|ReactElement<LeafNodeProps>|ReactElement<BranchNodeProps|LeafNodeProps>[];

interface PathfinderTreeViewProps extends HTMLAttributes<HTMLDivElement> {
  children: undefined|NodeChildrenType;
}

export default function PathfinderTreeView(props: PathfinderTreeViewProps) {
  return <div><PathfinderSelect>
    {array(props.children).map(child => <PathfinderSelect.Item
        itemKey={child?.props.itemKey ?? ''}
        label={child?.props.label}
    >
      {child}
    </PathfinderSelect.Item>)}
  </PathfinderSelect></div>
}

interface BranchNodeProps extends HTMLAttributes<HTMLDivElement> {
  children: undefined|NodeChildrenType;
  label: string;
  itemKey: string;
}

function BranchNode(props: BranchNodeProps) {
  return <div>{props.children}</div>;
}

interface LeafNodeProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  itemKey: string;
}

function LeafNode(props: LeafNodeProps) {
  return <PathfinderButton>
    {props.label}
  </PathfinderButton>
}

PathfinderTreeView.Branch = BranchNode;
PathfinderTreeView.Leaf = LeafNode;