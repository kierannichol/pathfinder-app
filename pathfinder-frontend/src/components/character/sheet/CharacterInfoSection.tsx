import {ReactNode, useMemo} from "react";
import {Col, Row} from "react-bootstrap";
import {CharacterClassDatabase, useCharacterClassDatabase} from "../../../database/v2/ClassDatabase";
import {RaceDatabase, useRaceDatabase} from "../../../database/v2/RaceDatabase";
import {CharacterAtLevel} from "../../../model/character/CharacterAtLevel";
import Size from "../../../model/character/Size";
import CharacterAtLevelProps from "./CharacterAtLevelProps";
import "./CharacterInfoSection.scss";
import Section from "./Section";

function CharacterInfoSection({ characterAtLevel }: CharacterAtLevelProps) {
  const classDatabase = useCharacterClassDatabase();
  const raceDatabase = useRaceDatabase();

  const characterName = useMemo(() => characterAtLevel.get('character_name')?.asText() ?? '', [characterAtLevel]);
  const alignment = useMemo(() => characterAtLevel.get('alignment')?.asText() ?? '', [characterAtLevel]);
  const playerName = useMemo(() => characterAtLevel.get('player_name')?.asText() ?? '', [characterAtLevel]);
  const characterLevel = useMemo(() => formatPlayerLevel(characterAtLevel, classDatabase), [characterAtLevel, classDatabase]);
  const deityName = useMemo(() => characterAtLevel.get('deity')?.asText() ?? '', [characterAtLevel]);
  const homeland = useMemo(() => characterAtLevel.get('homeland')?.asText() ?? '', [characterAtLevel]);
  const race = useMemo(() => formatRace(characterAtLevel, raceDatabase), [characterAtLevel, raceDatabase]);
  const size = useMemo(() => formatCharacterSize(characterAtLevel), [characterAtLevel]);
  const gender = useMemo(() => characterAtLevel.get('gender')?.asText() ?? '', [characterAtLevel]);
  const age = useMemo(() => characterAtLevel.get('age')?.asText() ?? '', [characterAtLevel]);
  const height = useMemo(() => characterAtLevel.get('height')?.asText() ?? '', [characterAtLevel]);
  const weight = useMemo(() => characterAtLevel.get('weight')?.asText() ?? '', [characterAtLevel]);
  const hair = useMemo(() => characterAtLevel.get('hair')?.asText() ?? '', [characterAtLevel]);
  const eyes = useMemo(() => characterAtLevel.get('eyes')?.asText() ?? '', [characterAtLevel]);

  return (<Section className={'pfcs-character-info-section'}>
    <Row className={'g-0'}>
      <Col xs={5}><LabeledTextBlock label={'Character Name'}>{characterName}</LabeledTextBlock></Col>
      <Col xs={2}><LabeledTextBlock label={'Alignment'}>{alignment}</LabeledTextBlock></Col>
      <Col xs={5}><LabeledTextBlock label={'Player'}>{playerName}</LabeledTextBlock></Col>
    </Row>
    <Row className={'g-0'}>
      <Col xs={6}><LabeledTextBlock label={'Character Level'}>{characterLevel}</LabeledTextBlock></Col>
      <Col xs={3}><LabeledTextBlock label={'Deity'}>{deityName}</LabeledTextBlock></Col>
      <Col xs={3}><LabeledTextBlock label={'Homeland'}>{homeland}</LabeledTextBlock></Col>
    </Row>
    <Row className={'g-0'}>
      <Col><LabeledTextBlock label={'Race'}>{race}</LabeledTextBlock></Col>
      <Col><LabeledTextBlock label={'Size'}>{size}</LabeledTextBlock></Col>
      <Col><LabeledTextBlock label={'Gender'}>{gender}</LabeledTextBlock></Col>
      <Col><LabeledTextBlock label={'Age'}>{age}</LabeledTextBlock></Col>
      <Col><LabeledTextBlock label={'Height'}>{height}</LabeledTextBlock></Col>
      <Col><LabeledTextBlock label={'Weight'}>{weight}</LabeledTextBlock></Col>
      <Col><LabeledTextBlock label={'Hair'}>{hair}</LabeledTextBlock></Col>
      <Col><LabeledTextBlock label={'Eyes'}>{eyes}</LabeledTextBlock></Col>
    </Row>
  </Section>);
}

function formatPlayerLevel(characterAtLevel: CharacterAtLevel, classDatabase: CharacterClassDatabase): string {
  const class1Id = characterAtLevel.get('class_1')?.asText() ?? '';
  const class1Level = characterAtLevel.get(class1Id)?.asText() ?? '';
  const classSummary = classDatabase.summary(class1Id);
  const className = classSummary?.name ?? '';

  return `${className} ${class1Level}`;
}

function formatRace(characterAtLevel: CharacterAtLevel, raceDatabase: RaceDatabase): string {
  const raceId = characterAtLevel.get('race')?.asText() ?? '';
  const race = raceDatabase.summary(raceId);
  return race?.name ?? 'Unknown';
}

function formatCharacterSize(characterAtLevel: CharacterAtLevel): string {
  const sizeId = characterAtLevel.get('size')?.asNumber() ?? 0;
  const size = Size.fromId(sizeId);

  if (size === undefined) {
    return '???';
  }

  return size.longName;
}

interface LabeledTextBlockProps {
  label: string;
  children: ReactNode;
}

function LabeledTextBlock({ label, children }: LabeledTextBlockProps) {
  return <div className={'pfcs-character-info-block'}>
    <div className={'pfcs-character-info-block--value'}>{children}</div>
    <div className={'pfcs-character-info-block--label'}>{label}</div>
  </div>;
}

export default CharacterInfoSection;