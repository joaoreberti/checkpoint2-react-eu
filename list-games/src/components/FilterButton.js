import React from "react";

function FilterButton({ setFilterToggle, isFilterOn }) {
  return (
    <button className="button" onClick={() => setFilterToggle(!isFilterOn)}>
      {isFilterOn  ? "All Games" : "Best Games"}
    </button>
  );
}

export default FilterButton;