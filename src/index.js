import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {

    const isLoggedIn = true;
    const loginBox = <span>Log in please <br/></span>
    const welcomeBox = <span>Welcome Back! 🤡<br/></span>

    return (
        <div>
            { isLoggedIn ? welcomeBox : loginBox }
            <span>{(new Date()).toString()}</span>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));