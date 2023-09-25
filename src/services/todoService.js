import axios from 'axios';

const _apiUrl = `${process.env.REACT_APP_API_URL}/tasks`;
const options = {
    headers: {
        'Content-Type': 'application/json'
    }
};

const getTasks = async () => {
    try {
        const response = await axios.get(_apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching data from API:', error);
        return [];
    }
};

const getTaskById = async (taskId) => {
    try {
        const response = await axios.get(`${_apiUrl}/${taskId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching task with ID ${taskId}:`, error);
    }
};

const deleteTask = async (taskId) => {
    try {
        await axios.delete(`${_apiUrl}/${taskId}`);
        return taskId;
    } catch (error) {
        console.error('Error deleting task:', error);
    }
};

const addTask = async (taskData) => {
    try {
        const response = await axios.post(_apiUrl, taskData, options);
        return response.data;
    } catch (error) {
        console.error('Error adding task:', error);
    }
};

const editTask = async (taskId, updatedData) => {
    try {
        const response = await axios.put(`${_apiUrl}/${taskId}`, updatedData, options);
        return response;
    } catch (error) {
        console.error('Error updating item:', error);
    }
};

export const todoService = {
    getTasks,
    getTaskById,
    deleteTask,
    addTask,
    editTask
};
