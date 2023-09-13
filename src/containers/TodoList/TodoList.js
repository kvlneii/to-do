import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { useAppContext } from '../../AppContext';

import { propertyNames, modalIds } from '../../consts';
import { todoUtil } from '../../utils';
import { tasksService } from '../../services';

import TodoListItem from './TodoListItem/TodoListItem';
import './TodoList.scss';

const TodoList = ({ setEditedTask }) => {
    const { setTodoData, todoData, searchedTerm, filter, sortBy, setActiveModalId } =
        useAppContext();

    const todos = useMemo(() => {
        return todoUtil.getVisibleItems(todoData, searchedTerm, sortBy, filter);
    }, [todoData, searchedTerm, sortBy, filter]);

    const handleDelete = async (id) => {
        setTodoData(todoUtil.deleteItem(todoData, id));
        await tasksService.deleteTask(id);
    };

    const handleToggleProperty = async (id, propName) => {
        const newItem = todoUtil.toggleProperty(todoData, id, propName);
        setTodoData(todoUtil.updateTodo(todoData, newItem));
        await tasksService.editTask(id, newItem);
    };

    const handleEdit = (item) => {
        setActiveModalId(modalIds.EDIT_TASK_MODAL);
        setEditedTask(item);
    };

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="todo-list__item">
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => handleDelete(id)}
                    onToggleImportant={() => handleToggleProperty(id, propertyNames.IMPORTANT)}
                    onToggleComplete={() => handleToggleProperty(id, propertyNames.DONE)}
                    onEdit={() => handleEdit(item)}
                />
            </li>
        );
    });

    return <ul className="todo-list">{elements}</ul>;
};

TodoList.propTypes = {
    setEditedTask: PropTypes.func.isRequired
};

export default TodoList;
