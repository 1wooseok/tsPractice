import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { Todo } from "./types/TodoType";

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

export const getTodosFromFirestore = async (): Promise<any> => {
  const firestoreTodoItemList: Todo[] = [];
  const querySnapshot = await getDocs(collection(db, "todoItem"));
  querySnapshot.forEach((doc) => {
    firestoreTodoItemList.push({
      id: doc.id,
      text: doc.data().text,
      date: doc.data().date,
      done: doc.data().done,
    });
  });
  return firestoreTodoItemList;
};

export const addTodoFromFireStore = async (input: string): Promise<Todo> => {
  const docRef = await addDoc(collection(db, "todoItem"), {
    text: input,
    date: new Date().toDateString(),
    done: false,
  });

  return {
    id: docRef.id,
    text: input,
    done: false,
    date: new Date().toDateString(),
  };
};

export const removeTodoFromFirestore = async (id: string): Promise<any> => {
  const todoItemRef = doc(db, "todoItem", id);
  await deleteDoc(todoItemRef);

  return id;
};

export const toggleTodoFromFirestore = async (id: string, done: boolean) => {
  const todoItemRef = doc(db, "todoItem", id);
  await setDoc(todoItemRef, { done: !done }, { merge: true });

  return id;
};
