import React, { Component } from 'react';
import Login from "./Login"
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      login: false,
    }
  }

  userHandler = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  loginHandler = (e) => {
    e.preventDefault();
    console.log('test');
    this.setState({
      login: true
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Login username={this.state.username} userHandler={this.userHandler} loginHandler={this.loginHandler}/>
      </div>
    );
  }
}

export default App;
