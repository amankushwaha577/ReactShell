import React, { Component } from 'react';

class _2_ShouldComponentUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Only update if the count has changed
        return nextState.count !== this.state.count;

        // Here component will never re-render after mountation
        return false;
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        console.log('Rendering:', this.state.count);
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default _2_ShouldComponentUpdate;

/*
🎯 What is shouldComponentUpdate(nextProps, nextState)?
--------------------------------------------------------
   a. Purpose: Controls if the component should re-render or not.
   b. Default Behavior: Always returns true.


🎯 Functional Equivalent of shouldComponentUpdate() – React.memo()
-------------------------------------------------------------------
   React.memo() wraps your component and optimizes its rendering by checking if the props have changed.

    1️⃣ React.memo() Syntax:
    ------------------------------------------------------
            const ComponentName = React.memo((props) => {
            // Component Code
            return <div>{JSX code}</div>;
            });

    2️⃣ React.memo() with Custom Comparison Function Syntax: It can be any logic.
    --------------------------------------------------------
             const ComponentName = React.memo((props) => {
                                                                            // Component Code
                                            return <div>{ JSX code }</div>;
                                            }, 
                  (prevProps, nextProps) => {
                            // Comparison logic
                            return prevProps.someValue === nextProps.someValue; // Return true if no re-render needed
            });


✅ Key Characteristics of Both shouldComponentUpdate() & React.memo():
----------------------------------------------------------------------
1. Pure: ✅ No side effects.
2. Synchronous: ✅ Runs immediately before rendering.
3. Performance Boost: ✅ Prevents unnecessary re-renders.
*/