import axios from 'axios';

const BASE_URL = 'http://localhost:5000/todos'; // Adjust the base URL as necessary

export const getAllToDo = async (setToDoList) => {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    setToDoList(response.data);
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

export const addToDo = async (text, setText, setToDoList) => {
  try {
    const response = await axios.post(`${BASE_URL}/save`, { text });
    setToDoList((prev) => [...prev, response.data]);
    setText('');
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

export const updateToDo = async (id, text, setToDoList, setText, setIsUpdating) => {
  try {
    const response = await axios.put(`${BASE_URL}/update/${id}`, { text });
    setToDoList((prev) =>
      prev.map((item) => (item._id === id ? { ...item, text: response.data.text } : item))
    );
    setText('');
    setIsUpdating(false);
  } catch (error) {
    console.error('Error updating todo:', error);
  }
};

export const deleteToDo = async (id, setToDoList) => {
  try {
    await axios.delete(`${BASE_URL}/delete/${id}`);
    setToDoList((prev) => prev.filter((item) => item._id !== id));
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
};
