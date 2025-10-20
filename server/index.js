const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// ✅ Get all todos
app.get("/api/todos", async (req, res) => {
  const todos = await prisma.todo.findMany({ orderBy: { id: "desc" } });
  res.json(todos);
});

// ✅ Add new todo
app.post("/api/todos", async (req, res) => {
  const { task } = req.body;
  const newTodo = await prisma.todo.create({ data: { task } });
  res.json(newTodo);
});

// ✅ Delete a todo
app.delete("/api/todos/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.todo.delete({ where: { id } });
  res.json({ message: "Deleted" });
});

// ✅ Update a todo (optional: mark as done, etc.)
app.put("/api/todos/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { task, done } = req.body;
  const updated = await prisma.todo.update({
    where: { id },
    data: { task, done },
  });
  res.json(updated);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
