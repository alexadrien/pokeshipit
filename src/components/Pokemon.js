import React, { Component } from 'react';
import 'whatwg-fetch';
import {getFirstAbility, convertPoundsToKilograms} from './Pokemon.service.js';

const getPokemon = (idPokemon) => {
  return(fetch('https://pokeapi.co/api/v2/pokemon/' + idPokemon)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      return json
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  )
}

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {
        sprites: {}
      },
      ready: false
    }
  }

  componentDidMount = () => {
    getPokemon(this.props.idPokemon)
      .then((pokemon) => {
        this.setState({pokemon: pokemon})
        this.setState({ready: true})
      })
  }

  render() {
    if(this.state.ready){
      return (
        <div>
          <img src={this.state.pokemon.sprites.front_default} alt={this.state.pokemon.name} />
          <p>
            <span>id: {this.props.idPokemon}</span><br />
            <span>name: {this.state.pokemon.name}</span><br />
            <span>weight: {Math.round(convertPoundsToKilograms(this.state.pokemon.weight))} Kg</span><br />
            <span>first ability: {getFirstAbility(this.state.pokemon)}</span>
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <img src="/loading.gif" alt="loading" width="25px"/>
        </div>
    )
    }
  }
}

export default Pokemon;
