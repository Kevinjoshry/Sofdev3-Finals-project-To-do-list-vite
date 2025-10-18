function TodoItem({ todo, onDelete }) {
  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-3 mb-2 transition-transform hover:scale-[1.02]">
      <span className="text-gray-800">{todo.task}</span>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 font-semibold"
      >
        ✕
      </button>
    </div>
  );
}

export default TodoItem;
