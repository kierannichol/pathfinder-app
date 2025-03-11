import * as React from 'react';
import {AttackResult} from "@/components/simulation/attack/simulateAttack.ts";

interface SingleAttackBreakdownViewProps {
 attack: AttackResult;
}

export function SingleAttackBreakdownView({ attack }: SingleAttackBreakdownViewProps) {
 return (
     <div>
       <label>{attack.name}</label>
       <div>Chance to Hit: {(attack.chance * 100).toFixed(0)}%</div>
       <div>Chance to Crit: {(attack.critChance * 100).toFixed(0)}%</div>
       <div>Average Damage: {attack.damage}</div>
       <div>Average Crit Damage: {attack.damage + attack.critDamage}</div>
       <div>Attack Formula: {attack.attackFormula}</div>
       <div>Damage Formula: {attack.damageFormula}</div>
     </div>
 )
}