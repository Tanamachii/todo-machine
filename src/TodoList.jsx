import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <section>
      <ul className="TodoList">{props.children}</ul>
    </section>
  );
};

export { TodoList };
