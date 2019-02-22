import React from "react";
import {Provider} from "react-redux";
import PokemonIndexContainer from "./pokemon/pokemon_index_container";
import { HashRouter, Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';

class Root extends React.Component{

  constructor(props){
    super(props)
  }


  render(){
    return (
      <Provider store={this.props.store} >
        <HashRouter>
          {/* <PokemonIndexContainer /> */}
          <>
            <Route exact path="/" component={PokemonIndexContainer} />
            <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
          </>
        </HashRouter>  
      </Provider>
    )
  }
}

export default Root