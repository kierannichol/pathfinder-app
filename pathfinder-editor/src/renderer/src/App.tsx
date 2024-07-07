import {useEffect, useState} from "react";
import EntryNav from "./components/EntryNav";
import "./App.css";
import FeatureEditor from "./components/editors/FeatureEditor";
import MultipleFeaturesEditor from "./components/editors/MultipleFeaturesEditor";
import {FeatureKey, FeatureRef} from "../../shared/pathfinder";


function App() {
  const [ segmentKeys, setSegmentKeys ] = useState<string[]>([]);
  const [ featureKeys, setFeatureKeys ] = useState<FeatureKey[]>([]);
  const [ selectedSegmentKeys, setSelectedSegmentKeys ] = useState<string[]>([]);
  const [ selectedFeatureKey, setSelectedFeatureKey ] = useState<FeatureKey|FeatureKey[]|null>(null);
  const [ feature, setFeature ] = useState<FeatureRef|FeatureRef[]|null>(null);

  useEffect(() => {
    (async function () {
      const loaded = await window.api.list_segments();
      setSegmentKeys(loaded);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const loaded = (await Promise.all(selectedSegmentKeys.map(window.api.list_features))).flat();
      console.log(loaded)
      setFeatureKeys(loaded);
    })();
  }, [selectedSegmentKeys]);

  function handleSelectSegmentKey(eventKey: string|string[]|null) {
    if (!eventKey) {
      eventKey = [];
    }
    if (!(eventKey instanceof Array)) {
      eventKey = [eventKey];
    }
    setSelectedSegmentKeys(eventKey);
  }

  function handleSelectFeatureKey(eventKey: FeatureKey|FeatureKey[]|null) {
    setSelectedFeatureKey(eventKey);
    if (selectedSegmentKeys && eventKey) {
      setFeature(null);

      if (eventKey instanceof Array) {
        Promise.all(eventKey.map(key => window.api.load_feature(key)))
          .then(features => setFeature(features));
      } else {
        window.api.load_feature(eventKey)
          .then(feature => setFeature(feature))
      }
    }
  }

  function handleChange(feature: FeatureRef) {
      window.api.save_feature(feature);
  }

  function handleSaveMultiple(features: FeatureRef[]) {

  }

  if (!segmentKeys) {
    return <div>Loading...</div>
  }

  return (
    <div className="app-container">
      <div className="entry-nav">
        <EntryNav entries={segmentKeys}
                  onSelect={handleSelectSegmentKey}
                  keyToLabelFn={x => x} />
      </div>
      {selectedSegmentKeys.length > 0 && <div className="entry-nav entry-nav-item">
        <EntryNav entries={featureKeys.map(featureKeyToString)}
                  onSelect={selected => handleSelectFeatureKey(stringToFeatureKey(selected))}
                  keyToLabelFn={key => key.split('/')[1]} />
      </div>}
      {feature && <div className="entry-view">
        <main>
          {feature instanceof Array && selectedFeatureKey !== null
              ? <MultipleFeaturesEditor features={feature} onSave={fs => handleSaveMultiple(fs as FeatureRef[])} />
              : <FeatureEditor feature={feature as FeatureRef} onSave={f => handleChange(f as FeatureRef)} />}
        </main>
      </div>}
    </div>
  )
}

function featureKeyToString(key: FeatureKey): string {
  return key.segmentKey + "/" + key.featureKey;
}

function stringToFeatureKey(key: string|string[]|null): FeatureKey|FeatureKey[]|null {
  if (!key) {
    return null;
  }

  if (key instanceof Array) {
    return (key.map(stringToFeatureKey) as FeatureKey[]);
  }

  const parts = key.split('/');
  return {
    segmentKey: parts[0],
    featureKey: parts[1]
  };
}

export default App
