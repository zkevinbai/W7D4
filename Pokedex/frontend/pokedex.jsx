import React from 'react';
import ReactDOM from 'react-dom';
import { RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import {fetchAllPokemon} from './util/api_utils';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const rootEL = document.getElementById("root");
  const store = configureStore();

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllPokemon = receiveAllPokemon;
  window.RECEIVE_ALL_POKEMON = RECEIVE_ALL_POKEMON;
  window.fetchAllPokemon = fetchAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;

  ReactDOM.render(<Root store={store}/>, rootEL);
})

