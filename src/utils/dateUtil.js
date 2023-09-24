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

export const dateUtil = {
    formatCurrentDate,
    formatDate
};
