import React, { Component } from "react";
import ErrorBoundary from './Components/Errorboundary';
const Com = () => {
  throw new Error("err");

  // return(
  //   <h1>hgfh</h1>
  // )
};

// Example usage of the error boundary
const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Com />
      </ErrorBoundary>
      <h1>Aman</h1>
    </>
  );
};

export default App;
