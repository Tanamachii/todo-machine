import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import useLocalStorage from "./hooks/useLocalStorage.jsx";

function App() {
  const [todos, saveTodos, setTodos] = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const todosMatch = todos.filter((todo) =>
    todo.text.toUpperCase().includes(searchValue)
  );

  const totalTodos = todos.length;

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
    saveTodos(newTodos);
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
