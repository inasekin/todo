import React from 'react';

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };

    return (
        <input placeholder={ searchText }
        className="foo"
        style={ searchStyle }/>
    );
};

export default SearchPanel;