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
  