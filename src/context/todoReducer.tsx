import { Todo, Filter, TodoStateInterface } from "../types/TodoType";

export const initialState: TodoStateInterface = {
  todos: [],
  filter: Filter.ALL,
};

type ACTIONS =
  | { type: "ADD_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "UPDATE_TODO"; payload: { id: number; text: string } }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "SET_FILTER"; payload: Filter };

export function TodoReducer(
  state: typeof initialState,
  action: ACTIONS
): TodoStateInterface {
  switch (action.type) {
    case "ADD_TODO":
      const todoItem: Todo = {
        id: createId(),
        text: action.payload,
        done: false,
        date: new Date().toDateString(),
      };
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
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

let cnt = 0;
function createId() {
  return ++cnt;
}
