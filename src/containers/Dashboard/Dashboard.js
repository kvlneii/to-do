import { Header, TodoList } from '../../containers';
import { SortTasks } from '../../components';

import './Dashboard.scss';

const Dashboard = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <Header />
                <SortTasks />
                <TodoList />
            </div>
        </div>
    );
};

export default Dashboard;
