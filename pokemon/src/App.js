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
    setTimeout (()=>{
      this.setState({
        ...this.state,
        pokemon: data
      })
    }, 5000);
  }

  render() {
    console.log("App: Renders Component");
    return (
      <div className="App">
        {
          (this.state.isLoading ? <div>Loading</div>  ? <Pokemon pokemon={this.state.pokemon}>)
        }
      </div>
    );
  }
}

export default App;
