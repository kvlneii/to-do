import React from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import SortTasks from '../SortTasks/SortTasks';

const Dashboard = () => {
    return (
        <div className='wrapper'>
            <div className='container'>
                <Header />
                <SortTasks />
                <TodoList />
            </div>
        </div>
    )
}

export default Dashboard