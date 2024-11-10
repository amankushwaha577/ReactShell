import React, {Fragment, useEffect, useLayoutEffect} from 'react'; 

function UseLayoutEffect() { 
  
  useEffect(()=>{
    console.log("First");
  },[])
  useEffect(()=>{
    console.log("Second");
  },[])
  useLayoutEffect(()=>{
    console.log("Third");
  },[])

  // Op:  Third,  First,  Second

  // Asynchronous: useEffect is asynchronous and runs after the browser has painted and the user has seen the updated UI.
  // useLayoutEffect is synchronous and runs synchronously after all DOM mutations. 
  // It fires before the browser has painted, making it suitable for operations that need to be done before the user sees the updated UI.

  return ( 
    <Fragment> 
      <div> 
      </div>
    </Fragment> 
  ); 
}; 
  
export default UseLayoutEffect;