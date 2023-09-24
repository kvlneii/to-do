import axios from 'axios';

const _apiUrl = `${process.env.REACT_APP_API_URL}/tasks`;

const getTasks = async () => {
    try {
        const response = await axios.get(_apiUrl);

        if (response.status !== 200) {
            throw new Error(`Could not fetch ${_apiUrl}, received ${response.status}`);
        }

        return response.data;
    } catch (error) {
        console.error('Error fetching data from API:', error);
        return [];
    }
};

const getTaskById = async (taskId) => {
    try {
        const response = await axios.get(`${_apiUrl}/${taskId}`);

        if (response.status !== 200) {
            throw new Error(`Could not fetch task with ID ${taskId}`);
        }

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
        const response = await axios.post(_apiUrl, taskData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error adding task:', error);
    }
};

const editTask = async (taskId, updatedData) => {
    try {
        const response = await axios.put(`${_apiUrl}/${taskId}`, updatedData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
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
