import React from 'react'
import ReactDOM from 'react-dom/client'
import {createHashRouter, RouterProvider,} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import EditorLayoutRoute from "./view/routes/EditorLayoutRoute.tsx";
import CharacterListRoute, {characterListLoader} from "./view/routes/CharacterListRoute.tsx";
import CharacterEditRoute, {characterEditLoader} from "./view/routes/CharacterEditRoute.tsx";
import {loginLoader, LoginRoute} from "./view/routes/LoginRoute.tsx";
import CharacterSheetRoute, {characterSheetLoader} from "./view/routes/CharacterSheetRoute.tsx";
import EquipmentSetListRoute, {equipmentSetListLoader} from "./view/routes/EquipmentSetListRoute.tsx";
import EquipmentSetEditRoute, {equipmentSetEditLoader} from "./view/routes/EquipmentSetEditRoute.tsx";

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
        path: "login",
        element: <LoginRoute />,
        loader: loginLoader
      },
      {
        path: "character/edit/:id",
        element: <CharacterEditRoute />,
        loader: characterEditLoader
      },
      {
        path: "equipment",
        element: <EquipmentSetListRoute />,
        loader: equipmentSetListLoader
      },
      {
        path: "equipment/edit/:id",
        element: <EquipmentSetEditRoute />,
        loader: equipmentSetEditLoader
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
  </React.StrictMode>
)
