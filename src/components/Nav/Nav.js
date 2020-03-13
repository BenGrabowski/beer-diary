import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    
    
    render() {
        return (
            <nav role="navigation" className="nav-bar">
                <Link
                    to={'/'}
                    className="nav-logo"
                >
                    Beer Diary
                </Link>
                <Link
                    to={'/beers'}
                    className='nav-link'
                >
                    My Beers
                </Link>
            </nav>
        );
    }
}

export default Nav;