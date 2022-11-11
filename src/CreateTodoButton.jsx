import React from "react";
import "./CreateTodoButton.css";

const CreateTodoButton = () => {
  const onClickButton = () => {
    alert("Aqui se abrira un modal");
  };

  return (
    <div className="CreateTodoButtonContainer">
      <button className="CreateTodoButton" onClick={onClickButton}>
        +
      </button>
    </div>
  );
};

export { CreateTodoButton };
