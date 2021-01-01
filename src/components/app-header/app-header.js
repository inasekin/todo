import React from 'react';

import './app-header.css';

const AppHeader = () => {
    return (
        <div>
            <h1 className="header-title">Todo List</h1>
            <p className="status-description">1 more to do, 3 done</p>
        </div>
    );
};

export default AppHeader;