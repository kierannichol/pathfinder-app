import {Outlet} from "react-router-dom";
import "./EditorLayout.scss";
import "./EditorControls.scss";
import Navigation from "../components/layout/Navigation.tsx";

export default function EditorLayout() {
  return <>
    <Navigation />
    <Outlet />
  </>
}