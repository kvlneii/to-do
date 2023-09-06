import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import { useAppContext } from "../../AppContext";
import './TodoList.css';

const TodoList = () => {

    const { deleteItem, onToggleImportant, onToggleDone, visibleItems: todos } = useAppContext();

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="todo-list__item">
                <TodoListItem {...itemProps}
                    onDeleted={() => deleteItem(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                />
            </li>
        );
    });

    return (
        <ul className="todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;