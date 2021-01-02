import React, { Component } from 'react';

import './item-status-filter.css';

export default class StatusFilter extends Component {
    render() {
        return (
            <div className="btn-group item-status-filter" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-info">All</button>
                <button type="button" className="btn btn-warning">Active</button>
                <button type="button" className="btn btn-success">Done</button>
            </div>
        );
    }
}