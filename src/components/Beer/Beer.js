import React, { Component } from 'react';
import './Beer.css';

class Beer extends Component {
    render() {
        return (
            <div className="beer-container">
                <p className="beer-name">{this.props.name}</p>
                <p className="brewery">{this.props.brewery}</p>
                <p className="beer-type">{this.props.type}</p>
                <p className="beer-abv">ABV: {this.props.ABV}%</p>
                <p className="rating">Rating: {this.props.rating}</p>
            </div>
        );
    }
}

export default Beer;