import { Todo, Filter } from "./TodoContext";

export interface TodoListInterface {
  todos: Todo[];
  filter: Filter;
}

export const initialState: TodoListInterface = {
  todos: [],
};

type ACTIONTYPE =
  | { type: "ADD_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "UPDATE_TODO"; payload: { id: number; text: string } };

export function TodoReducer(state: typeof initialState, action: ACTIONTYPE) {
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
    default:
      return state;
  }
}

let cnt = 0;
function createId() {
  return ++cnt;
}
