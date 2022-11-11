import React from "react";
import "../styles/CreateTodoButton.css";

const CreateTodoButton = (props) => {
  return (
    <div className="CreateTodoButtonContainer">
      <button className="CreateTodoButton" onClick={props.onComplete}>
        +
      </button>
    </div>
  );
};

export { CreateTodoButton };
