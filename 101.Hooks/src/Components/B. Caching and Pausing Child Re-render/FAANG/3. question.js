/*
1️⃣ What happens if a functional component wrapped with React.memo has no props?
✅ Answer :
        If a memoized component has no props, it will re-renders everytime when its parent re-renders.
        It makes use of React.memo pointlsee
*/
const Child = memo(() => {
    console.log("Child re-rendered");
    return <p>I'm a child</p>;
  });
  
  const Parent = () => {
    const [count, setCount] = useState(0);
  
    return (
      <>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <Child />
      </>
    );
  };
  