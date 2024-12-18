import {firebaseAuthResult} from "@/app/firebase.ts";

export async function loginLoader() {
  await firebaseAuthResult();
  return null;
}