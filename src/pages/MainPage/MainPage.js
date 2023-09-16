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

    useEffect(async () => {
        const tasks = await fetchData();
        setTodoData(tasks);
    }, []);

    const fetchData = async () => {
        try {
            const tasks = await tasksService.getTasks();
            return tasks.reverse();
        } catch (error) {
            console.error('Error loading tasks:', error);
        }
    };

    const createTask = async (newItem) => {
        await tasksService.addTask(newItem);
    };

    const editTask = async (updatedItem) => {
        await tasksService.editTask(updatedItem.id, updatedItem);
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
                <Dashboard setEditedTask={setEditedTask} />
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
