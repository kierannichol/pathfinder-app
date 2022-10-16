import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import CharacterEditView from "./views/CharacterEditView";
import {Provider} from "react-redux";
import store from './app/store'
import CharacterListView from "./views/CharacterListView";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path="/" element={<CharacterListView />} />
            <Route path="character/edit/:id" element={<CharacterEditPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
);

function CharacterEditPage() {
  let { id } = useParams();
  if (id === undefined) {
    throw Error("No character ID specified");
  }
  return <CharacterEditView characterId={id} />
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
