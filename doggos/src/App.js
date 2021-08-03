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

            </div>
        </div>);
    }
}

export default App;