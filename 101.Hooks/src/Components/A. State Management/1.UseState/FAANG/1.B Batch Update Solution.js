function Counter() {
  const [count, setCount] = useState(0);

  function incrementMultipleTimes() {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1); // ✅ Uses latest state
    }
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementMultipleTimes}>Increment 5 Times</button>
    </div>
  );
}

//  Solutions :
//  ----------
//  Always use the functional form of setState (prevState => newState) when updating state multiple times in a loop.

/*
✅ Why Does This Work?
    for (let i = 0; i < 5; i++) {
       setCount(prevCount => prevCount + 1); // ✅ Uses latest state
    }

    a. setCount(prevCount => prevCount + 1) ensures each update gets the latest state.
       setCount(0 => 0 + 1)
       setCount(1 => 1 + 1)
       setCount(2 => 2 + 1)
       setCount(3 => 3 + 1)
       setCount(4 => 4 + 1)  => 5

    b. React processes updates in sequence, correctly incrementing count by 5.
*/

