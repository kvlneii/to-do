import { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../ThemeContext';

import './Modal.css';

// TODO: update modal class names
const Modal = ({ title, onClose, children }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="modal" onClick={onClose}>
            <section
                className="section"
                onClick={(e) => e.stopPropagation()}
                style={{ background: theme.secondaryBackgroundColor, color: theme.primaryColor }}
            >
                <div className="section__header">
                    <h2 className="section__header__title">{title}</h2>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="section__header__icon"
                        onClick={onClose}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
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
