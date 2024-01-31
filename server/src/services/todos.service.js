const todos = require("../db/todos");

const getTodos = (_, res, next) => {
    try {
        res.json(todos || []);
    } catch (error) {
        next(error);
    }
};

const getTodoById = (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        const todo = todos.find((todo) => todo.id == id);
        res.json(todo || {});
    } catch (error) {
        next(error);
    }
};

const createTodo = (req, res, next) => {
    try {
        const { title, description } = req.body;
        const todo = {
            id: +Date.now().toString(),
            title,
            description,
            completed: false,
        };
        todos.push(todo);
        res.json(todo);
    } catch (error) {
        next(error);
    }
};

const updateTodo = (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, completed, description } = req.body;
        const todo = todos.find((todo) => todo.id == id);
        todo.title = title;
        todo.completed = completed;
        todo.description = description;
        res.json(todo);
    } catch (error) {
        next(error);
    }
};

const deleteTodo = (req, res, next) => {
    try {
        const { id } = req.params;
        const index = todos.findIndex((todo) => todo.id == id);
        todos.splice(index, 1);
        res.json({
            success: true,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
};
