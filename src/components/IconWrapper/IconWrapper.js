import React from 'react';
import PropTypes from 'prop-types';

const IconWrapper = ({ children, onClick, className, important = false }) => {
    return (
        <div
            className={className}
            onClick={onClick}
            style={{
                fill: important ? '#f43f5e' : 'none',
                stroke: important ? '#f43f5e' : 'currentColor'
            }}>
            {children}
        </div>
    );
};

IconWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    important: PropTypes.bool
};

export default IconWrapper;
