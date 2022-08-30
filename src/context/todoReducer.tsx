import { Todo, Filter, TodoStateInterface } from "../types/TodoType";
import { db } from "../FIREBASE";
import { addDoc, collection } from "firebase/firestore";

export const initialState: TodoStateInterface = {
  todos: [],
  filter: Filter.ALL,
};

type ACTIONS =
  | { type: "ADD_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: string }
  | { type: "UPDATE_TODO"; payload: { id: string; text: string } }
  | { type: "TOGGLE_TODO"; payload: string }
  | { type: "SET_FILTER"; payload: Filter };

export async function TodoReducer(
  state: typeof initialState,
  action: ACTIONS
): Promise<TodoStateInterface> {
  switch (action.type) {
    case "ADD_TODO":
      let test = false;
      const docRef = await addDoc(collection(db, "todoItem"), {
        todoItemContent: {
          text: action.payload,
          done: false,
          date: new Date().toDateString(),
        },
        isFinished: false,
      });

      const todoItem: Todo = {
        id: docRef.id,
        text: action.payload,
        done: false,
        date: new Date().toDateString(),
      };

      console.log({ todoItem });
      return {
        ...state,
        todos: [...state.todos, todoItem],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
      };
    case "SET_FILTER":
      console.log("before Filter Change");
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}
