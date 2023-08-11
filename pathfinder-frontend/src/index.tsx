import {GoogleOAuthProvider} from "@react-oauth/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createHashRouter, RouterProvider} from "react-router-dom";
import './index.css';
import reportWebVitals from "./reportWebVitals";
import BrowseRoute, {browseLoader} from "./routes/browse";
import CharacterEditRoute, {characterEditLoader} from "./routes/characterEdit";
import CharacterListRoute, {characterListLoader} from "./routes/characterList";
import CharacterSheetV2Route, {characterSheetV2Loader} from "./routes/characterSheetV2";
import {loginLoader, LoginRoute} from "./routes/loginRoute";
import LayoutRoute from "./routes/root";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const routes = [
  {
    path: "/",
    element: <LayoutRoute />,
    children: [
      {
        path: "/",
        element: <CharacterListRoute />,
        loader: characterListLoader
      },
      {
        path: "/login",
        element: <LoginRoute />,
        loader: loginLoader
      },
      {
        path: "character/edit/:id",
        element: <CharacterEditRoute />,
        loader: characterEditLoader
      },
      {
        path: "/browse",
        element: <BrowseRoute />,
        loader: browseLoader
      }
    ]
  },
  {
    path: "character/sheet/:id/:level",
    element: <CharacterSheetV2Route />,
    loader: characterSheetV2Loader
  },
];

const router = createHashRouter(routes);

const clientId = "740015667994-sm7d6frk97un3v09bk2nr5dqakg5pnhc.apps.googleusercontent.com";

root.render(
  <GoogleOAuthProvider clientId={clientId}>
    <RouterProvider router={router}/>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
