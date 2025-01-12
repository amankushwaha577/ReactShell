import React, { Component } from 'react';
class _2_getDerivedStateFromProps extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
    }
  
    static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.value !== prevState.value) {
        // Update the state with the new value from props
        return {
          value: nextProps.value
        };
      }
      // if No state update necessary
      return null;
    }
  
    render() {
      return <div>{this.state.value}</div>;
    }
  }

  export default _2_getDerivedStateFromProps;


  // getDerivedStateFromProps is synchronous and pure

/*
📦 What is getDerivedStateFromProps(nextProps, prevState) ?:
   ---------------------------------------------------------

    1. Its used to update state on the basis of new props before rendering(before 1st,2nd any render) when props change.
    2. Its Static Lifecycle Method mean 🧸 Cannot access 'this', 'this.state', 'this.setState' ]
    3. Its pure function cant use side effects.
    4. Returns: An object to update state |or| null to keep state unchanged.

    Not Recommend ❌: Rarely used due to complexity. modern alternative useEffect() ✅

    ⚙️ When Does it Run?
      ✅ On Initial Render (Mounting)
      ✅ On Every Update (Re-render)
      ❌ It's not trigger by state change. ✅ Triggered by: Props changing

*/