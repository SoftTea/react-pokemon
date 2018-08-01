import React, { Component } from 'react';

class Login extends Component{
    constructor(){
        super();

    }
    render() {
        return (
            <form onSubmit={this.props.loginHandler}> 
                <input type='text' name='username' placeholder='username' value={this.props.username} onChange={this.props.userHandler} />
                <input type='text' name='password' placeholder='password' value={this.props.password} onChange={this.props.userHandler} />
                <input type='submit' value='Login' />
            </form>

        )
    }
}

export default Login;