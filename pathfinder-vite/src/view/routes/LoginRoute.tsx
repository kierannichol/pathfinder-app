import {firebaseAuthResult} from "@/app/firebase.ts";
import Login from "../views/Login.tsx";

export async function loginLoader() {
  await firebaseAuthResult();
  return null;
}

export function LoginRoute() {
  return <Login />
}