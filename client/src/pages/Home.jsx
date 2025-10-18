import React, { useEffect, useState } from "react";
import { getTodos, addTodo, deleteTodo } from "../api/api";
import TodoItem from "../components/TodoItem";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    getTodos().then(res => setTodos(res.data));
  }, []);

  const handleAdd = () => {
    if (!task.trim()) return;
    addTodo(task).then(res => {
      setTodos([...todos, res.data]);
      setTask("");
    });
  };

  const handleDelete = (id) => {
    deleteTodo(id).then(() => setTodos(todos.filter(t => t.id !== id)));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
