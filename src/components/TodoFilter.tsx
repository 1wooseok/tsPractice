import React from "react";
import { useTodoDispatch } from "../context/TodoContext";
import { Filter } from "../types/TodoType";
import { Button, Box, Stack } from "@mui/material";

function TodoFilter() {
  const dispatch = useTodoDispatch();

  const handleFilter = (filter: Filter) => {
    dispatch({ type: "SET_FILTER", payload: filter });
  };

  return (
    <Box sx={{ margin: "auto" }}>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button onClick={() => handleFilter(Filter.ALL)}>{Filter.ALL}</Button>
        <Button onClick={() => handleFilter(Filter.DONE)}>{Filter.DONE}</Button>
        <Button onClick={() => handleFilter(Filter.YET)}>{Filter.YET}</Button>
      </Stack>
    </Box>
  );
}

export default React.memo(TodoFilter);
