import {connect} from "react-redux";
import {selectAllPokemon} from '../../reducers/selectors';
import {requestAllPokemon} from '../../actions/pokemon_actions';
import PokemonIndex from '../../components/pokemon/pokemon_index';

const mapStateToProps = storeState => ({
  pokemon: selectAllPokemon(storeState),
  test: "test"
})

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon(dispatch))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);