import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    const items = ['Learn React', 'Build Awesome App', 'Drink coffee'];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
            <li>{items[2]}</li>
        </ul>
    );
};

const AppHeader = () => {
    return (
        <h1>My Todo List</h1>
    );
};

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

const App = () => {

    const isLoggedIn = true;
    const loginBox = <span>Log in please <br/></span>
    const welcomeBox = <span>Welcome Back! 🤡<br/></span>

    const value = '<script>alert("")</script>';
    return (
        <div>
            { isLoggedIn ? welcomeBox : loginBox }
            <span>{(new Date()).toString()}</span>
            { value }
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));