import React from 'react';

import TodoListItem from './todo-list-item'

const TodoList = () => {
    const items = ['Learn React', 'Build Awesome App'];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
            <li><TodoListItem label="Drink coffee"/></li>
            <li><TodoListItem label="Eat chiken" important={true}/></li>
            <li><TodoListItem label="Build React App" /></li>
        </ul>
    );
};

export default TodoList;