import React from "react";
import { useTodoDispatch } from "../context/TodoContext";
import { Filter } from "../types/TodoType";
import { Button } from "@mui/material";

function TodoFilter() {
  const dispatch = useTodoDispatch();

  const handleFilter = (filter: Filter) => {
    dispatch({ type: "SET_FILTER", payload: filter });
  };

  return (
    <div>
      <Button onClick={() => handleFilter(Filter.ALL)}>{Filter.ALL}</Button>
      <Button onClick={() => handleFilter(Filter.DONE)}>{Filter.DONE}</Button>
      <Button onClick={() => handleFilter(Filter.YET)}>{Filter.YET}</Button>
    </div>
  );
}

export default React.memo(TodoFilter);
