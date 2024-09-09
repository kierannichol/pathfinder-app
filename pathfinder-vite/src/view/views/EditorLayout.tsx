import {Outlet} from "react-router-dom";
import "./EditorLayout.css";
import "./EditorControls.scss";
import Navigation from "../components/layout/Navigation.tsx";

export default function EditorLayout() {
  return <>
    <Navigation />
    <Outlet />
  </>
}