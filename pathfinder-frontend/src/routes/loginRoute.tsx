import {firebaseAuthResult} from "../app/firebase";
import LoginPage from "../views/LoginPage";

export async function loginLoader() {
  await firebaseAuthResult();
  return null;
}

export function LoginRoute() {
  return <LoginPage />
}