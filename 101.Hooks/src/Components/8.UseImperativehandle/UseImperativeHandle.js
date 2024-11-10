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

// In React, the useImperativeHandle hook works with forwardRef to restrict complete access of child component to Parent component.
// instead of giving direct access to the child’s entire ref.
