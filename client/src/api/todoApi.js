import axios from "axios";
import { TODO_API, TODO_ITEM } from "../constant/path";

export const getTodos = () => axios.get(TODO_API);
export const addTodo = (task) => axios.post(TODO_API, { task });
export const deleteTodo = (id) => axios.delete(TODO_ITEM(id));
export const updateTodo = (id, data) => axios.put(TODO_ITEM(id), data);
