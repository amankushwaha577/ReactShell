import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

   // This lifecycle method catches errors in the child component tree
   static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    console.error("Caught an error:eeeee", error);
    return { hasError: true };
  }

  // componentDidCatch handles the actual logging or error reporting
  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error("Caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p>Fallback UI : Something went wrong!</p>; // You can render a fallback UI here
    }

    return this.props.children;
    // The return this.props.children; statement is used in React components to render the children elements
    //  that are passed between the opening and closing tags of a parent component. This is especially useful 
    //  in components designed to wrap other components or elements, often called wrapper components or container components.
  }
}



export default ErrorBoundary;
