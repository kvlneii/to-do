import { useContext, useEffect, useState } from 'react';

import { useAppContext } from '../../AppContext';
import { ThemeContext } from '../../ThemeContext';

import { modalIds } from '../../consts';
import { tasksService } from '../../services';

import { Modal } from '../../components';
import { TaskForm, Dashboard, Menu, Settings } from '../../containers';

import './MainPage.scss';

const MainPage = () => {
    const { activeModalId, setActiveModalId, setTodoData } = useAppContext();

    const { theme } = useContext(ThemeContext);

    const [editedTask, setEditedTask] = useState(null);

    const fetchData = async () => {
        try {
            const tasks = await tasksService.getTasks();
            setTodoData(tasks.reverse());
        } catch (error) {
            console.error('Error loading tasks:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const createTask = async (newItem) => {
        await tasksService.addTask(newItem);
        fetchData();
    };

    const editTask = async (updatedItem) => {
        await tasksService.editTask(updatedItem.id, updatedItem);
        fetchData();
    };

    const deleteTask = async (taskId) => {
        await tasksService.deleteTask(taskId);
        fetchData();
    };

    return (
        <>
            <div
                className={'app'}
                style={{
                    backgroundColor: theme.primaryBackgroundColor,
                    color: theme.secondaryColor
                }}>
                <Menu />
                <Dashboard setEditedTask={setEditedTask} onDelete={deleteTask} onEdit={editTask} />
                <Settings />

                {activeModalId === modalIds.CREATE_TASK_MODAL && (
                    <Modal title={'Add new task'} onClose={() => setActiveModalId(null)}>
                        <TaskForm onSave={(newItem) => createTask(newItem)} />
                    </Modal>
                )}

                {activeModalId === modalIds.EDIT_TASK_MODAL && (
                    <Modal title={'Edit task'} onClose={() => setActiveModalId(null)}>
                        <TaskForm
                            task={editedTask}
                            onSave={(updatedItem) => editTask(updatedItem)}
                        />
                    </Modal>
                )}
            </div>
        </>
    );
};

export default MainPage;
