import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

   // getDerivedStateFromError() lifecycle method catches errors in the child component tree
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

/*
📦 Error Handling in React 🛠️🚀
-----------------------------------------------------------------------------------
getDerivedStateFromError() & componentDidCatch() – These two lifecycle methods are used for error boundaries in React class components.



📌 1. getDerivedStateFromError(error) || Static Method (can't access this)
---------------------------------------------------------------
✅ Static Method: Does Not Have Access To: Component instance (this).
✅ Purpose: Update state when an error occurs during rendering.
✅ sync: Runs Before rendering, synchronously.
✅ Pure: Yes, no side effects.

 static getDerivedStateFromError(error)
  {
        Update state to show fallback UI
        return { hasError: true };
  }

  if (this.state.hasError)   ||-> fallback UI
  {
        return <h1>Something went wrong! 😢</h1>;  
  }



📌 2. componentDidCatch(error, errorInfo) || Instance Method (can access this)
----------------------------------------------------------------
✅ Has Access To: Component instance (this).
✅ Purpose: Log error details and perform side effects.
✅ Runs: After render, synchronously.
✅ ImPure: Side effects allowed.

  componentDidCatch(error, errorInfo)
    {
        // Log error to a service
        console.error('Error logged:', error, errorInfo);
    }




🍼 When Error Boundaries Fail to Catch Errors in React? 🧸
-------------------------------------------------------------------------------------------
Error boundaries in React are powerful but they don't catch all errors. Here’s where they fail:
1. Errors in Event Handlers.
2. Errors in Asynchronous Code (e.g., Promises & setTimeout).
3. Errors in Server-Side Rendering (SSR).
4. Errors Thrown Outside the React Tree (Global Errors).
5. Errors in Error Boundaries Themselves.

1.🚫 Errors in Event Handlers:
------------------------------
        <button onClick={() => { throw new Error("Event Handler Error 💥"); }}>
               Click Me!
        </button>

        💥 Result:
        ----------
        The error boundary will NOT catch it.
        React throws an uncaught error in the console.
        The UI remains unaffected unless you manually handle the error.

        ✅ Why? :
        ----------
        Event handlers run asynchronously and outside the React render phase.

        💡 Fix: 
        ----------
        Wrap the event handler in a try...catch block.



2.🚫  Errors in Asynchronous Code (e.g., Promises & setTimeout):
----------------------------------------------------------------
      useEffect(() => {
        setTimeout(() => {
          throw new Error("Async Error 💥");
        }, 1000);
      }, []);

      💥 Result:
      ----------
      Error boundary fails to catch the error.
      Error appears in the console after 1 second.
      UI remains functional but with an error logged.

      ✅ Why?
      Error boundaries only catch render-phase errors, not async callbacks.


3.🚫  Errors in Server-Side Rendering (SSR):
--------------------------------------------------------------
      💥 Result:
      ----------
      SSR build fails with an error during server rendering.
      No HTML will be generated.
      If hydration occurs, it won't render the page.



4.🚫  Errors Thrown Outside the React Tree (Global Errors):
--------------------------------------------------------------
      window.addEventListener("error", () => {
                 throw new Error("Global Error 💥");
      });

      💥 Result:
      -----------
      The whole app crashes.
      No error boundary can catch this since it's outside the tree.
      White screen of death with a console error message.


5. 🚫 Errors in Error Boundaries Themselves:
--------------------------------------------------------------
      static getDerivedStateFromError() {
            throw new Error("Error Inside Error Boundary 💥");
      }

      💥 Result:
      ------------
      The boundary crashes itself.
      If not nested, it crashes the entire app.
      If nested, the parent boundary can catch the error.

*/




/*
🚀 Functional Component Equivalent:
------------------------------------------------------------------
✅ useErrorBoundary does not exist natively in React.
⚙️ Use libraries like react-error-boundary or a custom useEffect solution.

*/