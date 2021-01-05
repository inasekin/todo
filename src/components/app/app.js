import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AddItem from '../add-item';

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        todoDataSearch: []
    };

    componentDidMount() {
        this.setState(({todoDataSearch, todoData}) => {
            return {
                todoDataSearch: [...todoData]
            }
        });
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false, 
            id: this.maxId++
        };
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            //НЕЛЬЗЯ ИЗМЕНЯТЬ СУЩЕСТВУЮЩИЙ state

            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);

            const newArray = [ ...before, ...after];

            return {
                todoData: newArray
            }
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({todoData, todoDataSearch}) => {
            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr,
                todoDataSearch: newArr
            }
        })
    };

    enterItem = (array) => {
        console.log(array);
        this.setState(({todoData}) => {
            const newArray = [
                ...array
            ];

            return {
                todoDataSearch: newArray
            }
        });
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleDone = (id) => {
        this.setState(({todoDataSearch}) => {
            return {
                todoDataSearch: this.toggleProperty(todoDataSearch, id, 'done')
            }
        });
    };

    onToggleImportant = (id) => {
        this.setState(({todoDataSearch}) => {
            return {
                todoDataSearch: this.toggleProperty(todoDataSearch, id, 'important')
            }
        });
    };

    render() {
        const isLoggedIn = true;
        const loginBox = <span>Log in please <br/></span>;
        const welcomeBox = <span>Welcome Back! 🤡<br/></span>;

        const { todoData, todoDataSearch } = this.state;

        const doneCount = todoDataSearch.filter((el) => el.done).length;
        const todoCount = todoDataSearch.length - doneCount;
    
        return (
            <div className="container app index">
                { isLoggedIn ? welcomeBox : loginBox }
                <span>{(new Date()).toString()}</span>
                <AppHeader toDo={todoCount} done={doneCount}/>
                <SearchPanel todos={todoData} onItemEnter={this.enterItem}/>
                <TodoList todos={todoDataSearch} 
                onDeleted={ this.deleteItem }
                onToggleImportant={this.onToggleImportant}
                onToggleDone={this.onToggleDone}/>
                <AddItem todos={todoDataSearch}
                onItemAdded={ this.addItem }/>
            </div>
        );
    }
}
