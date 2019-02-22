import React from 'react';
import { PokemonIndexItem } from './pokemon_index_item';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    // debugger 
    this.props.requestPokemon(this.props.match.params.pokemonId)
  }

  render () {
    const {pokemon} = this.props
    debugger
    if (!pokemon) return null;
    console.log(pokemon);
    return (
      <div className="show">
        <h1>{pokemon.name}</h1>
        <img src={pokemon.image_url} />
        <a href="http://localhost:3000/#/">Pokedex</a>
      </div>
      // <h1>Debug</h1>
      // <PokemonIndexItem pokemon={this.pokemon}/>
    );
  }
}

export default PokemonDetail;