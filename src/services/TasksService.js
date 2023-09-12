import { todoUtil } from '../utils';

const _apiUrl = 'http://localhost:8000/tasks';

const getTasks = async () => {
    return fetch(_apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Could not fetch ${_apiUrl}` + `, received ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            if (Array.isArray(data)) {
                return data.map((task, index) => todoUtil.createTodoItem(task, index));
            } else {
                console.error('API response does not contain an array:', data);
                return [];
            }
        })
        .catch((error) => {
            console.error('Error fetching data from API:', error);
            return [];
        });
};

const getTaskById = async (taskId) => {
    try {
        const response = await fetch(`${_apiUrl}/${taskId}`);

        if (!response.ok) {
            throw new Error(`Could not fetch task with ID ${taskId}`);
        }

        const task = await response.json();
        return task;
    } catch (error) {
        console.error(`Error fetching task with ID ${taskId}:`, error);
    }
};

const deleteTask = async (taskId) => {
    try {
        await fetch(`${_apiUrl}/${taskId}`, {
            method: 'DELETE'
        });
        return taskId;
    } catch (error) {
        console.error('Error deleting task:', error);
    }
};

const addTask = async (taskData) => {
    try {
        const response = await fetch(_apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        });
        const newTask = await response.json();
        return newTask;
    } catch (error) {
        console.error('Error adding task:', error);
    }
};

const editTask = async (taskId, updatedData) => {
    try {
        const response = await fetch(`${_apiUrl}/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        return response;
    } catch (error) {
        console.error('Error updating item:', error);
    }
};

export const tasksService = {
    getTasks,
    getTaskById,
    deleteTask,
    addTask,
    editTask
};
