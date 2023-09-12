import { useContext, useEffect } from 'react';

import { useAppContext } from '../../AppContext';
import { ThemeContext } from '../../ThemeContext';

import { modalIds } from '../../consts';
import { todoUtil } from '../../utils';

import { Modal } from '../../components';
import { AddNewTask, Dashboard, Menu, Settings } from '../../containers';
import './MainPage.scss';

const MainPage = () => {
    const { activeModalId, setActiveModalId, setTodoData } = useAppContext();

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const apiUrl = 'http://localhost:8000/tasks';

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    setTodoData(data.map((task, index) => todoUtil.createTodoItem(task, index)));
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch((error) => {
                console.error('Error fetching data from API:', error);
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
            </div>
        </>
    );
};

export default MainPage;
