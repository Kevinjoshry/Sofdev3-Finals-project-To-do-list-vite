import axios from "axios";

const API_URL = "http://localhost:5000/api/todos";

export const getTodos = () => axios.get(API_URL);
export const addTodo = (task) => axios.post(API_URL, { task });
export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);
export const updateTodo = (id, data) => axios.put(`${API_URL}/${id}`, data);
