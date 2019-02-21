import * as ApiUtil from '../util/api_utils';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";

// Normal Action Creators

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const receivePokemon = (pokemon) => ({
  type: RECEIVE_POKEMON,
  pokemon
})


// Thunk Action Creators

export const requestAllPokemon = () => (dispatch) => (
  ApiUtil.fetchAllPokemon()
  // fetchAllPokemon()
  .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestPokemon = (id) => (dispatch) => (
  ApiUtil.fetchPokemon(id)
  .then(pokemon => dispatch(receivePokemon(pokemon)))
)