import {useEffect, useState} from "react";
import EntryNav from "./components/EntryNav";
import "./App.css";
import FeatureEditor from "./components/editors/FeatureEditor";
import FeatureModel from "../../preload/pathfinder";

function App() {
  const [ sections, setSections ] = useState<string[]>([]);
  const [ entries, setEntries ] = useState<string[]>([]);
  const [ selectedSection, setSelectedSection ] = useState<string|null>(null);
  const [ selectedEntry, setSelectedEntry ] = useState<string|null>(null);
  const [ feature, setFeature ] = useState<FeatureModel|null>(null);

  useEffect(() => {
    (async function () {
      const loaded = await window.api.list_sections();
      setSections(loaded);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const loaded = selectedSection
          ? await window.api.list_entries(selectedSection)
          : [];
      setEntries(loaded);
    })();
  }, [selectedSection]);

  function handleSelectSection(eventKey: string|null) {
    setSelectedSection(eventKey);
  }

  function handleSelectEntry(eventKey: string|null) {
    setSelectedEntry(eventKey);
    if (selectedSection && eventKey) {
      setFeature(null);
      window.api.load_feature(selectedSection, eventKey)
       .then(feature => setFeature(feature))
    }
  }

  if (!sections) {
    return <div>Loading...</div>
  }

  return (
    <div className="app-container">
      <div className="entry-nav">
        <EntryNav entries={sections} onSelect={handleSelectSection} />
      </div>
      {selectedSection && <div className="entry-nav entry-nav-item">
        <EntryNav entries={entries} onSelect={handleSelectEntry} />
      </div>}
      {feature && <div className="entry-view">
        <main>
          <section>
            <FeatureEditor feature={feature} />
          </section>
        </main>
      </div>}
    </div>
  )
}

export default App
