import React, { Component } from 'react';
import './AddBeer.css';

class AddBeer extends Component {
    state = {
        beerName: undefined,
        brewery: undefined,
        type: undefined,
        ABV: undefined,
        rating: undefined
    }

    updateBeerName = event => {
        this.setState({ beerName: event.target.value });
    }

    updateBrewery = event => {
        this.setState({ brewery: event.target.value });
    }

    updateType = event => {
        this.setState({ type: event.target.value });
    }

    updateABV = event => {
        this.setState({ ABV: event.target.value });
    }

    updateRating = event => {
        this.setState({ rating: event.target.value });
    }
    
    render() {
        return (
            <div className="add-beer-form">
                <label htmlFor="beer-name">Beer Name: </label>
                <input 
                    type="text" 
                    name="beer-name" 
                    onChange={event => this.updateBeerName(event)}
                />

                <label htmlFor="brewery">Brewery: </label>
                <input 
                    type="text" 
                    name="brewery" 
                    onChange={event => this.updateBrewery(event)}
                />

                <label htmlFor="beer-type">Type: </label>
                <select 
                    name="beer-type"
                    onChange={event => this.updateType(event)}
                >
                    <option value="ipa">IPA</option>
                    <option value="lager">Lager</option>
                    <option value="stout">Stout</option>
                    <option value="amber">Amber</option>
                    <option value="porter">Porter</option>
                    <option value="light">Light</option>
                    <option value="sour">Sour</option>
                    <option value="pale-ale">Pale ale</option>
                </select>

                <label htmlFor="abv">ABV: </label>
                <input 
                    type="number" 
                    name="abv" 
                    onChange={event => this.updateABV(event)}
                />

                <label htmlFor="rating">Rating: </label>
                <input 
                    type="number" 
                    name="rating" 
                    onChange={event => this.updateRating(event)}
                />

                <button className="save-beer">Save</button>
                <button 
                    className="back"
                    onClick={() => this.props.history.push('/beers')}
                >
                    Back
                </button>
            </div>
        );
    }
}

export default AddBeer;