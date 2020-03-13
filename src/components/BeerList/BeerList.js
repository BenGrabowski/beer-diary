import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import STORE from '../../STORE';
import Beer from '../Beer/Beer';
import './BeerList.css';

class BeerList extends Component {
    render() {
        const beerList = STORE.map(beer => {
            return <Beer 
                name={beer.beer_name}
                brewery={beer.brewery}
                type={beer.beer_type}
                ABV={beer.ABV}
                rating={beer.rating}
                id={beer.id}
                key={beer.id}
            />
        })
        
        return (
            <div className="beer-list-container">
                {/* <h2>Beers</h2> */}
                <ul className="beer-list">
                    {beerList}
                </ul>
                <Link 
                    to='/add-beer'
                >
                    Add Beer
                </Link>
            </div>
        )
    }
}

export default BeerList;