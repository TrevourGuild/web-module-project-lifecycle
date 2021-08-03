import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogImages: [],
        breed: ""
    }

    componentDidMount() {
        axios.get('https://dog.ceo/api/breed/husky/images')
            .then(res=> {
                this.setState({
                    ...this.state,
                    dogImages:res.data.message
                });
            })
            .catch(err=> {
                console.log(err);
            })
    }

    componentDidUpdate(prevProps, prevState) {
        //1. did we update our dogImages?
        //2. did we search for chihuahua?
        //3. make an axios call for husky and make breed husky
        console.log("App: Component Updates");
        console.log("old state: ", prevState);
        console.log("new state: ", this.state);

        // axios.get('https://dog.ceo/api/breed/husky/images')
        //     .then(res=> {
        //         this.setState({
        //             ...this.state,
        //             dogImages:res.data.message
        //         });
        //     })
        //     .catch(err=> {
        //         console.log(err);
        //     })
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            breed:e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images`)
            .then(res => {
                this.setState({
                    ...this.state,
                    dogImages: res.data.message
                })
            })
            .catch(err=> {
                console.log(err);
            })
    }

    render() {
        return(<div>
            <h1>Dog Picture Getting System 1.1</h1>
            <form>
                <input onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Fetch Dogs</button>
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