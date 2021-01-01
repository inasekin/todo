import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

import './index.css';

const App = () => {

    const isLoggedIn = true;
    const loginBox = <span>Log in please <br/></span>;
    const welcomeBox = <span>Welcome Back! 🤡<br/></span>;

    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make Awesome App', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3}
    ];

    return (
        <div className="container app index">
            { isLoggedIn ? welcomeBox : loginBox }
            <span>{(new Date()).toString()}</span>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));