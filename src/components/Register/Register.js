import React, { Component } from 'react';
import UserForm from '../UserForm/UserForm';

class Register extends Component {
    render() {
        return (
            <div className="login-register">
                <UserForm />
                <button type="submit">Register</button>                
            </div>
        );
    }
}