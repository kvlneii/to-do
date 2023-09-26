import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';

import { ThemeContext } from '../../ThemeContext';

import './DatePicker.scss';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ date, onChange, classNames }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={classNames}
            style={{
                backgroundColor: theme.secondaryBackgroundColor,
                color: theme.secondaryColor
            }}>
            <ReactDatePicker
                shouldCloseOnSelect={true}
                required
                selected={date}
                onChange={onChange}
                dateFormat="yyyy/MM/dd"
                wrapperClassName="picker-wrapper"
            />
        </div>
    );
};

DatePicker.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    onChange: PropTypes.func.isRequired,
    classNames: PropTypes.string
};

export default DatePicker;
