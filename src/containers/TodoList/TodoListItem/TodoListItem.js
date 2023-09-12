import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../../ThemeContext';

import './TodoListItem.scss';

const TodoListItem = ({
    label,
    date,
    description,
    done,
    important,
    onDeleted,
    onToggleImportant,
    onToggleComplete
}) => {
    const { theme } = useContext(ThemeContext);

    let btnClassNames = 'todo-item__buttons__complete';
    btnClassNames += done ? ' todo-item__buttons__complete--done' : '';

    return (
        <div className="wrapper-todo">
            <div
                className="todo-item"
                style={{
                    backgroundColor: theme.secondaryBackgroundColor,
                    color: theme.secondaryColor
                }}>
                <div className="todo-item__task">
                    <span className="todo-item__task__label" style={{ color: theme.primaryTitle }}>
                        {label}
                    </span>
                    <p className="todo-item__task__desc">{description}</p>
                    <div className="todo-item__task__date">
                        <span className="todo-item__task__date__icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path>
                            </svg>
                        </span>
                        <span>{date}</span>
                    </div>
                </div>
                <div className="todo-item__buttons">
                    <button className={btnClassNames} onClick={onToggleComplete}>
                        {done ? 'completed' : 'uncompleted'}
                    </button>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 22"
                        strokeWidth="1.5"
                        className="todo-item__buttons__icons todo-item__buttons__icons--important"
                        onClick={onToggleImportant}
                        style={{
                            fill: important ? '#f43f5e' : 'none',
                            stroke: important ? '#f43f5e' : 'currentColor'
                        }}>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="1.5"
                        fill="currentColor"
                        viewBox="0 0 510 512"
                        className="todo-item__buttons__icons todo-item__buttons__icons--important">
                        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 23 23"
                        className="todo-item__buttons__icons"
                        onClick={onDeleted}>
                        <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                            clipRule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

TodoListItem.propTypes = {
    label: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string,
    done: PropTypes.bool.isRequired,
    important: PropTypes.bool.isRequired,
    onDeleted: PropTypes.func.isRequired,
    onToggleImportant: PropTypes.func.isRequired,
    onToggleComplete: PropTypes.func.isRequired
};

export default TodoListItem;
