import React, { Component } from 'react';

import './item-status-filter.css';

export default class StatusFilter extends Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' },
    ];

    render() {
        // const {setFilterActive, setFilterAll, setFilterDone} = this.props

        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'active' : '';
            return (
                <button className={`btn btn-primary ${clazz}`} 
                key={name} 
                onClick={() => onFilterChange(name)}>{label}</button>
            );
        });

        return (
            <div className="btn-group item-status-filter">
                {buttons}
            </div>
        );
    }
}
