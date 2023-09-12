import { useContext, useEffect } from 'react';

import { useAppContext } from '../../AppContext';
import { ThemeContext } from '../../ThemeContext';

import { modalIds } from '../../consts';
import { tasksService } from '../../services';

import { Modal } from '../../components';
import { AddNewTask, Dashboard, Menu, Settings } from '../../containers';
import './MainPage.scss';

const MainPage = () => {
    const { activeModalId, setActiveModalId, setTodoData } = useAppContext();

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        tasksService
            .getTasks()
            .then((tasks) => {
                setTodoData(tasks);
            })
            .catch((error) => {
                console.error('Error loading tasks:', error);
            });
    }, []);

    return (
        <>
            <div
                className={'app'}
                style={{
                    backgroundColor: theme.primaryBackgroundColor,
                    color: theme.secondaryColor
                }}>
                <Menu />
                <Dashboard />
                <Settings />

                {activeModalId === modalIds.CREATE_TASK_MODAL && (
                    <Modal title={'Add new task'} onClose={() => setActiveModalId(null)}>
                        <AddNewTask />
                    </Modal>
                )}

                {/* {activeModalId === modalIds.EDIT_TASK_MODAL && (
                    <Modal title={'Edit task'} onClose={() => setActiveModalId(null)}>
                        <EditTask {task}  />
                    </Modal>
                )} */}
            </div>
        </>
    );
};

export default MainPage;
