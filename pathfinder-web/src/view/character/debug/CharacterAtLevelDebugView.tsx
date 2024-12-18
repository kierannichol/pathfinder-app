import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import styles from "./CharacterAtLevelDebugView.module.css";

interface CharacterAtLevelDebugViewProps {
  characterAtLevel: CharacterAtLevel;
}

function CharacterAtLevelDebugView({ characterAtLevel }: CharacterAtLevelDebugViewProps) {
  return (<>
    <header>Character Choices</header>
    <section>
      <table className={styles.debug}>
        <thead>
        <tr>
          <th>path</th>
          <th>label</th>
          <th>tags</th>
        </tr>
        </thead>
        <tbody>
        {characterAtLevel.choices.map((choice) => (
            <tr key={choice.path}>
              <td>{choice.path}</td>
              <td>{choice.label}</td>
              <td>{choice.tags.join(', ')}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </section>
    <header>Character State</header>
    <section>
      <table className={styles.debug}>
        <thead>
        <tr>
          <th>key</th>
          <th>value</th>
        </tr>
        </thead>
        <tbody>
        {characterAtLevel.keys().map(key => (
            <tr key={key}>
              <td>{key}</td>
              <td>{characterAtLevel.resolve(key)?.asText()}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </section>
  </>)
}

export default CharacterAtLevelDebugView;