import { useRef } from 'react';

function UncontrolledComponent() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(`Input Value: ${inputRef.current.value}`);
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
