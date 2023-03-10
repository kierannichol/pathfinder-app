import {Navigate} from "react-router-dom";
import {firebaseLogout} from "./firebase";

export class User {
  constructor(public readonly id: string) {
  }
}

let activeUser: User|undefined;

export function RequiresAuth({ children }: any) {
  const hasToken = getGoogleToken() !== undefined;
  if (!hasToken) {
    return <Navigate to={"/login"}/>
  }
  return children;
}

export function setGoogleToken(token: string|undefined) {
  if (token === undefined) {
    localStorage.removeItem('google-token');
    return;
  }
  localStorage.setItem('google-token', token);
}

function getGoogleToken(): string|undefined {
  return localStorage.getItem('google-token') ?? undefined;
}

export function logout() {
  firebaseLogout()
      .then(() => localStorage.removeItem('google-token'))
      .then(() => activeUser = undefined);
}

export function getActiveUser() {
  if (activeUser) {
    return activeUser;
  }
  const token = getGoogleToken();
  activeUser = token ? new User(token) : undefined;
  return activeUser;
}

export function useActiveUser() {
  return getActiveUser();
}
