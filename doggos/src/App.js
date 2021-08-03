import React from 'react';
import axios from 'axios';

class App extends React.Component {
    render() {
        const dogImages = [
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg"
        ];

        return(<div>
            <h1>Dog Picture Getting System 1.1</h1>
            <form>
                <input/>
                <button>Fetch Dogs</button>
            </form>
            <div id="dogImage">
                {
                    dogImages.map(image => {
                        return(<img src={image} alt={image}/>);
                    })
                }
            </div>
        </div>);
    }
}

export default App;