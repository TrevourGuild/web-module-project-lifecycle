import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogImages: []
    }

    componentDidMount() {
        axios.get('https://dog.ceo/api/breed/husky/images')
            .then(res=> {
                console.log(res);
                this.setState({
                    dogImages:res.data.message
                });
            })
            .catch(err=> {
                console.log(err);
            })
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