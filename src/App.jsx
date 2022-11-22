import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

// let defaultTodos = [
//   { text: "Platinar el GOW:Ragnarok", completed: false },
//   { text: "Tomar cursos de react", completed: false },
//   { text: "Correr un maraton de 10km", completed: false },
//   { text: "Conseguir los subfusiles de oro", completed: false },
//   { text: "Conseguir los subfusiles de platino", completed: false },
//   { text: "Ir al gym", completed: false },
//   { text: "Correr", completed: false },
// ];

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const todosMatch = todos.filter((todo) =>
    todo.text.toUpperCase().includes(searchValue)
  );

  const totalTodos = todos.length;

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    const strTodos = JSON.stringify(newTodos);
    localStorage.setItem("TODOS_V1", strTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    if (newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = false;
    } else {
      newTodos[todoIndex].completed = true;
    }
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  const addTodo = (text) => {
    const newTodos = [...todos];
    if (searchValue) {
      newTodos.push({ text: text, completed: false });
    }
    setTodos(newTodos);
    setSearchValue("");
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch setSearchValue={setSearchValue} searchValue={searchValue} />
      <TodoList>
        {todosMatch.map((e) => (
          <TodoItem
            onComplete={() => {
              completeTodo(e.text);
            }}
            onDelete={() => {
              deleteTodo(e.text);
            }}
            completed={e.completed}
            key={e.text}
            text={e.text.toUpperCase()}
          />
        ))}
      </TodoList>
      <CreateTodoButton
        onComplete={() => {
          addTodo(searchValue);
        }}
      />
    </>
  );
}

export default App;
