import React from "react";
import { useTodoDispatch } from "../context/TodoContext";
import { Filter } from "../types/TodoType";

function TodoFilter() {
  const dispatch = useTodoDispatch();

  const handleFilter = (filter: Filter) => {
    dispatch({ type: "SET_FITER", payload: filter });
  };

  return (
    <div>
      <button onClick={() => handleFilter(Filter.ALL)}>{Filter.ALL}</button>
      <button onClick={() => handleFilter(Filter.DONE)}>{Filter.DONE}</button>
      <button onClick={() => handleFilter(Filter.YET)}>{Filter.YET}</button>
    </div>
  );
}

export default React.memo(TodoFilter);
