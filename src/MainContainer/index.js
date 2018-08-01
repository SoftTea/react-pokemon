
import React, {Component} from 'react';

class MainContainer extends Component{
    constructor(){
        super();

    }
    render(){
        const pokemons = this.props.pokemons;
        console.log(pokemons, 'maincon')
        const pokemonsMap = pokemons.map((item,index)=>{
            console.log(item, 'map items')
            return (
                <div key={index}>
                    <h1> {item.name} </h1>
                    <img src={item.sprites.front_default}/>
                </div>
            )
        });
        return (
            <div>
                <h1>These are Pokemons</h1>
                    {pokemonsMap}
            </div>
        )
    }
}

export default MainContainer