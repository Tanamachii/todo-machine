import React from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  return (
    <li className="TodoItem">
      <span
        className={`TodoItem_completed ${
          props.completed && "Icon-check--active"
        }`}
        onClick={props.onComplete}
      >
        ✔
      </span>
      <p className={`${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="TodoItem_delete" onClick={props.onDelete}>
        X
      </span>
    </li>
  );
};

export { TodoItem };
