const { Router } = require("express");
const { getTodos, createTodo, deleteTodo, getTodoById, updateTodo } = require("../services/todos.service");

const router = Router();

router.get("/todos", getTodos);
router.get("/todos/:id", getTodoById);
router.post("/todos", createTodo);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

module.exports = router;
