import React from 'react';

import StatusFilter from '../item-status-filter';

import './search-panel.css';

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };

    return (
        <div className="search-panel">
        <input placeholder={ searchText }
        className="foo"
        style={ searchStyle }/>
        <StatusFilter />
        </div>

    );
};

export default SearchPanel;