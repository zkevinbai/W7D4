import React from "react";
import {Provider} from "react-redux";
import PokemonIndexContainer from "./pokemon/pokemon_index_container";

class Root extends React.Component{

  constructor(props){
    super(props)
  }


  render(){
    return (
      <Provider store={this.props.store} >
        <PokemonIndexContainer/>
      </Provider>
    )
  }
}

export default Root