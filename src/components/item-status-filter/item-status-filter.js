import React, { Component } from 'react';

import './item-status-filter.css';

export default class StatusFilter extends Component {

    onFilterActive = (e) => {
        e.preventDefault();
        console.log(123);
        const filteredItemsActive = [];
        for(var i = 0; i < this.props.todos.length; i++) {
            const filteredItemsActive = this.props.todos.filter();
            console.log(filteredItemsActive);
        }
    }

    render() {
        return (
            <div className="btn-group item-status-filter" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-info">All</button>
                <button type="button" className="btn btn-outline-secondary btn-filter-active" onClick={this.onFilterActive}>Active</button>
                <button type="button" className="btn btn-outline-secondary">Done</button>
            </div>
        );
    }
}