function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div
      className={`flex justify-between items-center p-3 mb-2 rounded-lg shadow-md transition-transform duration-200 hover:scale-[1.02] ${
        todo.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      {/* ✅ Check button */}
      <button
        onClick={() => onToggle(todo.id)}
        className={`mr-3 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
          todo.completed
            ? "bg-green-500 border-green-500 text-white animate-pop"
            : "border-gray-400 text-transparent"
        }`}
      >
        ✓
      </button>

      {/* 📝 Task text */}
      <span
        onClick={() => onToggle(todo.id)}
        className={`flex-1 select-none cursor-pointer text-gray-800 ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.task}
      </span>

      {/* ❌ Delete button */}
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 font-semibold ml-3"
      >
        ✕
      </button>
    </div>
  );
}

export default TodoItem;
