import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import { useTodos } from "../hooks/useTodos";

function Home() {
  const { todos, handleAdd, handleDelete, handleToggle } = useTodos();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-indigo-300 to-indigo-400">
      <div className="w-full max-w-md mx-auto bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-4">
          📝 My To-Do List
        </h1>

        <TodoForm onAdd={handleAdd} />

        <div className="mt-4">
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center mt-4">
              No tasks yet...
            </p>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={handleDelete}
                onToggle={handleToggle}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
