// Get base URL (can be changed later easily or replaced by an environment variable)
const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";

// API endpoints for the To-Do List app
export const TODO_API = `${BASE_URL}/api/todos`;
export const TODO_ITEM = (id) => `${BASE_URL}/api/todos/${id}`;
