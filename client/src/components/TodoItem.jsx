import { motion } from "framer-motion";

function TodoItem({ todo, onDelete, onToggleComplete }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.2 },
      }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`flex justify-between items-center bg-white shadow-md rounded-lg p-3 mb-2 transition-all duration-200 hover:scale-[1.02] ${
        todo.completed ? "opacity-80" : ""
      }`}
    >
      <div className="flex items-center gap-2 flex-1">
        <button
          onClick={() => onToggleComplete(todo.id)}
          className={`w-6 h-6 flex items-center justify-center border-2 rounded-full transition-colors ${
            todo.completed
              ? "bg-green-500 border-green-500 text-white"
              : "border-gray-400 text-transparent"
          }`}
        >
          ✓
        </button>

        <span
          onClick={() => onToggleComplete(todo.id)}
          className={`text-gray-800 cursor-pointer flex-1 transition-all duration-300 select-none ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.task}
        </span>
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 font-semibold transition-all ml-2"
      >
        ✕
      </button>
    </motion.div>
  );
}

export default TodoItem;
