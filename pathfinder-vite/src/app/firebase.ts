// Import the functions you need from the SDKs you need
import {signInWithPopup} from "@firebase/auth";
import {FirebaseError, initializeApp} from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import {get, getDatabase, ref, remove, set} from 'firebase/database';
import {timedAsync} from "./pfutils";
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

const db = getDatabase(app);
const auth = getAuth(app);
auth.onAuthStateChanged(user => {
  setGoogleToken(user?.uid);
})

const googleAuthProvider = new GoogleAuthProvider();

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
  return auth.currentUser ? new User(auth.currentUser.uid, () => firebaseLogout()) : undefined;
}

export async function firebaseLoginWithGoogle(): Promise<void> {
  const result = await signInWithPopup(auth, googleAuthProvider);
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

  loadAll: async <T>(userId: string, type: string): Promise<T[]|undefined> => {
    console.log("Loading all from Firebase");
    const snapshot = await get(ref(db, `u/${userId}/${type}`));
    if (!snapshot.exists()) {
      return undefined;
    }

    const data: {[id:string]: T} = snapshot.val();
    return Object.values(data);
  },

  load: async <T>(userId: string, type: string, id: string): Promise<T|undefined> => {
    console.log("Loading from Firebase");
    const snapshot = await get(ref(db, `u/${userId}/${type}/${id}`));
    if (!snapshot.exists()) {
      return undefined;
    }

    return snapshot.val();
  },

  save: async <T>(userId: string, type: string, id: string, data: T): Promise<void> => {
    // console.log("Saving to Firebase");
    return timedAsync(() => set(ref(db, `u/${userId}/${type}/${id}`), data), "Saved to Firebase");
  },

  delete: async (userId: string, type: string, id: string): Promise<void> => {
    return remove(ref(db, `u/${userId}/${type}/${id}`));
  }
}