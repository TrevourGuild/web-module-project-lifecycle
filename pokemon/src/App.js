import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  state = {
    pokemon: []
  }

  componentDidMount() {
    console.log("App: Component Mounts");
  }

  render() {
    console.log("App: Renders Component");
    return (
      <div className="App">
        {
          (this.state.pokemon.length > 0) ? <Pokemon pokemon={this.state.pokemon} /> : <div>Loading</div>
        }
      </div>
    );
  }
}

export default App;
