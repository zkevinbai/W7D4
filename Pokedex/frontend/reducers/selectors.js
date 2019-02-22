export const selectAllPokemon = (getState) => {
  let objects = Object.values(getState.entities.pokemon);
  let array = Object.values(objects);
  return array
}

export const selectPokemon = (getState) => {
  
}