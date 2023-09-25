import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import { ThemeContext } from '../../ThemeContext';

import './PickerDate.scss';
import 'react-datepicker/dist/react-datepicker.css';

const PickerDate = ({ date, onChange, classNames }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={classNames}
            style={{
                backgroundColor: theme.secondaryBackgroundColor,
                color: theme.secondaryColor
            }}>
            <DatePicker
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

PickerDate.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    onChange: PropTypes.func.isRequired,
    classNames: PropTypes.string.isRequired
};

export default PickerDate;
