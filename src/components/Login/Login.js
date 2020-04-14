import React, { Component } from 'react';
import UserForm from '../UserForm/UserForm';
import Context from '../../Context';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

class Login extends Component {
    
    static contextType = Context;

    static defaultProps = {
        location: {},
        history: { push: () => {} },
        onLoginSuccess: () => {},
    }

    state = { error: null }

    handleSubmitJwtAuth = event => {
        event.preventDefault();
        this.setState({ error: null });
        const { user_name, password } = event.target;

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value
        })
            .then(res => {
                user_name.value = '';
                password.value = '';
                TokenService.saveAuthToken(res.authToken);
                TokenService.saveUserId(res.user_id);
                this.handleLoginSuccess(res.user_id);
            })
            .catch(res => {
                this.setState({ error: res.error })
            });
    }

    handleLoginSuccess = user_id => {
        this.context.setUserId(user_id);
        const { history } = this.props;
        history.push('/beers');
        this.context.setLoggedIn();
    }
    
    render() {
        return (
            <form 
                className="login-register"
                onSubmit={this.handleSubmitJwtAuth}
            >
                <UserForm />
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default Login;