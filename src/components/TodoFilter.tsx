import React from "react";
import { Filter } from "../App";

interface FilterProps {
  setFilter: (newFilter: Filter) => void;
}

function TodoFilter(props: FilterProps) {
  const { setFilter } = props;

  return (
    <div>
      <button onClick={() => setFilter(Filter.ALL)}>{Filter.ALL}</button>
      <button onClick={() => setFilter(Filter.DONE)}>{Filter.DONE}</button>
      <button onClick={() => setFilter(Filter.YET)}>{Filter.YET}</button>
    </div>
  );
}

export default React.memo(TodoFilter);
