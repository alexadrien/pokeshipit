import React, {Component} from 'react';

const getPokemon = (idPokemon) => {
  return (fetch('https://pokeapi.co/api/v2/pokemon/' + idPokemon).then(function(response) {
    return response.json()
  }).then(function(json) {
    return json
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  }))
}

class DetailPage extends Component {
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
    getPokemon(this.props.match.params.id).then((pokemon) => {
      this.setState({pokemon: pokemon})
      this.setState({ready: true})
    })
  }

  render() {
    if (this.state.ready) {
      console.log(this.state)
      return (<div>
        <img src={this.state.pokemon.sprites.front_default} alt={this.state.pokemon.name}/>
        <p>
          <span>id: {this.props.match.params.id}</span><br/>
          <span>name: {this.state.pokemon.name}</span><br/>
          <span>weight: {this.state.pokemon.weight}
            Kg</span><br/>
        </p>
      </div>);
    } else {
      return (<div>
        <img src="/loading.gif" alt="loading" width="25px"/>
      </div>)
    }
  }
}

export default DetailPage;
