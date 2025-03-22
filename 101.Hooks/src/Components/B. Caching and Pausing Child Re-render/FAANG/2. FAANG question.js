const Child = ({ obj }) => {
    console.log("Child re-rendered");
    return <p>{obj.value}</p>;
  };
  
  const Parent = () => {
    const [count, setCount] = useState(0);
    const obj = { value: "Hello" };
  
    return (
      <>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <Child obj={obj} />
      </>
    );
  };
  
/*Ques. Given the following code, optimize it to prevent unnecessary re-renders. */

const Childd = memo(({ obj }) => {
    console.log("Child re-rendered");
    return <p>{obj.value}</p>;
  });
  
  const Parentt = () => {
    const [count, setCount] = useState(0);
  
    const obj = useMemo(() => ({ value: "Hello" }), []);
  
    return (
      <>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <Child obj={obj} />
      </>
    );
  };

/*
✅ React.memo prevents unnecessary re-renders.
✅ useMemo ensures obj reference remains stable across renders.
*/
  