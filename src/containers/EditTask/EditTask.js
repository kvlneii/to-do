import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../../ThemeContext';
import { useAppContext } from '../../AppContext';

import { Button } from '../../components';

import './EditTask.scss';
import { todoUtil } from '../../utils';
import TasksService from '../../services/TasksService';

const EditTask = ({ id }) => {
    const { theme } = useContext(ThemeContext);
    const { setActiveModalId, todoData, setTodoData } = useAppContext();

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [isImportant, setIsImportant] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        const fetchTaskData = async () => {
            try {
                const tasksService = new TasksService();
                const task = await tasksService.getTaskById(id);
                setTitle(task.label);
                setDate(task.date);
                setDescription(task.description);
                setIsImportant(task.important);
                setIsCompleted(task.done);
            } catch (error) {
                console.error('Error fetching task data:', error);
            }
        };

        fetchTaskData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTodoData = await todoUtil.editItem(todoData, id, {
            label: title,
            date,
            description,
            important: isImportant,
            done: isCompleted
        });

        setTodoData(newTodoData);
        setActiveModalId(null);
    };

    return (
        <form className="edit-form" onSubmit={handleSubmit}>
            <label>
                Title
                <input
                    type="text"
                    placeholder="e.g, study for the test"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{
                        backgroundColor: theme.secondaryBackgroundColor,
                        color: theme.secondaryColor
                    }}
                />
            </label>
            <label>
                Date
                <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={{
                        backgroundColor: theme.secondaryBackgroundColor,
                        color: theme.secondaryColor
                    }}
                />
            </label>
            <label>
                Description (optional)
                <textarea
                    placeholder="e.g, study for the test"
                    style={{
                        backgroundColor: theme.secondaryBackgroundColor,
                        color: theme.secondaryColor
                    }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}></textarea>
            </label>
            <label className="edit-form__mark">
                <input
                    type="checkbox"
                    checked={isImportant}
                    onChange={() => setIsImportant(!isImportant)}
                />
                <span>Mark as important</span>
            </label>
            <label className="edit-form__mark">
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => setIsCompleted(!isCompleted)}
                />
                <span>Mark as completed</span>
            </label>

            <Button label={'Edit a task'} onClick={() => {}} className="edit-form__btn" />
        </form>
    );
};

export default EditTask;
