import React, { Component } from 'react';

import './item-status-filter.css';

export default class StatusFilter extends Component {

    render() {
        const {setFilterActive, setFilterAll, setFilterDone} = this.props

        return (
            <div className="btn-group item-status-filter">
                <button onClick={setFilterAll} className="btn btn-primary btn-filter-all">All</button>
                <button onClick={setFilterActive} className="btn btn-primary btn-filter-active">Active</button>
                <button onClick={setFilterDone} className="btn btn-primary btn-filter-done">Done</button>
            </div>
        );
    }
}
