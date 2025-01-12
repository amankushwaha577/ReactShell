class Example extends React.Component {
    constructor(props) {
      super(props);
      
      // Assigning the initial state
      this.state = {
        count: 0
      };
      
      // Accessing the state immediately after 
      // because state initialization is sychronous but state change is asychronous.
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
  

  // 1. constructor() 🛠️ – Initializes state & binds methods.