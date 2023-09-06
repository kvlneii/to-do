import React from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import SortTasks from '../SortTasks/SortTasks';

const Dashboard =
    ({ todos, onDeleted, onToggleImportant,
        onToggleDone, onSearchChange, setIsVisible,
        currentDate, filter, setSortBy, sort }) => {
        return (
            <div className='wrapper'>
                <div className='container'>
                    <Header onSearchChange={onSearchChange} setIsVisible={setIsVisible} currentDate={currentDate} />
                    <SortTasks todos={todos} filter={filter} setSortBy={setSortBy} sort={sort} />
                    <TodoList todos={todos}
                        onDeleted={onDeleted}
                        onToggleImportant={onToggleImportant}
                        onToggleDone={onToggleDone}
                    />
                </div>
            </div>
        )
    }

export default Dashboard