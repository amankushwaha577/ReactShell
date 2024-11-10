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


// In React, forwardRef is a function that allows a component to forward its ref to a child component,
//  enabling the parent to directly access the DOM element or child component's instance.