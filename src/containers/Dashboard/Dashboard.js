import PropTypes from 'prop-types';

import { Header, TodoList } from '../../containers';
import { SortTasks } from '../../components';

import './Dashboard.scss';

const Dashboard = ({ setEditedTask }) => {
    return (
        <div className="wrapper">
            <div className="container">
                <Header />
                <SortTasks />
                <TodoList setEditedTask={setEditedTask} />
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    setEditedTask: PropTypes.func.isRequired
};

export default Dashboard;
