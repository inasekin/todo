import { logDOM } from '@testing-library/react';
import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {


    state = {
        term: ''
    }

    onInputChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onInputChange(term);
        // e.preventDefault();
        // console.log(e.target.value);
        // const searchItems = [];
        // for(var i = 0; i < this.props.todos.length; i++) {
        //     const searchItem = this.props.todos[i].label.toLowerCase().indexOf(e.target.value.toLowerCase());
        //     if (searchItem > -1) {
        //         searchItems.push(this.props.todos[i]);
        //     } else if (e.target.value.length === 0) {
        //         searchItems.push(this.props.todos[i]);
        //     }
        // }
        // this.props.onItemEnter(searchItems);
        // this.setState({
        //     label: e.target.value
        // });
    };
    

    render() {
        const searchText = 'Type here to search';
        const searchStyle = {
            fontSize: '20px'
        };
    
        return (
            <div className="search-panel">
            <input placeholder={ searchText }
            className="foo"
            onChange={this.onInputChange}
            style={ searchStyle }
            value={this.state.term}/>
            </div>
    
        );
    }
}