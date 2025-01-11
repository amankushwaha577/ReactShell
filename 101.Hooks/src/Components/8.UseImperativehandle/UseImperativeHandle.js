import React, { forwardRef, useImperativeHandle, useRef } from 'react';

// CustomInput component
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  // Use `useImperativeHandle` to expose specific methods to the parent  
  // useImperativeHandle( refFromParent , handlerFunction That returns object of exposing methods, dependency )
  useImperativeHandle(ref, () => ({
    focusInput : ()=>  {
      inputRef.current.focus();
    },
    clearInput() {
      inputRef.current.value = '';
    }
  }));

  return <input ref={inputRef} {...props} />;
});

function UseImperativeHandle() {
  const customInputRef = useRef();

  const handleFocus = () => {
    customInputRef.current.focusInput(); // 'focusInput' is defined in useImperativeHandle
  };

  const handleClear = () => {
    customInputRef.current.clearInput(); // 'clearInput' is defined in useImperativeHandle
  };

  return (
    <div>
      <CustomInput ref={customInputRef} placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
      <button onClick={handleClear}>Clear Input</button>
    </div>
  );
}

export default UseImperativeHandle;



// useImperativeHandle(ref, createHandle, [deps]) :
// ------------------------------------------------
// 1. ref: The ref passed from the parent component.
// 2. createHandle: A function that returns the object containing methods that you want to expose to parent.
// 3. deps: Optional dependency array to update the exposed object when values change.

/* useImperativeHandle : 
------------------------------
   When you use useImperativeHandle with forwardRef, 
   only the methods or properties explicitly defined inside the createHandle function will be accessible to the parent.
   other than these nothing will be allowed to parent.

        useImperativeHandle(ref, () => ({
          focus: () => inputRef.current.focus(),
          clear: () => inputRef.current.value = ''
        }));


  ✅ Allowed in Parent:
     inputRef.current.focus(); // Works
     inputRef.current.clear(); // Works
 
  ❌ Not Allowed (Restricted Operations):
     inputRef.current.value = 'Hello';     // ❌ Error, direct value access not exposed.
     inputRef.current.style.color = 'red'; // ❌ Error, style access restricted.

*/


