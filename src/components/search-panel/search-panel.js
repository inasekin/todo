import React, { Component } from 'react';

import StatusFilter from '../item-status-filter';

import './search-panel.css';

export default class SearchPanel extends Component {


    state = {
        label: ''
    }

    onInputChange = (e) => {
        e.preventDefault();
        this.props.onItemEnter(this.state.label);
        this.setState({
            label: e.target.value
        });
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
            value={this.state.label}/>
            <StatusFilter />
            </div>
    
        );
    }
}