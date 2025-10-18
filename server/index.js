const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let todos = []; // simple in-memory storage

// GET all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// POST add todo
app.post("/api/todos", (req, res) => {
  const newTodo = { id: Date.now(), task: req.body.task };
  todos.push(newTodo);
  res.json(newTodo);
});

// DELETE a todo
app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter(t => t.id !== parseInt(id));
  res.json({ message: "Deleted" });
});

// UPDATE a todo
app.put("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const todo = todos.find(t => t.id === parseInt(id));
  if (todo) todo.task = task;
  res.json(todo);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
