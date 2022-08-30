import { useTodoContext } from "../context/TodoContext";

export default function useFilteredTodo() {
  const { todos, filter } = useTodoContext();

  switch (filter) {
    case "ALL":
      return todos;
    case "DONE":
      return todos.filter((todo) => todo.done);
    case "YET":
      return todos.filter((todo) => !todo.done);
    default:
      return todos;
  }
}
