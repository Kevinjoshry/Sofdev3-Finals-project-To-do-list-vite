import { useState, useEffect } from "react";
import { getTodos, addTodo, deleteTodo, updateTodo } from "../api/todoApi";

// ✅ Custom hook to manage all To-Do logic
export function useTodos() {
  const [todos, setTodos] = useState([]);

  // Fetch todos on mount
  useEffect(() => {
    getTodos().then((res) => setTodos(res.data)).catch(console.error);
  }, []);

  // Add a new todo
  const handleAdd = (task) => {
    addTodo(task).then((res) => setTodos((prev) => [...prev, res.data]));
  };

  // Delete a todo
  const handleDelete = (id) => {
    deleteTodo(id).then(() => setTodos((prev) => prev.filter((t) => t.id !== id)));
  };

  // Toggle completion
  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return {
    todos,
    handleAdd,
    handleDelete,
    handleToggle,
  };
}
