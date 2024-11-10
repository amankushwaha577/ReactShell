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
