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