import React, { Component } from 'react';

import './add-item.css';

export default class AddItem extends Component {

    state = {
        newitem: true
    };

    render() {
        return (
            <form className="add-item d-flex">
                <input type="text" className="form-control" 
                onChange={this.onLabelChenge} 
                placeholder="What needs to be free"/>
                <button className="add-item btn btn-outline-secondary" type="submit"
                onClick={() => this.props.onItemAdded('Hello!')}>Add Item</button>
            </form>
        );
    };
};