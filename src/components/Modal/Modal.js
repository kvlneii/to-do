import { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../ThemeContext';

import { CloseIcon } from '../../icons';

import { IconWrapper } from '../index';

import './Modal.scss';

const Modal = ({ title, onClose, children }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="modal" onClick={onClose}>
            <section
                className="modal__body"
                onClick={(e) => e.stopPropagation()}
                style={{ background: theme.primaryBackgroundColor, color: theme.primaryColor }}>
                <div className="modal__header">
                    <h2 className="modal__title">{title}</h2>

                    <IconWrapper onClick={onClose} className={'modal__icon'}>
                        <CloseIcon />
                    </IconWrapper>
                </div>
                {children}
            </section>
        </div>
    );
};

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default Modal;
