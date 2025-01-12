class Example extends React.Component {
  constructor(props) {
    super(props);                                             // Always call super(props) first!

    // Assigning the initial state
    this.state = {                                            // than initialize state
      count: 0,
    };

    this.increment = this.increment.bind(this);               // Binding method to `this`

    console.log(this.state.count); // Outputs: 0
     // Accessing the state immediately after
     // because state initialization is sychronous but state change is asychronous.
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

/*
constructor() 🛠️ – Initializes state & binds methods.
----------------------------------------------------------------------

🎯 Key Responsibilities:
1. Call super(props) (Mandatory!): super() calls the parent class (React.Component) constructor.
                                   A.  Always call super(props) in the constructor if using ( this.state +  this.props ).
                                   B.  If you're not using props, you can simply call super() instead of super(props).
                                   
                                   i). Without super(props), accessing 'this' will throw an error.
                                       constructor() {
                                          // ❌ super() missing
                                          this.setState({ count: 5 });    ❌ // Error here
                                       }
                                       Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this'

                                  ii). props must be passed to the super constructor if you plan to use this.props **inside the constructor**.
                                       constructor(props) {
                                            super();  // ❌ No props passed here
                                            console.log(this.props.name); // ❌ this.props => Undefined
                                        }
                                       TypeError: Cannot read property 'name' of undefined

                                       constructor(props) {
                                            super(props);   // ✅ 
                                            console.log(this.props.name); // ✅  Correct
                                        }

                                 iii). However, use super(props) if you need to use props inside the constructor (like for initializing state).
                                       you can use props outside the constructor without calling super(props).
                                       constructor() {
                                            super();  // ❌ props not passed
                                            this.state = { message: "Hello!" };
                                        }

                                        render() {
                                                  return (
                                                          <p>{this.props.name}</p>  ✅ Works fine! 
                                                      );
                                                  }
                                        ✅ React automatically assigns props to the instance (this) outside the constructor.

                                   
2. Initialize State: State is always initialized in the constructor.
                     this.state = { count: 0 }

3. Event Binding: If using regular class methods, event handlers need binding to this.
                  this.increment = this.increment.bind(this); 

                  Note: If you don't bind event handlers in class components, this will be undefined in method when called.
                  increment() {
                           console.log(this);  // ❌ undefined
                           this.setState({ count: this.state.count + 1 }); 
                           // ❌ TypeError: Cannot read properties of undefined (reading 'setState')
                  }


*/
