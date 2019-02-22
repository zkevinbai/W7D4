import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_POKEMON:
      // debugger  
      return action.pokemon
    default:
      return state;
  }
}

export default itemsReducer;