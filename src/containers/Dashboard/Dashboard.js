import PropTypes from 'prop-types';

import { Header, TodoList } from '../../containers';
import { SortTasks } from '../../components';

import './Dashboard.scss';

const Dashboard = ({ setEditedTask, onDelete, onEdit }) => {
    return (
        <div className="wrapper">
            <div className="container">
                <Header />
                <SortTasks />
                <TodoList setEditedTask={setEditedTask} onDelete={onDelete} onEdit={onEdit} />
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    setEditedTask: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default Dashboard;
