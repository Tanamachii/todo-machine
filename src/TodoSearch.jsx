import React from "react";
import "./TodoSearch.css";

const TodoSearch = ({ searchValue, setSearchValue }) => {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value.toUpperCase());
  };
  return (
    <div className="TodoSeatchContainer">
      <input
        className="TodoSearch animacion-input"
        placeholder="Inserte tarea o busque una tarea"
        type="text"
        value={searchValue}
        onChange={onSearchValueChange}
      ></input>
    </div>
  );
};

export { TodoSearch };
