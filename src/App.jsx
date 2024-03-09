import React, { useEffect, useRef, useState } from "react";
import Todo from "./Todo";
import todoListData from "./todos.json";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const todoFormRef = useRef();

  useEffect(() => {
    setTodoList(todoListData);
  }, []);

  const handleSearchTodo = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const name = todoFormRef.current.value;
    if (!name.trim().length) return;
    const newTodo = {
      id: todoList[todoList.length - 1].id + 1,
      name,
      completed: false,
    };
    setTodoList((todoList) => [...todoList, newTodo]);
    todoFormRef.current.value = "";
    todoFormRef.current.focus();
  };

  const getTodoList = (list) => (
    <ul>
      {list.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} setTodoList={setTodoList} />
        </li>
      ))}
      {list.length === 0 && <li>No Todo available</li>}
    </ul>
  );

  return (
    <main>
      <header>Todo App</header>
      <div className="actions">
        <input type="text" placeholder="Search..." onChange={handleSearchTodo} />
        <form onSubmit={handleFormSubmit}>
          <input id="name" type="text" placeholder="Enter Todo..." ref={todoFormRef} />
          <button>Add Todo</button>
        </form>
      </div>
      {searchTerm ? getTodoList(todoList.filter((todo) => todo.name.includes(searchTerm))) : getTodoList(todoList)}
    </main>
  );
}

export default App;
