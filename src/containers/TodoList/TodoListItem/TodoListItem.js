import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { DateIcon, ImportantIcon, EditIcon, DeleteIcon } from '../../../icons';
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
    onToggleComplete,
    onEdit
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
                            <DateIcon />
                        </span>
                        <span>{date}</span>
                    </div>
                </div>
                <div className="todo-item__buttons">
                    <button className={btnClassNames} onClick={onToggleComplete}>
                        {done ? 'completed' : 'uncompleted'}
                    </button>

                    <ImportantIcon
                        onToggleImportant={onToggleImportant}
                        className={'todo-item__buttons__icons todo-item__buttons__icons--important'}
                        important={important}
                    />

                    <EditIcon onEdit={onEdit} className={'todo-item__buttons__icons'} />

                    <DeleteIcon onDeleted={onDeleted} className={'todo-item__buttons__icons'} />
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
