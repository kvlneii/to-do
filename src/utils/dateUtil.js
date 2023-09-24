const formatCurrentDate = () => {
    return new Date().toLocaleDateString('en-US');
};

const formatDate = () => {
    const options = { month: 'short', day: '2-digit' };
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', options);
    const year = date.getFullYear();
    return `${year}, ${formattedDate}`;
};

const formattedDate = (date) => {
    return date.toISOString().split('T')[0];
};

export const dateUtil = {
    formatCurrentDate,
    formatDate,
    formattedDate
};
