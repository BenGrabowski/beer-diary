import React, { Component } from 'react';

class UserForm extends Component {
    render() {
        return (
            <div className="user-form">
                <div className="username">
                    <label htmlFor="user_name">Username:</label>
                    <input type="text" name='user_name' className="form-input"/>
                </div>

                <div className="password">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name='password' className="form-input"/>
                </div>
            </div>
        );
    }
}

export default UserForm;