import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import { useAppContext } from '../../AppContext';

import { Button } from '../../components';

import './AddNewTask.css';
import { todoUtil } from '../../utils';

const AddNewTask = () => {
    const { theme } = useContext(ThemeContext);
    const { setActiveModalId, todoData, setTodoData } = useAppContext();

    const [title, setTitle] = useState('');

    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [isImportant, setIsImportant] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodoData = todoUtil.addItem(todoData, {
            title,
            date,
            description,
            isImportant,
            isCompleted
        });
        setTodoData(newTodoData);

        setActiveModalId(null);
    };

    return (
        <form className="section__form" onSubmit={handleSubmit}>
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
            <label className="section__mark">
                <input
                    type="checkbox"
                    checked={isImportant}
                    onChange={() => setIsImportant(!isImportant)}
                />
                <span>Mark as important</span>
            </label>
            <label className="section__mark">
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => setIsCompleted(!isCompleted)}
                />
                <span>Mark as completed</span>
            </label>

            <Button label={'Add a task'} onClick={() => {}} className="section__btn" />
        </form>
    );
};

export default AddNewTask;
