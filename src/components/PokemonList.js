import React, {Component} from 'react';
import Pokemon from './Pokemon.js'
import {Link} from 'react-router-dom'

class PokemonList extends Component {
  render() {
    const pokemons = [1,2,3,4,5,6,7,8,9]
    return (
      <div>
      {pokemons.map((item, key) => <Link key={key} to={'/detail_page/' + item}>
          <Pokemon idPokemon={item}/>
        </Link>)
      }
    </div>)
  }
}

export default PokemonList;
