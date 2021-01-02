import React from 'react';

import './app-header.css';



const AppHeader = ({toDo, done}) => {
    return (
        <div>
            <h1 className="header-title">Todo List</h1>
            <p className="status-description">{toDo} more to do, {done} done</p>
        </div>
    );
};

export default AppHeader;