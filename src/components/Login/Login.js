import React, { Component } from 'react';
import UserForm from '../UserForm/UserForm';

class Login extends Component {
    render() {
        return (
            <form className="login-register">
                <UserForm />
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default Login;