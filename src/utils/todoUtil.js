import { sortOptionIds, statusIds } from '../consts';
import { dateUtil } from '../utils';

const createTodoItem = (item, id) => {
    return {
        ...item,
        id
    };
};

const addItem = (todoData, item) => {
    const maxId = Math.max(...todoData.map((todo) => todo.id), -1);
    const newId = maxId + 1;

    const newItem = createTodoItem(item, newId);

    return [newItem, ...todoData];
};

const deleteItem = (todoData, id) => {
    return todoData.filter((item) => item.id !== id);
};

const toggleProperty = (todoData, id, propName) => {
    const idx = todoData.findIndex((item) => item.id === id);

    const oldItem = todoData[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
};

const search = (items, searchedTerm) => {
    if (searchedTerm.length === 0) return items;

    return items.filter((item) => {
        return item.label.toLowerCase().indexOf(searchedTerm.toLowerCase()) > -1;
    });
};

const filterItems = (items, filter) => {
    const currentDate = dateUtil.formatCurrentDate();

    switch (filter) {
        case statusIds.ALL:
            return items;
        case statusIds.IMPORTANT:
            return items.filter((item) => item.important);
        case statusIds.COMPLETED:
            return items.filter((item) => item.done);
        case statusIds.UNCOMPLETED:
            return items.filter((item) => !item.done);
        case statusIds.CURRENT_DAY:
            return items.filter((item) => {
                const itemDate = new Date(item.date).toLocaleDateString('en-US');
                return itemDate === currentDate;
            });
        default:
            return items;
    }
};

const sortItems = (items, sortBy) => {
    switch (sortBy) {
        case sortOptionIds.EARLIEST_FIRST:
            return [...items].sort((a, b) => new Date(a.date) - new Date(b.date));
        case sortOptionIds.LATEST_FIRST:
            return [...items].sort((a, b) => new Date(b.date) - new Date(a.date));
        case sortOptionIds.ORDER_ADDED:
            return [...items].sort((a, b) => b.id - a.id);
        default:
            return items;
    }
};

const getTodayTasks = (todoData) => {
    return filterItems(todoData, statusIds.CURRENT_DAY);
};

const getVisibleItems = (todoData, searchedTerm, sortBy, filter) => {
    return filterItems(sortItems(search(todoData, searchedTerm), sortBy), filter);
};

export const todoUtil = {
    createTodoItem,
    addItem,
    deleteItem,
    toggleProperty,
    getTodayTasks,
    getVisibleItems
};
