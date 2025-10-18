import { useEffect, useState } from "react"; 
import { getTodos, addTodo, deleteTodo } from "../api/todoApi";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((res) => setTodos(res.data)).catch(console.error);
  }, []);

  const handleAdd = (task) => {
    addTodo(task).then((res) => setTodos([...todos, res.data]));
  };

  const handleDelete = (id) => {
    deleteTodo(id).then(() => setTodos(todos.filter((t) => t.id !== id)));
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-6">
      <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">
        📝 My To-Do List
      </h1>

      <TodoForm onAdd={handleAdd} />

      <div className="mt-4">
        {todos.length === 0 ? (
          <p className="text-gray-500 text-center mt-4">No tasks yet...</p>
        ) : (
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
