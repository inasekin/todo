import React from 'react';

import './item-status-filter.css';

const StatusFilter = () => {
    return (
        <div class="btn-group item-status-filter" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info">All</button>
            <button type="button" class="btn btn-warning">Active</button>
            <button type="button" class="btn btn-success">Done</button>
        </div>
    );
};

export default StatusFilter;