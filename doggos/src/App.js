import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogImages: [
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg"
        ]
    }


    render() {
        return(<div>
            <h1>Dog Picture Getting System 1.1</h1>
            <form>
                <input/>
                <button>Fetch Dogs</button>
            </form>
            <div id="dogImage">
                {
                    this.state.dogImages.map(image => {
                        return(<img width={200} src={image} alt={image}/>);
                    })
                }
            </div>
        </div>);
    }
}

export default App;