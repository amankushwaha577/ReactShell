import React, { Component } from 'react';

class ClassComponent extends Component {
  // Constructor to initialize state
  constructor(props) {
    super(props);
    this.state = {
      count: 0, // State variable to store the count
    };
  }

  // Event handler to increment the count
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Event handler to decrement the count
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  // Lifecycle method: called after the component mounts
  componentDidMount() {
    console.log('Counter component mounted');
  }

  // Lifecycle method: called before the component unmounts
  componentWillUnmount() {
    console.log('Counter component will unmount');
  }

  // Rendering the component JSX
  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default ClassComponent;
