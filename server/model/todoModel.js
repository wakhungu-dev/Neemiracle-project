const mongoose = require('mongoose');
/**
 * @typedef TodoSchema
 * @property {string} text - The text of the todo item.
 */
const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
}); 
module.exports = mongoose.model('ToDo', todoSchema); 

