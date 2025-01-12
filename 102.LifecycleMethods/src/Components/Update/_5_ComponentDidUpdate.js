class ExampleComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        messages: []
      };
      this.listRef = React.createRef();
    }
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
      // Capture the current scroll position
      if (prevState.messages.length < this.state.messages.length) {
        const list = this.listRef.current;
        return list.scrollHeight - list.scrollTop;
      }
      return null; // Return null if no snapshot is needed
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
      // Restore the scroll position
      if (snapshot !== null) {
        const list = this.listRef.current;
        list.scrollTop = list.scrollHeight - snapshot;
      }
    }
  
    render() {
      return (
        <div ref={this.listRef}>
          {this.state.messages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>
      );
    }
  }
  
/*
componentDidUpdate:
------------------
It is triggered after the component has been rendered + the changes have been committed to the DOM + UI is printed.

Points to Note 📝:
------------------------
1. Not Called on Initial Render:
   componentDidUpdate() doesn't run when the component mounts (first render). It only runs when props or state change.

2. is used to perform side effects in functional components, such as 
      (i).   data fetching from API, 
      (ii).  Event subscriptions/ cleanup, 
      (iii). Timer setup/ cleanup,
      (iii). Manual DOM manipulation using Vanilla JS.

3. It can catch snapshot returned(captured) by getSnapshotBeforeUpdate.


Nature:
A. Synchronous but can perform Asynchronous Code .
B. componentDidMount() is Impure because it can have sideeEffects all are pure.

*/