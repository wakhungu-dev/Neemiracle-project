import React from 'react';
import Icon from 'react-crud-icons';
import "react-crud-icons/dist/css/react-crud-icons.css";

/**
 * Represents a ToDo component.
 * @param {Object} props - The props object containing the text, updateMode, deleteToDo, completed, and toggleCompleted functions.
 * @returns {JSX.Element} The ToDo component.
 */
const ToDo = ({ text, updateMode, deleteToDo, completed, toggleCompleted }) => {
    return (
        <div className="flex justify-between items-center bg-gray-50 p-4 border rounded-lg shadow-sm">
            <div className="flex items-center space-x-4">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={toggleCompleted}
                    className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span
                    className={`text ${completed ? 'line-through text-gray-400' : ''}`}
                >
                    {text}
                </span>
            </div>
            <div className="flex space-x-2">
                <Icon
                    name="edit"
                    theme="light"
                    size="small"
                    className="edit-icon"
                    onClick={updateMode}
                />
                <Icon
                    name="delete"
                    theme="light"
                    size="small"
                    className="delete-icon"
                    onClick={deleteToDo}
                />
            </div>
        </div>
    );
}

export default ToDo;
