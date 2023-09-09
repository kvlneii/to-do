import { useContext, useEffect } from 'react';

import { useAppContext } from '../../AppContext';
import { ThemeContext } from '../../ThemeContext';

import { modalIds } from '../../consts';
import { todoUtil } from '../../utils';

import { Modal } from '../../components';
import { AddNewTask, Dashboard, Menu, Settings } from '../../containers';
import './MainPage.css';

const MOCK_DATA = [
    { label: 'Task 1', date: '2023-09-05', description: 'This is the description for this task' },
    { label: 'Task 2', date: '2023-10-05', description: 'This is the description for this task' },
    { label: 'Task 3', date: '2023-05-09', description: 'This is the description for this task' },
    { label: 'Task 4', date: '2023-09-05', description: 'This is the description for this task' },
    { label: 'Task 5', date: '2023-11-05', description: 'This is the description for this task' },
    { label: 'Task 6', date: '2023-03-09', description: 'This is the description for this task' }
];

const MainPage = () => {
    const { activeModalId, setActiveModalId, setTodoData } = useAppContext();

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        // TODO: change mock data to data from the API
        setTodoData(MOCK_DATA.map((data, index) => todoUtil.createTodoItem(data, index)));
    }, []);

    return (
        <>
            <div
                className={'app'}
                style={{
                    backgroundColor: theme.primaryBackgroundColor,
                    color: theme.secondaryColor
                }}
            >
                <Menu />
                <Dashboard />
                <Settings />

                {activeModalId === modalIds.CREATE_TASK_MODAL && (
                    <Modal title={'Add new task'} onClose={() => setActiveModalId(null)}>
                        <AddNewTask />
                    </Modal>
                )}
            </div>
        </>
    );
};

export default MainPage;
