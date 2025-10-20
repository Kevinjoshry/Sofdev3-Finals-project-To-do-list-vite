import { useEffect, useState } from "react";
import { getTodos, addTodo, deleteTodo, updateTodo } from "../api/todoApi";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import Confetti from "react-confetti";

function Home() {
  const [todos, setTodos] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [miniConfetti, setMiniConfetti] = useState(false);

  useEffect(() => {
    getTodos().then((res) => setTodos(res.data)).catch(console.error);
  }, []);

  const handleAdd = (task) => {
    addTodo(task).then((res) => setTodos([...todos, res.data]));
  };

  const handleDelete = (id) => {
    deleteTodo(id).then(() => setTodos(todos.filter((t) => t.id !== id)));
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTodos(updatedTodos);

    const toggledTodo = updatedTodos.find((t) => t.id === id);
    updateTodo(id, { completed: toggledTodo.completed });

    // ✨ Mini confetti when marking a single task as done
    if (toggledTodo.completed) {
      setMiniConfetti(true);
      setTimeout(() => setMiniConfetti(false), 1200);
    }

    // 🎉 Full confetti if ALL tasks are complete
    if (updatedTodos.length > 0 && updatedTodos.every((t) => t.completed)) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-200 p-4 relative overflow-hidden">
      {showConfetti && <Confetti recycle={false} numberOfPieces={300} />}
      {miniConfetti && <Confetti recycle={false} numberOfPieces={80} gravity={1.2} />}

      <div className="w-full max-w-md bg-white/60 backdrop-blur-lg shadow-2xl rounded-2xl p-6 border border-white/40">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          📝 My To-Do List
        </h1>

        <TodoForm onAdd={handleAdd} />

        <div className="mt-4">
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center mt-4">No tasks yet...</p>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={handleDelete}
                onToggleComplete={handleToggleComplete}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
