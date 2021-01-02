import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

import './app.css';

export default class App extends Component {

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id == id);
            //НЕЛЬЗЯ ИЗМЕНЯТЬ СУЩЕСТВУЮЩИЙ state

            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);

            const newArray = [ ...before, ...after];

            return {
                todoData: newArray
            }
        });
    };

    render() {
        const isLoggedIn = true;
        const loginBox = <span>Log in please <br/></span>;
        const welcomeBox = <span>Welcome Back! 🤡<br/></span>;
    
        return (
            <div className="container app index">
                { isLoggedIn ? welcomeBox : loginBox }
                <span>{(new Date()).toString()}</span>
                <AppHeader />
                <SearchPanel />
                <TodoList todos={this.state.todoData} 
                onDeleted={ this.deleteItem }/>
            </div>
        );
    }
}
