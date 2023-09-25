import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../../ThemeContext';

import { DateIcon, ImportantIcon, EditIcon, DeleteIcon } from '../../../icons';

import { IconWrapper } from '../../../components';

import './TodoListItem.scss';

const TodoListItem = ({
    label,
    date,
    description,
    done,
    important,
    onDeleted,
    onToggleImportant,
    onToggleComplete,
    onEdit
}) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="todo-wrapper">
            <div
                className="todo-item"
                style={{
                    backgroundColor: theme.secondaryBackgroundColor,
                    color: theme.secondaryColor
                }}>
                <div className="todo-item__task">
                    <span className="todo-item__label" style={{ color: theme.primaryTitle }}>
                        {label}
                    </span>
                    <p className="todo-item__desc">{description}</p>
                    <div className="todo-item__date">
                        <span className="todo-item__icon">
                            <DateIcon />
                        </span>
                        <span>{date}</span>
                    </div>
                </div>
                <div className="todo-item__buttons actions">
                    <button
                        className={`actions__complete${done ? ' actions__complete--done' : ''}`}
                        onClick={onToggleComplete}>
                        {done ? 'completed' : 'uncompleted'}
                    </button>

                    <IconWrapper
                        onClick={onToggleImportant}
                        className="actions__icons actions__icons--important"
                        important={important}>
                        <ImportantIcon />
                    </IconWrapper>

                    <IconWrapper onClick={onEdit} className="actions__icons">
                        <EditIcon />
                    </IconWrapper>

                    <IconWrapper onClick={onDeleted} className="actions__icons">
                        <DeleteIcon />
                    </IconWrapper>
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
    onToggleComplete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default TodoListItem;
