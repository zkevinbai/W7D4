import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = ({pokemon}) => {
  // debugger
  return (
    <li>
      <Link to={"/pokemon/" + pokemon.id }>
        <p>{pokemon.id}</p>
        <p>{pokemon.name}</p>
        <img src={pokemon.image_url} />
      </Link>
    </li>
  )
}

// export const PokemonIndexItem = (pokemon) => {
//   debugger
//   return (
//   <li>
//     {console.log(pokemon)}
//     <p>{pokemon.id}</p>
//     <p>{pokemon.name}</p>
//     <img src={pokemon.image_url} />
//   </li>
//   )
// }