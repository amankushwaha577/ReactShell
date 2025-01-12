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


// getDerivedStateFromProps is synchronous pauses rendering and pure
// static getDerivedStateFromProps(nextProps, prevState) {  return object/null  }

/*
🎯 What is getDerivedStateFromProps?
    1. Its used to update state on the basis of new props before rendering when props change.
    2. Its Static Lifecycle Method mean 🧸 Cannot access 'this', 'this.state', 'this.setState' ]
    3. Its pure function cant use side effects.
    4. Returns: An object to update state |or| null to keep state unchanged.

    Not Recommend ❌: Rarely used due to complexity. modern alternative useEffect() ✅
*/


/*
    In functional components, you can't truly update state before rendering like in class components. Here's why:
    --------------------------------------------------------------------------------------------------------------
    🚫 Why?
    1. useState initializes the state during the initial render.
    2. useEffect runs after the render cycle only* not before render not even 1st render.

    ❌ What Doesn't Work Before Render:
    1. Calling setCount directly in the component body → Error! 🚫
    2. Using useEffect → Runs after render, not before.

    ✅ The Only Way to Set State Before Rendering: ✅ lazy initializer:
    i). The callback function (() => initialCount) ensures the state is set during the initial render.
    ii).This method only runs once when the component mounts.
        function BabyCounter({ initialCount }) {
          const [count, setCount] = useState(() => initialCount || 0);

          return <h1>Count: {count}</h1>;
        }
        OP: 0 if prop initialCount not provided.
*/