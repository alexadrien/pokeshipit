import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import Pokemon from './components/Pokemon.js'
import { Route, Link } from 'react-router-dom'
import DetailPage from './components/DetailPage.js'
import PokemonList from './components/PokemonList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={PokemonList} />
        <Route exact path='/detail_page/:id' component={DetailPage} />
      </div>
    );
  }
}

export default App;
