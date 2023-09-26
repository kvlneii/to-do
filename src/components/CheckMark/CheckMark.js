import React from 'react';
import PropTypes from 'prop-types';

const CheckMark = ({ checked, onChange, className, label }) => {
    return (
        <label className={className}>
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span>{label}</span>
        </label>
    );
};

CheckMark.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default CheckMark;
