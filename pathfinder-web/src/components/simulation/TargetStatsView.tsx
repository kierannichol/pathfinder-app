import * as React from 'react';
import {AttackTarget} from "@/components/simulation/attack/AttackTarget.ts";

interface TargetStatsViewProps {
  value: AttackTarget;
  onChange: (target: AttackTarget) => void;
}

export function TargetStatsView({value, onChange}: TargetStatsViewProps) {

  return (
      <table>
        <thead>
        <tr>
          <th>Target AC</th>
          <th>Fort Save</th>
          <th>Reflex Save</th>
          <th>Will Save</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <span>{value.ac}</span>
          </td>
          <td>
            <span>{value.fort}</span>
          </td>
          <td>
            <span>{value.reflex}</span>
          </td>
          <td>
            <span>{value.will}</span>
          </td>
        </tr>
        </tbody>
      </table>
  )
}