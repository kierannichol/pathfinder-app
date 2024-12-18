import {Navigate} from "react-router-dom";
import {firebaseLogout} from "./firebase";
import {ReactNode} from "react";

export class User {
  constructor(public readonly id: string,
              public readonly logout: () => Promise<void>) {
  }
}

let activeUser: User|undefined;

export function RequiresAuth({ children }: { children: ReactNode }) {
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

async function logout(): Promise<void> {
  await firebaseLogout();
  localStorage.removeItem('google-token');
  activeUser = undefined;
}

export function getActiveUser() {
  if (activeUser) {
    return activeUser;
  }
  const token = getGoogleToken();
  activeUser = token ? new User(token, logout) : undefined;
  return activeUser;
}

export function useActiveUser() {
  return getActiveUser();
}
