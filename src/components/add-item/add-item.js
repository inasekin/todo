import React, { Component } from 'react';

import './add-item.css';

export default class AddItem extends Component {

    state = {
        newitem: true
    };

    render() {
        return (
            <div className="add-item">
                {/* // Form here */}
                <button className="add-item btn btn-outline-secondary" type="submit"
                onClick={() => this.props.onItemAdded('Hello!')}>Add Item</button>
            </div>
        );
    };
};