import React, { Component } from 'react';
import Login from "./Login"
import MainContainer from "./MainContainer"
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

  getPokemon = async() => {
    try {
    const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const pokemonJson = await pokemon.json();
    const actualPokemon = [];
    console.log(pokemonJson)
    
    for( let i = 0; i< pokemonJson.length; i++) {
      // console.log(element.url)
      const singlePokemon =  await fetch(pokemonJson.results[i].url);
      console.log(singlePokemon)
      // const singlePokemonJson = await singlePokemon.json();
      // actualPokemon.push(singlePokemon);
    }
    return actualPokemon
    } catch (err) {
        return err
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

  componentDidMount() {
    this.getPokemon().then((data)=>{
      console.log(data)
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.login ? (
        <MainContainer/>
       ) : (
      <Login username={this.state.username} userHandler={this.userHandler} loginHandler={this.loginHandler}/>
      )}
        
      </div>
    );
  }
}

export default App;
