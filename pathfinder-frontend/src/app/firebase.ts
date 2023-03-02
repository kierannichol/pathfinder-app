// Import the functions you need from the SDKs you need
import {getAnalytics} from "firebase/analytics";
import {FirebaseError, initializeApp} from "firebase/app";
import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut
} from "firebase/auth";
import {get, getDatabase, ref, remove, set} from 'firebase/database';
import PackedCharacter from "../core/PackedCharacter";
import {timedAsync} from "../util/pfutils";
import {setGoogleToken, User} from "./auth"; // TODO: Add SDKs for Firebase products that you want to use
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const databaseUrl = "https://pathfinder-app-a4ed5-default-rtdb.firebaseio.com/";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGhIl4CO_-MdEsti5mey_n81kKLOVhEjo",
  authDomain: "pathfinder-app-a4ed5.firebaseapp.com",
  projectId: "pathfinder-app-a4ed5",
  storageBucket: "pathfinder-app-a4ed5.appspot.com",
  messagingSenderId: "716168429331",
  appId: "1:716168429331:web:6ebc44bc9dab5a0969a4e6",
  measurementId: "G-N21ZJVKPQN",
  databaseUrl: databaseUrl
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase(app);
const auth = getAuth(app);
auth.onAuthStateChanged(user => {
  setGoogleToken(user?.uid);
})

const googleAuthProvider = new GoogleAuthProvider();
const emailAuthProvider = new EmailAuthProvider();

export async function firebaseLoginWithEmail(email: string, password: string) {
  let result = undefined;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    if (e instanceof FirebaseError) {
      if (e.code === 'auth/user-not-found') {
        console.error("User not found");
        result = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        throw e;
      }
    }
  }

  if (result) {
    setGoogleToken(result.user.uid);
  }
}

export function firebaseResetPassword(email: string): Promise<void> {
  return sendPasswordResetEmail(auth, email);
}

export function firebaseUser(): User|undefined {
  return auth.currentUser ? new User(auth.currentUser.uid) : undefined;
}

export async function firebaseLoginWithGoogle(): Promise<void> {
  const result = await signInWithRedirect(auth, googleAuthProvider);
  const credential = GoogleAuthProvider.credentialFromResult(result);
  setGoogleToken(credential?.idToken);
}

export async function firebaseAuthResult(): Promise<void> {
  const result = await getRedirectResult(auth);

  if (result) {
    setGoogleToken(result.user.uid);
  }
}

export async function firebaseLogout(): Promise<void> {
  await signOut(auth);
  setGoogleToken(undefined);
}

export const FirebaseRepository = {

  loadAll: async (userId: string): Promise<PackedCharacter[]|undefined> => {
    console.log("Loading all from Firebase");
    const snapshot = await get(ref(db, "u/" + userId + "/character"));
    if (!snapshot.exists()) {
      return undefined;
    }

    const data: {[id:string]: PackedCharacter} = snapshot.val();
    return Object.values(data);
  },

  load: async (userId: string, characterId: string): Promise<PackedCharacter|undefined> => {
    console.log("Loading character from Firebase");
    const snapshot = await get(ref(db, "u/" + userId + "/character/" + characterId));
    if (!snapshot.exists()) {
      return undefined;
    }

    return snapshot.val();
  },

  save: async (userId: string, character: PackedCharacter): Promise<void> => {
    // console.log("Saving to Firebase");
    return timedAsync(() => set(ref(db, "u/" + userId + "/character/" + character.id), character), "Saving to Firebase");
  },

  delete: async (userId: string, characterId: string): Promise<void> => {
    return remove(ref(db, "u/" + userId + "/character/" + characterId));
  }
}