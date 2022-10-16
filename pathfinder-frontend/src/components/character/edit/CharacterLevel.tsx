import {useMemo} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Character} from "../../../model/character/Character";
import {HeaderRow} from "../../Rows";
import ChoiceSelector from "../ChoiceSelector";
import LevelStatsDisplay from "../LevelStatsDisplay";
import CharacterTraitList from "./CharacterTraitList";

interface CharacterLevelProps {
  character: Character;
  level: number;
  onChange: (key:string, value:string) => void;
}

export default function CharacterLevel({ character, level, onChange }: CharacterLevelProps) {

  const characterAtLevel = useMemo(() => character.atLevel(level), [character, level]);
  const choicesForLevel = useMemo(() => character.choicesForLevel(level), [character, level]);

  const characterChanges = useMemo(() => {
    return level > 1
        ? characterAtLevel.intersection(character.atLevel(level - 1))
        : characterAtLevel;
  }, [characterAtLevel]);
  
  const featIds = useMemo(() => characterChanges.features('feat'), [characterChanges]);
  const specialIds = useMemo(() => characterChanges.features('ability'), [characterChanges]);

  if (characterAtLevel === undefined) {
    return <div>Loading...</div>;
  }

  return <div>
    <HeaderRow>{'Level ' + level}</HeaderRow>
    <Container>
    {characterAtLevel.has('bab') && <LevelStatsDisplay characterAtLevel={characterAtLevel} />}

    {choicesForLevel.map(choice =>
        <Row key={choice.key}>
          <Col>
            <div><b>{choice.label}</b></div>
            <ChoiceSelector
                character={characterAtLevel}
                choice={choice}
                onchange={value => onChange(choice.key, value)} />
          </Col>
        </Row>
    )}

      {specialIds.length > 0 && <>
        <div><b>Specials</b></div>
        <CharacterTraitList characterAtLevel={characterChanges} abilityIds={specialIds} />
        </>}

    </Container>
  </div>;
}