import {Outlet} from "react-router-dom";
import "./EditorLayout.css";
import Navigation from "./Navigation.tsx";

export default function EditorLayout() {
  return <>
    <Navigation />
    <Outlet />
  </>
}