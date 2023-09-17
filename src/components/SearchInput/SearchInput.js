import { useContext } from 'react';

import { ThemeContext } from '../../ThemeContext';
import { useAppContext } from '../../AppContext';

import { SearchIcon } from '../../icons';

import IconWrapper from '../IconWrapper/IconWrapper';

import './SearchInput.scss';

const SearchInput = () => {
    const { theme } = useContext(ThemeContext);
    const { searchedTerm, setSearchedTerm } = useAppContext();

    const handleSearchChange = (e) => {
        const newSearchedTerm = e.target.value;
        setSearchedTerm(newSearchedTerm);
    };

    return (
        <div className="search-panel">
            <input
                type="text"
                className="search-panel__input"
                placeholder="Search task"
                onChange={handleSearchChange}
                value={searchedTerm}
                style={{
                    backgroundColor: theme.secondaryBackgroundColor,
                    color: theme.secondaryColor
                }}
            />

            <IconWrapper onClick={() => {}} className={'search-panel__icon'}>
                <SearchIcon />
            </IconWrapper>
        </div>
    );
};

export default SearchInput;
