import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faPlus as featureIcon, faQuestionCircle as choiceIcon} from '@fortawesome/free-solid-svg-icons'
import {EventHandler} from "react";
import "./FeatureBadge.css";

interface FeatureBadgeProps {
  text: string;
  type: string,
  choice: boolean;
  onClick?: EventHandler<any>;
}

export default function FeatureBadge(props: FeatureBadgeProps) {


  return <div className={"pf-feature-badge pf-feature-" + props.type} onClick={props.onClick}>
    {/*<FontAwesomeIcon className={"pf-feature-icon"} icon={determineIcon(props.choice)}/>*/}
    {props.text}
  </div>;
}

function determineIcon(choice: boolean): IconDefinition {
  return choice ? choiceIcon : featureIcon;
}