import React, { Component } from 'react';

import './item-status-filter.css';

export default class StatusFilter extends Component {

    setFilterAll = () => {
        this.props.setFilter('all');
    };
    setFilterActive = () => {
        this.props.setFilter('active');
    };
    setFilterDone = () => {
        this.props.setFilter('completed');
    };

    render() {
        const { filter } = this.props;

        return (
            // 
            //     <button onClick={this.setFilterAll}>All</button>
            //     <button onClick={this.setFilterActive}>Active</button>
            //     <button onClick={this.setFilterDone}>Done</button>
            // 
            <div className="btn-group item-status-filter" role="group" aria-label="Basic example">
                Set filter:{' '}
                {filter === 'all' ? (
                    <span>All</span>
                ) : (
                    <button type="button" className="btn btn-info" onClick={this.setFilterAll}>All</button>
                )}{' '}
                {filter === 'active' ? (
                    <span>Active</span>
                ) : (
                    <button type="button" className="btn btn-outline-secondary btn-filter-active" onClick={this.setFilterActive}>Active</button>
                )}{' '}
                {filter === 'completed' ? (
                    <span>Completed</span>
                ) : (
                    <button type="button" className="btn btn-outline-secondary" onClick={this.setFilterDone}>Done</button>
                )}
            </div>
        );
    }
}