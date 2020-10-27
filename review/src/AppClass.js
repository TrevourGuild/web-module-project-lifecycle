import React from "react";

class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Warren"
    };
    console.log("APPCLASS: Component Constructed");
  }

  handleNameButtonClick = (e) => {
    this.setState({
      ...this.state,
      name: "Allison"
    });
  };

  componentDidMount() {
    console.log("APPCLASS: Component Mounted");
  }

  render() {
    console.log("APPCLASS: Component Rendered");
    return (
      <div>
        <h1>Hello {this.state.name}.</h1>
        <button onClick={this.handleNameButtonClick}>MAKE IS ALLISON</button>
      </div>
    );
  }
}

export default AppClass;
