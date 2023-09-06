import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

let maxId = 100;

const AppProvider = ({ children }) => {
    const createTodoItem = (label, date, description = '', important = false, done = false) => {
        return {
            label,
            date,
            description,
            important,
            done,
            id: maxId++
        };
    }

    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');
    const [isVisible, setIsVisible] = useState(false);
    const [currentDate, setCurrentDate] = useState('');
    const [sortBy, setSortBy] = useState('disabledOption');
    const [todoData, setTodoData] = useState([
        createTodoItem('Task 1', '2023-09-05', 'This is the description for this task'),
        createTodoItem('Task 2', '2023-10-05', 'This is the description for this task'),
        createTodoItem('Task 3', '2023-05-09', 'This is the description for this task'),
        createTodoItem('Task 4', '2023-09-05', 'This is the description for this task'),
        createTodoItem('Task 5', '2023-11-05', 'This is the description for this task'),
        createTodoItem('Task 6', '2023-03-09', 'This is the description for this task'),
    ]);

    const formatCurrentDate = () => {
        return new Date().toLocaleDateString('en-US');
    };

    const onSearchChange = (newTerm) => {
        setTerm(newTerm);
    };

    const deleteItem = (id) => {
        setTodoData(prevTodoData => {
            const idx = prevTodoData.findIndex((item) => item.id === id);

            const newData = [
                ...prevTodoData.slice(0, idx),
                ...prevTodoData.slice(idx + 1)
            ];

            return newData;
        });
    };

    const addItem = (label, date, description, important, done) => {
        const newItem = createTodoItem(label, date, description, important, done);
        setTodoData(prevTodoData => [newItem, ...prevTodoData]);
    };

    const toggleProperty = (todoData, id, propName) => {
        const idx = todoData.findIndex((item) => item.id === id);

        const oldItem = todoData[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        return [
            ...todoData.slice(0, idx),
            newItem,
            ...todoData.slice(idx + 1)
        ]
    }

    const onToggleImportant = (id) => {
        setTodoData(prevTodoData => {
            return toggleProperty(prevTodoData, id, 'important');
        });
    };

    const onToggleDone = (id) => {
        setTodoData(prevTodoData => {
            return toggleProperty(prevTodoData, id, 'done');
        });
    };

    const search = (items, term) => {
        if (term.length === 0) return items;

        return items.filter((item) => {
            return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        })
    };

    const filterItems = (items, filter) => {
        switch (filter) {
            case 'all':
                return items;
            case 'important':
                return items.filter((item) => item.important);
            case 'completed':
                return items.filter((item) => item.done);
            case 'uncompleted':
                return items.filter((item) => !item.done);
            case 'currentDay':
                return items.filter((item) => {
                    const itemDate = new Date(item.date).toLocaleDateString('en-US');
                    return itemDate === currentDate;
                });
            default:
                return items;
        };
    };

    const sortItems = (items) => {
        switch (sortBy) {
            case 'earliestFirst':
                return [...items].sort((a, b) => new Date(a.date) - new Date(b.date));
            case 'latestFirst':
                return [...items].sort((a, b) => new Date(b.date) - new Date(a.date));
            case 'orderAdded':
                return [...items].sort((a, b) => b.id - a.id);
            default:
                return items;
        }
    };

    const toDo = todoData.filter((el) => el.done).length;
    const allToDo = todoData.length;
    const todayTasks = filterItems(todoData, 'currentDay');
    const visibleItems = filterItems(sortItems(search(todoData, term)), filter);

    const contextValue = {
        term,
        setTerm,
        filter,
        setFilter,
        isVisible,
        setIsVisible,
        currentDate,
        setCurrentDate,
        sortBy,
        setSortBy,
        todoData,
        setTodoData,
        formatCurrentDate,
        deleteItem,
        addItem,
        onToggleImportant,
        onToggleDone,
        search,
        filterItems,
        sortItems,
        toDo,
        allToDo,
        todayTasks,
        onSearchChange,
        visibleItems
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider };
