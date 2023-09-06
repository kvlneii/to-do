import React, { useState, useEffect } from "react";
import { ThemeContext } from '../../theme-context'
import './App.css';
import Menu from '../Menu/Menu';
import Dashboard from '../Dashboard/Dashboard';
import Settings from '../Settings/Settings';
import AddNewTask from "../AddNewTask/AddNewTask";

const App = () => {
  let maxId = 100;

  const createTodoItem = (label, date = '', description = '', important = false, done = false) => {
    return {
      label,
      date,
      description,
      important,
      done,
      id: maxId++
    };
  }

  const [todoData, setTodoData] = useState([
    createTodoItem('Task 1', '2023-09-05', 'This is the description for this task'),
    createTodoItem('Task 2', '2023-10-05', 'This is the description for this task'),
    createTodoItem('Task 3', '2023-05-09', 'This is the description for this task'),
  ]);

  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

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
    setTodoData(prevTodoData => [...prevTodoData, newItem]);
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

  const { theme } = React.useContext(ThemeContext);

  const toDo = todoData.filter((el) => el.done).length;
  const allToDo = todoData.length;
  const visibleItems = filterItems(search(todoData, term), filter);

  const visibleOn = () => {
    return setIsVisible(true);
  };

  const visibleOff = () => {
    return setIsVisible(false);
  };

  let classNames = 'app';
  classNames += isVisible ? ' covered' : '';

  return (
    <>
      <div className={classNames} style={{ backgroundColor: theme.primaryBackgroundColor, color: theme.secondaryColor }}>
        <Menu filter={filter} onFilterChange={setFilter} />
        <Dashboard todos={visibleItems}
          onDeleted={deleteItem}
          onToggleImportant={onToggleImportant}
          onToggleDone={onToggleDone}
          onSearchChange={setTerm}
          onFilterChange={setFilter}
          // setIsVisible={visibleOn}
          setIsVisible={setIsVisible}
          currentDate={currentDate}
        />
        <Settings toDo={toDo} allToDo={allToDo} />

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
