// 로딩처리 하기
import { Todo, Filter, TodoStateInterface } from "../types/TodoType";

export const initialState: TodoStateInterface = {
  todos: [],
  filter: Filter.ALL,
};

type ACTIONS =
  | { type: "LOADING" }
  | { type: "ERROR"; payload: any }
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "DELETE_TODO"; payload: string }
  | { type: "UPDATE_TODO"; payload: { id: string; text: string } }
  | { type: "TOGGLE_TODO"; payload: string }
  | { type: "SET_FILTER"; payload: Filter };

export function TodoReducer(
  state: typeof initialState,
  action: ACTIONS
): TodoStateInterface {
  switch (action.type) {
    case "LOADING":
      return {
        todos: null,
        filter: null,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
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
