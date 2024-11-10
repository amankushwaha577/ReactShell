import React, { Component } from 'react';

class _4_ComponentDidMount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: true
        };
    }

    componentDidMount() {
        console.log('componentDidMount is called'); // Synchronous
        // Simulate an async operation
        setTimeout(() => {
            this.setState({ data: 'Fetched Data', loading: false });
        }, 1000);
    }

    render() {
        console.log('Render is called'); // Synchronous
        return (
            <div>
                {this.state.loading ? 'Loading...' : this.state.data}
            </div>
        );
    }
}

export default _4_ComponentDidMount;
