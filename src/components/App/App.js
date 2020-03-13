import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import BeerList from '../BeerList/BeerList';

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
        </main>
      </div>
    );
  }
}

export default App;