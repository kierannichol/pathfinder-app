import {useMemo} from "react";
import {Table} from "react-bootstrap";
import {useCharacterAtLevel} from "./CharacterSheet";

export default function CharacterAtLevelDebugView() {
  const characterAtLevel = useCharacterAtLevel();

  const keysAlphabetical = useMemo(
      () => characterAtLevel.keys().sort((a, b) => (a.charCodeAt(0) - b.charCodeAt(0))),
      [characterAtLevel]);

  return <Table striped bordered>
          <thead>
          <tr className={'header primary'}>
            <th>Key</th>
            <th>Value</th>
            <th>Formula</th>
          </tr>
          </thead>
          <tbody>
          {keysAlphabetical.map(key =>
              <tr key={key}>
                <td>{key}</td>
                <td>{characterAtLevel.get(key)?.asText()}</td>
                <td></td>
              </tr>)}
          </tbody>
        </Table>
}