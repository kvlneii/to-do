import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../ThemeContext';
import { useAppContext } from '../../AppContext';

import { Button } from '../../components';

import { todoUtil } from '../../utils';
import './TaskForm.scss';

const TaskForm = ({ task, onSave }) => {
    const { theme } = useContext(ThemeContext);
    const { setActiveModalId, todoData, setTodoData } = useAppContext();

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [isImportant, setIsImportant] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        if (task) {
            setTitle(task.label);
            setDate(task.date);
            setDescription(task.description);
            setIsImportant(task.important);
            setIsCompleted(task.done);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newId;
        if (!task) {
            newId = todoUtil.getId(todoData);
        }

        const newItem = {
            id: newId || task.id,
            label: title,
            date,
            description,
            important: isImportant,
            done: isCompleted
        };

        setTodoData(todoUtil.updateTodo(todoData, newItem));

        setActiveModalId(null);
        onSave(newItem);
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
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
            <label className="task-form__mark">
                <input
                    type="checkbox"
                    checked={isImportant}
                    onChange={() => setIsImportant(!isImportant)}
                />
                <span>Mark as important</span>
            </label>
            <label className="task-form__mark">
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => setIsCompleted(!isCompleted)}
                />
                <span>Mark as completed</span>
            </label>

            <Button
                label={task ? 'Edit task' : 'Add a task'}
                onClick={() => {}}
                className="task-form__btn"
            />
        </form>
    );
};

TaskForm.propTypes = {
    task: PropTypes.object,
    onSave: PropTypes.func.isRequired
};

export default TaskForm;