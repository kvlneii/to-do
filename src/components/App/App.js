import React, { useState, useEffect } from "react";
import { ThemeContext } from '../../theme-context'
import './App.css';
import Menu from '../Menu/Menu';
import Dashboard from '../Dashboard/Dashboard';
import Settings from '../Settings/Settings';
import AddNewTask from "../AddNewTask/AddNewTask";

let maxId = 100;
const App = () => {
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

  useEffect(() => {
    setCurrentDate(formatCurrentDate());
  }, []);

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

  const { theme } = React.useContext(ThemeContext);
  const toDo = todoData.filter((el) => el.done).length;
  const allToDo = todoData.length;
  const visibleItems = filterItems(sortItems(search(todoData, term)), filter);
  const todayTasks = filterItems(todoData, 'currentDay');

  let classNames = 'app';
  classNames += isVisible ? ' covered' : '';

  return (
    <>
      <div className={classNames} style={{ backgroundColor: theme.primaryBackgroundColor, color: theme.secondaryColor }}>
        <Menu filter={filter} onFilterChange={setFilter} setIsVisible={setIsVisible} />
        <Dashboard
          todos={visibleItems}
          onDeleted={deleteItem}
          onToggleImportant={onToggleImportant}
          onToggleDone={onToggleDone}
          onSearchChange={setTerm}
          setIsVisible={setIsVisible}
          currentDate={currentDate}
          filter={filter}
          setSortBy={setSortBy}
          sort={sortBy}
        />
        <Settings toDo={toDo} allToDo={allToDo} todayTasks={todayTasks} />
      </div>

      {isVisible && (
        <div className="app__add-section" style={{ backgroundColor: theme.primaryBackgroundColor, color: theme.secondaryColor }}>
          <AddNewTask setIsVisible={setIsVisible} onAdded={addItem} />
        </div>
      )}
    </>

  );
}
export default App;
