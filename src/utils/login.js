import { GoogleAuthProvider, getAuth, signInWithRedirect, onAuthStateChanged, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();

export function useLogin() {
  signInWithRedirect(auth, provider);
}

export function useLogout() {
  signOut(auth);
}

export function useAuthChanged(setter) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setter(user.uid);
    } else {
      setter(null);
    }
  });
}