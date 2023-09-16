const _apiUrl = `${process.env.REACT_APP_API_URL}/tasks`;

const getTasks = async () => {
    try {
        const response = await fetch(_apiUrl);

        if (!response.ok) {
            throw new Error(`Could not fetch ${_apiUrl}` + `, received ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching data from API:', error);
        return [];
    }
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
