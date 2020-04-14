import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import BeersContext from '../../Context';
import TokenService from '../../services/token-service';

class Nav extends Component {
    static contextType = BeersContext;

    renderLogIn() {
        return (
            <div className='not-logged-in'>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
            </div>
        );
    }

    renderLogOut() {
        return (
            <div className='logged-in'>
                <Link
                    to={'/beers'}
                    className='nav-link'
                >
                    My Beers
                </Link>
                <Link to={'/'}>Logout</Link>
            </div>
        )
    }
    
    render() {      
        return (
            <nav role="navigation" className="nav-bar">
                <Link
                    to={'/'}
                    className="nav-logo"
                >
                    Beer Diary
                </Link>
                {TokenService.hasAuthToken()
                    ? this.renderLogOut()
                    : this.renderLogIn()
                }
            </nav>
        );
    }
}

export default Nav;