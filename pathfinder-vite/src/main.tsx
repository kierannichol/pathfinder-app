import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import EditorLayoutRoute from "./view/routes/EditorLayoutRoute.tsx";
import CharacterListRoute, {characterListLoader} from "./view/routes/CharacterListRoute.tsx";
import CharacterEditRoute, {characterEditLoader} from "./view/routes/CharacterEditRoute.tsx";
import {loginLoader, LoginRoute} from "./view/routes/LoginRoute.tsx";
import CharacterSheetRoute, {characterSheetLoader} from "./view/routes/CharacterSheetRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EditorLayoutRoute />,
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
        path: "/character/edit/:id",
        element: <CharacterEditRoute />,
        loader: characterEditLoader
      }
    ]
  },
  {
    path: "character/sheet/:id/:level",
    element: <CharacterSheetRoute />,
    loader: characterSheetLoader
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
