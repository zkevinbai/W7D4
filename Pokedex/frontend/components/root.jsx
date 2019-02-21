import React from "react";
import {Provider} from "react-redux";
import PokemonIndexContainer from "./pokemon/pokemon_index_container";
import { HashRouter, Route } from 'react-router-dom';

class Root extends React.Component{

  constructor(props){
    super(props)
  }


  render(){
    return (
      <Provider store={this.props.store} >
        <HashRouter>
          {/* <PokemonIndexContainer /> */}
          <Route path="/" component={PokemonIndexContainer} />
        </HashRouter>  
      </Provider>
    )
  }
}

export default Root