import { todoUtil } from '../utils';

export default class TasksService {
    _apiUrl = 'http://localhost:8000/tasks';

    getTasks = async () => {
        return fetch(this._apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Could not fetch ${this._apiUrl}` + `, received ${response.status}`
                    );
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

    getTaskById = async (taskId) => {
        try {
            const response = await fetch(`${this._apiUrl}/${taskId}`);

            if (!response.ok) {
                throw new Error(`Could not fetch task with ID ${taskId}`);
            }

            const task = await response.json();
            return task;
        } catch (error) {
            console.error(`Error fetching task with ID ${taskId}:`, error);
            throw error;
        }
    };

    deleteTask = async (taskId) => {
        try {
            const response = await fetch(`${this._apiUrl}/${taskId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`Could not delete task ${taskId}`);
            }
            return taskId;
        } catch (error) {
            console.error('Error deleting task:', error);
            throw error;
        }
    };

    addTask = async (taskData) => {
        try {
            const response = await fetch(this._apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(taskData)
            });

            if (!response.ok) {
                throw new Error(`Could not add task`);
            }

            const newTask = await response.json();
            return newTask;
        } catch (error) {
            console.error('Error adding task:', error);
            throw error;
        }
    };

    editTask = async (taskId, updatedData) => {
        try {
            const response = await fetch(`${this._apiUrl}/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });

            if (!response.ok) {
                throw new Error('Failed to update item.');
            }
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };
}
