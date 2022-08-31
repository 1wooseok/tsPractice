import { removeTodoFromFirestore, toggleTodoFromFirestore } from "../FIREBASE";
import useAsyncDispatch from "../hook/useAsync";
import { Todo } from "../types/TodoType";
import { Button } from "@mui/material";
import "../styles/todoStyle.css";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const asyncDispatch = useAsyncDispatch();

  const removeTodo = () => {
    asyncDispatch({
      type: "REMOVE_TODO",
      payload: () => removeTodoFromFirestore(todo.id),
    });
  };

  const toggleTodo = () => {
    asyncDispatch({
      type: "TOGGLE_TODO",
      payload: () => toggleTodoFromFirestore(todo.id, todo.done),
    });
  };

  return (
    <li className={todo.done ? "done" : ""}>
      <input type="checkbox" checked={todo.done} onChange={toggleTodo} />
      <span>{todo.text}</span>
      <span>( {todo.date} )</span>
      <Button
        sx={{
          border: "1px solid black",
          marginLeft: "10px",
        }}
        onClick={removeTodo}
      >
        DEL
      </Button>
    </li>
  );
}

export default TodoItem;
