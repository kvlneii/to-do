import React, { useMemo } from 'react';
import { useAppContext } from '../../AppContext';

import { propertyNames } from '../../consts';
import { todoUtil } from '../../utils';

import TodoListItem from './TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = () => {
    const { todoData, searchedTerm, filter, sortBy, setTodoData } = useAppContext();

    const todos = useMemo(() => {
        return todoUtil.getVisibleItems(todoData, searchedTerm, sortBy, filter);
    }, [todoData, searchedTerm, sortBy, filter]);

    const handleDelete = (id) => {
        const newTodoData = todoUtil.deleteItem(todoData, id);
        setTodoData(newTodoData);
    };

    const handleToggleProperty = (id, propName) => {
        const newTodoData = todoUtil.toggleProperty(todoData, id, propName);
        setTodoData(newTodoData);
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
                />
            </li>
        );
    });

    return <ul className="todo-list">{elements}</ul>;
};

export default TodoList;
