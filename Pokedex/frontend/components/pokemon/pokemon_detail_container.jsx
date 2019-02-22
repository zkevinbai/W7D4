import {connect} from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import {requestPokemon} from '../../actions/pokemon_actions';
import PokemonDetail from '../../components/pokemon/pokemon_detail';

const mapStateToProps = (storeState, ownProps) => {
  // debugger
  return {
    pokemon: storeState.entities.pokemon[ownProps.match.params.pokemonId]
  }
}

const mapDispatchToProps = dispatch => ({
  requestPokemon: (id) => dispatch(requestPokemon(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);

