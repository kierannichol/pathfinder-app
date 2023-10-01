import {useEffect, useState} from "react";
import EntryNav from "./components/EntryNav";
import "./App.css";
import FeatureEditor from "./components/editors/FeatureEditor";
import {data} from "../../preload/compiled";
import FeatureDbo = data.FeatureDbo;

function App() {
  const [ sourceKeys, setSourceKeys ] = useState<string[]>([]);
  const [ featureKeys, setFeatureKeys ] = useState<string[]>([]);
  const [ selectedSourceKey, setSelectedSourceKey ] = useState<string|null>(null);
  const [ selectedFeatureKey, setSelectedFeatureKey ] = useState<string|null>(null);
  const [ feature, setFeature ] = useState<FeatureDbo|null>(null);

  useEffect(() => {
    (async function () {
      const loaded = await window.api.list_sources();
      setSourceKeys(loaded);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const loaded = selectedSourceKey
          ? await window.api.list_features(selectedSourceKey)
          : [];
      setFeatureKeys(loaded);
    })();
  }, [selectedSourceKey]);

  function handleSelectSourceKey(eventKey: string|null) {
    setSelectedSourceKey(eventKey);
  }

  function handleSelectFeatureKey(eventKey: string|null) {
    setSelectedFeatureKey(eventKey);
    if (selectedSourceKey && eventKey) {
      setFeature(null);
      window.api.load_feature(selectedSourceKey, eventKey)
       .then(feature => setFeature(feature))
    }
  }

  function handleChange(feature: FeatureDbo) {
    if (selectedSourceKey && selectedFeatureKey) {
      window.api.save_feature(selectedSourceKey, selectedFeatureKey, feature);
    }
  }

  if (!sourceKeys) {
    return <div>Loading...</div>
  }

  return (
    <div className="app-container">
      <div className="entry-nav">
        <EntryNav entries={sourceKeys} onSelect={handleSelectSourceKey} />
      </div>
      {selectedSourceKey && <div className="entry-nav entry-nav-item">
        <EntryNav entries={featureKeys} onSelect={handleSelectFeatureKey} />
      </div>}
      {feature && <div className="entry-view">
        <main>
          <section>
            <FeatureEditor feature={feature} onChange={handleChange} />
          </section>
        </main>
      </div>}
    </div>
  )
}

export default App
