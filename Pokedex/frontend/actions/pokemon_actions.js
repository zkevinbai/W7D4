import * as ApiUtil from '../util/api_utils';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

// Normal Action Creators

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})


// Thunk Action Creators

export const requestAllPokemon = () => (dispatch) => (
  ApiUtil.fetchAllPokemon()
  // fetchAllPokemon()
  .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)