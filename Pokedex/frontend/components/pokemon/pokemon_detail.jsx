import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    console.log(this.props.match.params.id)
    return (
      <h1>H!</h1>
    );
  }
}

export default PokemonDetail;