import React from "react";
import PathfinderSelect from "../components/common/PathfinderSelect";
import Database from "../v7/Database";
import {Effect, SetFormulaEffect} from "../v7/Effect";
import Feature from "../v7/Feature";
import Link from "../v7/Link";
import {usePathfinderDatabaseV7} from "../v7/PathfinderDatabaseV7";

export default function SourceBrowseView() {
  const database = usePathfinderDatabaseV7();

  return <main>
    <PathfinderSelect>
      {database.features().map(feature =>
          <PathfinderSelect.Item key={feature.id}
                                 itemKey={feature.id}
                                 label={feature.name}
                                 bodyFn={async () => <BrowseFeatureDescription feature={await database.load(feature.id)} />}
                                 variant={feature.tags[0]}>

      </PathfinderSelect.Item>)}
    </PathfinderSelect>
  </main>
}

interface FeatureDescriptionProps {
  feature: Feature|undefined;
}

function BrowseFeatureDescription({ feature }: FeatureDescriptionProps) {
  const database = usePathfinderDatabaseV7();

  if (!feature) {
    return <div>undefined</div>
  }

  return <div>
    <div><b>Tags:</b> {feature.tags.join(', ')}</div>
    {feature.enabledFormula && <div><b>Enabled:</b> <code>{feature.enabledFormula}</code></div>}
    {/*{feature.effects.length > 0 && <div>*/}
    {/*  <b>Effects:</b>*/}
    {/*  {feature.effects.map((effect, i) => <EffectView key={i} effect={effect} />)}*/}
    {/*</div>}*/}
    {/*{feature.description &&*/}
    {/*<div><b>Description:</b> <FeatureDescription description={feature.description} /></div>}*/}
    {/*{feature.links.length > 0 &&*/}
    {/*<div>*/}
    {/*  <b>Links:</b>*/}
    {/*  <PathfinderSelect>*/}
    {/*    {feature.links.map((link, i) => <LinkView key={i} link={link} database={database} />)}*/}
    {/*  </PathfinderSelect>*/}
    {/*</div>}*/}
  </div>
}

function SetFormulaEffectView(props: { targetKey: string, formula: string }) {
  return <div>
    <span>{props.targetKey} = </span><code>{props.formula}</code>
  </div>
}

function EffectView(props: { effect: Effect }) {
  if (props.effect instanceof SetFormulaEffect) {
    return <SetFormulaEffectView
        targetKey={props.effect.targetKey}
        formula={props.effect.formula} />
  }
  return <></>
}

function LinkView(props: { link: Link, database: Database }) {
  return <PathfinderSelect.Item
      itemKey={props.link.featureId+props.link.conditionFormula}
      bodyFn={async () => <p>{(await props.database.description(props.link.featureId)).text}</p>}
      label={props.database.name(props.link.featureId)}
      variant="white">
  </PathfinderSelect.Item>
}