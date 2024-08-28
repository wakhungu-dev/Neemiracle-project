const Todo = require('../model/todoModel');
const mongoose = require('mongoose');

/**
 * Retrieves all todos.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves with the retrieved todos or rejects with an error.
 */
async function getToDo(req, res) {
    try {
        const todos = await Todo.find({});
        res.status(200).send(todos);
    } catch (err) {
        res.status(500).send(err);
    }
}

/**
 * Saves a new todo.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves with the saved todo or rejects with an error.
 */
async function saveToDo(req, res) {
    const { text, completed } = req.body;

    const newTodo = new Todo({
        text,
        completed
    });

    try {
        const savedTodo = await newTodo.save();
        res.status(201).send(savedTodo);
    } catch (err) {
        res.status(500).send(err);
    }
}

/**
 * Updates a todo.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves with the updated todo or rejects with an error.
 */
async function updateToDo(req, res) {
    const { id } = req.params;
    const { text, completed } = req.body;

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, { text, completed }, { new: true });
        if (!updatedTodo) {
            return res.status(404).send({ message: 'Todo not found' });
        }
        res.status(200).send(updatedTodo);
    } catch (err) {
        res.status(500).send(err);
    }
}

/**
 * Deletes a todo.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves with the deleted todo or rejects with an error.
 */
async function deleteToDo(req, res) {
    const { id } = req.params;

    // Check if the id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: 'Invalid ID format' });
    }

    try {
        const deletedTodo = await Todo.findByIdAndDelete(id);

        if (!deletedTodo) {
            return res.status(404).send({ message: 'Todo not found' });
        }

        res.status(200).send({ message: 'Todo deleted successfully' });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    getToDo,
    saveToDo,
    updateToDo,
    deleteToDo
};
