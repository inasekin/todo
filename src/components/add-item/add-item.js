import React, { Component } from 'react';

import './add-item.css';

export default class AddItem extends Component {

    render() {
        return (
            <div className="add-item">
                <input type="text" className="add-item-input" />
                <button class="add-item btn btn-primary" type="submit">Add Item</button>
            </div>
        );
    };
};