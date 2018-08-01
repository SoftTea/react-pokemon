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
    
    for( let i = 0; i< pokemonJson.results.length; i++) {
      console.log(pokemonJson.results[i].url);
      const singlePokemon =  await fetch(pokemonJson.results[i].url);
      const singlePokemonJson = await singlePokemon.json();
      // const singlePokemonJson = await singlePokemon.json();
       actualPokemon.push(singlePokemonJson);
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
