import {Navigate} from "react-router-dom";
import {firebaseLogout} from "./firebase";

export class User {
  constructor(public readonly id: string) {
  }
}

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
      .then(() => localStorage.removeItem('google-token'));
}

export function getActiveUser() {
  const token = getGoogleToken();
  return token ? new User(token) : undefined;
}

export function useActiveUser() {
  return getActiveUser();
}
