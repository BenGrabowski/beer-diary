import React, { Component } from 'react';
import TokenService from './services/token-service';

const BeersContext = React.createContext({
    beers: [],
    error: null,
    loggedIn: false,
    setUserId: () => {},
    setLoggedIn: () => {},
    setLoggedOut: () => {}
});

export default BeersContext;

export class ContextProvider extends Component {
    state = {
        beers: [],
        error: null,
        loggedIn: false
    }

    setUserId = id => {
        TokenService.saveUserId(id)
    }

    setLoggedIn = () => {
        this.setState({ loggedIn: true });
    }

    setLoggedOut = () => {
        this.setState({ loggedIn: false });
    }

    render() {
      return (
        <BeersContext.Provider>
          {this.props.children}
        </BeersContext.Provider>
      );
    }
}