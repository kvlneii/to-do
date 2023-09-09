const statusIds = {
    ALL: 'all',
    IMPORTANT: 'important',
    COMPLETED: 'completed',
    UNCOMPLETED: 'uncompleted',
    CURRENT_DAY: 'currentDay'
};

const allStatuses = [
    { name: statusIds.ALL, label: 'All tasks' },
    { name: statusIds.IMPORTANT, label: 'Important tasks' },
    { name: statusIds.COMPLETED, label: 'Completed tasks' },
    { name: statusIds.UNCOMPLETED, label: 'Uncompleted tasks' },
    { name: statusIds.CURRENT_DAY, label: "Today's tasks" }
];

export { statusIds, allStatuses };
