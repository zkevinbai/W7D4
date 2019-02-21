import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestAllPokemon()
  }
  
  render () {
    debugger
    return(
      <ul>
        {this.props.pokemon.map((monster) => {
          return (<li>
            <p>{monster.name}</p>
            <img src={monster.image_url}/>
          </li>)
        })}
      </ul>
    );svg
  }
}

export default PokemonIndex