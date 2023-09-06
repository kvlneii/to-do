import React, { useState, useContext } from 'react';
import './AddNewTask.css';
import Button from '../Button/Button';
import { ThemeContext } from '../../theme-context';
import { useAppContext } from "../../AppContext";

const AddNewTask = () => {
    const { theme } = useContext(ThemeContext);
    const { setIsVisible, addItem } = useAppContext();

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [isImportant, setIsImportant] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(title, date, description, isImportant, isCompleted);
        setIsVisible(false);
    };

    return (
        <section className='section'>
            <div className="section__header">
                <h2 className='section__header__title'>Add a task</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='section__header__icon' onClick={() => setIsVisible(false)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
            </div>
            <form className="section__form" onSubmit={handleSubmit}>
                <label>
                    Title
                    <input
                        type="text"
                        placeholder="e.g, study for the test"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{ backgroundColor: theme.secondaryBackgroundColor, color: theme.secondaryColor }} />
                </label>
                <label>
                    Date
                    <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        style={{ backgroundColor: theme.secondaryBackgroundColor, color: theme.secondaryColor }} />
                </label>
                <label>
                    Description (optional)
                    <textarea
                        placeholder="e.g, study for the test"
                        style={{ backgroundColor: theme.secondaryBackgroundColor, color: theme.secondaryColor }}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}>
                    </textarea>
                </label>
                <label className='section__mark'>
                    <input
                        type="checkbox"
                        checked={isImportant}
                        onChange={() => setIsImportant(!isImportant)}
                    />
                    <span>Mark as important</span>
                </label>
                <label className='section__mark'>
                    <input
                        type="checkbox"
                        checked={isCompleted}
                        onChange={() => setIsCompleted(!isCompleted)}
                    />
                    <span>Mark as completed</span>
                </label>

                <Button label={'Add a task'} setIsVisible={() => { }} className='section__btn' />
            </form>
        </section>
    )
}

export default AddNewTask