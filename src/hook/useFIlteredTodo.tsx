import { useTodoContext } from "../context/TodoContext";
import { Filter } from "../types/TodoType";

export default function useFilteredTodo() {
  const state = useTodoContext();
  // hack
  if (!state)
    return {
      loading: false,
      data: { todos: [], filter: Filter.ALL },
      error: null,
    };

  const { loading, data, error } = state;
  const { todos, filter } = data;

  switch (filter) {
    case "ALL":
      return { loading, todos, error };
    case "DONE":
      return { loading, todos: todos.filter((todo) => todo.done), error };
    case "YET":
      return { loading, todos: todos.filter((todo) => !todo.done), error };
    default:
      return { loading, todos, error };
  }
}
