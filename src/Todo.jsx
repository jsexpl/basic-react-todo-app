function Todo({ todo, setTodoList }) {
  const handleComplete = () => {
    setTodoList((todoList) => todoList.map((t) => (t.id === todo.id ? { ...t, completed: true } : t)));
  };

  const handleDelete = () => {
    setTodoList((todoList) => todoList.filter((t) => t.id !== todo.id));
  };

  return (
    <div className="todo">
      <div className={todo.completed ? "complete" : "incomplete"}>{todo.name}</div>
      {!todo.completed && <button onClick={handleComplete}>Complete</button>}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Todo;
