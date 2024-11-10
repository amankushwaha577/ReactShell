class Example extends React.Component {
    constructor(props) {
      super(props);
      
      // Assigning the initial state
      this.state = {
        count: 0
      };
      
      // Accessing the state immediately after
      console.log(this.state.count); // Outputs: 0
    }
  
    render() {
      return (
        <div>
          <p>Count: {this.state.count}</p>
        </div>
      );
    }
  }
  