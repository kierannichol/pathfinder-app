import {useMemo} from "react";
import {Table} from "react-bootstrap";
import {CharacterAtLevel} from "../../../model/character/CharacterAtLevel";

interface CharacterAtLevelDebugViewProps {
  characterAtLevel: CharacterAtLevel;
}

function CharacterAtLevelDebugView({ characterAtLevel }: CharacterAtLevelDebugViewProps) {
  const keysAlphabetical = useMemo(
      () => characterAtLevel.keys().sort((a, b) => (a.charCodeAt(0) - b.charCodeAt(0))),
      [characterAtLevel]);

  return (
      <main>
        <Table striped bordered>
          <thead>
          <tr className={'header primary'}>
            <th>Key</th>
            <th>Value</th>
            <th>Formula</th>
          </tr>
          </thead>
          <tbody>
          {keysAlphabetical.map(key =>
              <tr>
                <td>{key}</td>
                <td>{characterAtLevel.get(key)?.asText()}</td>
                <td></td>
              </tr>)}
          </tbody>
        </Table>
      </main>
  );
}

export default CharacterAtLevelDebugView;