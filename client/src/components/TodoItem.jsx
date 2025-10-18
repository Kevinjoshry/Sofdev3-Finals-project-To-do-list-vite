function TodoItem({ todo, onDelete, onToggleDone }) {
  return (
    <div
      className={`flex justify-between items-center bg-white shadow-md rounded-lg p-3 mb-2 transition-all hover:scale-[1.02] ${
        todo.completed ? "opacity-70" : ""
      }`}
    >
      <span
        className={`text-gray-800 flex-1 ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.task}
      </span>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onToggleDone(todo.id)}
          className={`px-2 py-1 rounded-lg text-sm font-medium transition-colors ${
            todo.completed
              ? "bg-green-100 text-green-600"
              : "bg-gray-100 text-gray-700 hover:bg-green-200"
          }`}
        >
          {todo.completed ? "✅" : "✔️"}
        </button>

        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-500 hover:text-red-700 font-semibold"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
