export const selectAllPokemon = (getState) => {
  let objects = Object.values(getState.entities)[0];
  let array = Object.values(objects);
  return array
}