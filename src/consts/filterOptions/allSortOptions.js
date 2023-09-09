const sortOptionIds = {
    ORDER_ADDED: 'orderAdded',
    EARLIEST_FIRST: 'earliestFirst',
    LATEST_FIRST: 'latestFirst'
};

const allSortOptions = [
    { name: sortOptionIds.ORDER_ADDED, label: 'Order Added' },
    { name: sortOptionIds.EARLIEST_FIRST, label: 'Earliest First' },
    { name: sortOptionIds.LATEST_FIRST, label: 'Latest First' }
];

export { sortOptionIds, allSortOptions };
