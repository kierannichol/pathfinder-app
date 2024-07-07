import Character from "../../data/v8/Character.ts";
import CharacterPlanner from "@/view/components/character/plan/CharacterPlanner.tsx";

interface CharacterPlannerViewProps {
  loaded: Character;
}

export default function CharacterPlannerView({ loaded }: CharacterPlannerViewProps) {
  return <div>
    <CharacterPlanner loaded={loaded} />
    <div className="spacer"/>
  </div>
}