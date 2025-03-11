import React from 'react'
import ReactDOM from 'react-dom/client'
import {createHashRouter, RouterProvider,} from 'react-router-dom';
import "normalize.css";
import './index.css';
import CharacterListRoute from "./view/character/list/CharacterListRoute.tsx";
import EditorLayoutRoute from "./view/layout/EditorLayoutRoute.tsx";
import {LoginRoute} from "@/view/login/LoginRoute.tsx";
import CharacterEditRoute from "@/view/character/edit/CharacterEditRoute.tsx";
import characterEditLoader from "@/view/character/edit/characterEditLoader.tsx";
import {loginLoader} from "@/view/login/loginLoader.ts";
import {characterListLoader} from "@/view/character/list/characterListLoader.ts";
import TestRoute from "@/view/test/TestRoute.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <EditorLayoutRoute />,
    children: [
      {
        index: true,
        element: <CharacterListRoute />,
        loader: characterListLoader
      },
      {
        path: "character/edit/:id",
        element: <CharacterEditRoute />,
        loader: characterEditLoader
      },
      {
        path: "login",
        element: <LoginRoute />,
        loader: loginLoader
      },
      {
        path: "test",
        element: <TestRoute />,
      }
      ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
      <RouterProvider router={router} />
    // </React.StrictMode>
)
