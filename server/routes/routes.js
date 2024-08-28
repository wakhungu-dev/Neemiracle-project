/**
 * Express router for handling todo routes.
 * @module routes
 */

/**
 * Express router instance.
 * @type {object}
 * @const
 * @namespace router
 */

/**
 * Route for getting all todos.
 * @name getToDo
 * @function
 * @memberof module:routes
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @returns {object} - Response object with todos.
 */

/**
 * Route for saving a new todo.
 * @name saveToDo
 * @function
 * @memberof module:routes
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @returns {object} - Response object with saved todo.
 */

/**
 * Route for updating a todo.
 * @name updateToDo
 * @function
 * @memberof module:routes
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @returns {object} - Response object with updated todo.
 */

/**
 * Route for deleting a todo.
 * @name deleteToDo
 * @function
 * @memberof module:routes
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @returns {object} - Response object with deleted todo.
 */
const { Router } = require('express');
const router = Router();
const { getToDo, saveToDo, updateToDo, deleteToDo } = require('../controller/todoController');

router.get('/', getToDo);
router.post('/save', saveToDo);
router.put('/update/:id', updateToDo); // Added missing '/'
router.delete('/delete/:id', deleteToDo); // Added missing '/'

module.exports = router;
