import React from 'react';
import ReactDOM from 'react-dom';
// import * as Actions from './actions/pokemon_actions';
import {fetchAllPokemon, fetchPokemon} from './util/api_utils';
import configureStore from './store/store';
import Root from "./components/root";


document.addEventListener("DOMContentLoaded", () => {
  const rootEL = document.getElementById("root");
  const store = configureStore();

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // these are actions
  // window.receiveAllPokemon = Actions.receiveAllPokemon;
  // window.RECEIVE_ALL_POKEMON = Actions.RECEIVE_ALL_POKEMON;
  // window.requestAllPokemon = Actions.requestAllPokemon;
  // window.selectAllPokemon = Actions.selectAllPokemon;
  
  // window.receivePokemon = Actions.receivePokemon;
  // window.requestPokemon = Actions.requestPokemon;
  // window.RECEIVE_POKEMON = Actions.RECEIVE_POKEMON;
  // these are ajax requests
  window.fetchPokemon = fetchPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  ReactDOM.render(<Root store={store}/>, rootEL);
})

