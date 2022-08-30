import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCziQCt-OLre7VuX1Tug84yp3pkDyNiYLQ",
  authDomain: "todo-ts-a70c1.firebaseapp.com",
  projectId: "todo-ts-a70c1",
  storageBucket: "todo-ts-a70c1.appspot.com",
  messagingSenderId: "528265436092",
  appId: "1:528265436092:web:d8779ecda0250f748829b9",
  measurementId: "G-BPJRRGE4RC",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
