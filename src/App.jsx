import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar un curos de react", completed: false },
  { text: "Montar en bici unos 100km", completed: false },
  { text: "Conseguir los sub de oro", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter />
      <h2>Haz completado 2 de 3 TODOs</h2>
      <TodoSearch />
      <input placeholder="Cebolla"></input>
      <TodoList>
        {todos.map((e) => (
          <TodoItem key={e.text} text={e.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
      <button>+</button>
    </>
  );
}

export default App;
