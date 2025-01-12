class BabyCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 10
      };
    }

    render() {
      return (
        <div>{this.state.count}</div>
      );
    }
  }
  
  export default BabyCounter;
  
/*
🖤 What is render() in Class Components?
The render() method is the required method in class components. It returns the JSX (UI) to be displayed on the screen.

🌟 Rendering in Function Components:
In function components, we don't have the render() method like in class components. Instead, we directly return JSX from the function itself.
No need for render() because the functional component itself is responsible for returning the JSX directly.

💡 Key Points about render() Method:
1. Pure | No side effects: It should only return the UI (JSX) and shouldn’t directly cause changes to the state or interact with APIs.
2. Synchronous : When React calls the functional component, the component immediately returns JSX. This process is synchronous.
3. Called automatically: React calls the render() method when the component's state or props change.


*/