import React, { forwardRef, useRef } from 'react';

const CustomInput = forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

function ForwardRef() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>ForwardRef - <br/>
      <CustomInput ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default ForwardRef;


// forwardRef HOC:
// ----------------------------------------------
// using forwardRef() Parent can directly access the DOM element of child component..

// In parent :
// 1. const inputRef = useRef();         
// 2. <ChildComponent ref={inputRef} />  

// In Child : 
// 3. const ChildComponent = React.forwardRef((props, ref) => {  
//             return <input ref={ref} {...props} />;
//  });

// How it Works:
// useRef Hook: useRef creates a reference in the parent component.
// forwardRef: Passes the ref directly to the input element inside the child component.
// DOM Access: The parent can directly manipulate the input field using the ref.