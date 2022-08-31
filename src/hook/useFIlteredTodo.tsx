import { useTodoContext } from "../context/TodoContext";

export default function useFilteredTodo() {
  const state = useTodoContext();
  // console.log(state);
  const { loading, data, error } = state;
  const { todos, filter } = data;

  switch (filter) {
    case "ALL":
      return { loading, todos, error };
    case "DONE":
      return {
        loading,
        todos: todos.filter((todo) => todo.done),
        error,
      };
    case "YET":
      return {
        loading,
        todos: todos.filter((todo) => !todo.done),
        error,
      };
    default:
      return { loading, todos, error };
  }
}
