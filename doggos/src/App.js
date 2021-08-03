import React from 'react';
import axios from 'axios';

class App extends React.Component {
    render() {
        return(<div>
            <h1>Dog Picture Getting System 1.1</h1>
            <form>
                <input/>
                <button>Fetch Dogs</button>
            </form>
            <div id="dogImage">
                <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"/>
            </div>
        </div>);
    }
}

export default App;