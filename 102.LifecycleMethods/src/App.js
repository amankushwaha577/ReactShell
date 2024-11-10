import React, { Component } from 'react';
//Mounting
import _2_getDerivedStateFromProps from './Mount/_2_getDerivedStateFromProps'
import _2_UseState from './Mount/_2_UseState'
import _4_ComponentDidMount from './Mount/_4_ComponentDidMount'

// Updating
import _2_ShouldComponentUpdate from './Update/_2_ShouldComponentUpdate'
import _2_Memo from './Update/_2_Memo'
class App extends Component {
  // Mounting Phase
  constructor(props) {
    super(props);
    console.log('Constructor - Mounting Phase');
    this.state = {
      message: 'Hello, React!',
    };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('getDerivedStateFromProps - Mounting and Updating Phase');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount - Mounting Phase');
  }

  // Updating Phase
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate - Updating Phase');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate - Updating Phase');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate - Updating Phase');
  }

  // Unmounting Phase
  componentWillUnmount() {
    console.log('componentWillUnmount - Unmounting Phase');
  }

  // Error Handling Phase
  componentDidCatch(error, info) {
    console.log('componentDidCatch - Error Handling Phase');
  }

  // Rendering Phase
  render() {
    console.log('render - Mounting and Updating Phase');
    return (
      <div>
        {/* Mount */}
        <_2_getDerivedStateFromProps value="getDerived1"/>
        <_2_UseState value="getDerived2"/>
        <_4_ComponentDidMount />

        {/* Update */}
        <_2_ShouldComponentUpdate />
        <_2_Memo />
      </div>
    );
  }
}

export default App;
