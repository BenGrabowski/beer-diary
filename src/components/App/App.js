import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import BeerList from '../BeerList/BeerList';
import AddBeer from '../AddBeer/AddBeer';
import Login from '../Login/Login';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Nav />
        <main>
          <Route 
            exact
            path='/'
            component={LandingPage}
          />
          <Route 
            path='/beers'
            component={BeerList}
          />
          <Route 
            path='/add-beer'
            component={AddBeer}
          />
          <Route 
            path='/login'
            component={Login}
          />
        </main>
      </div>
    );
  }
}

export default App;