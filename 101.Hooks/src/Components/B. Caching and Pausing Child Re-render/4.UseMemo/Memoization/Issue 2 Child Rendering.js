const Parent = () => {
    const [parent, setParent] = useState(0);
    const [child1, setChild1] = useState(0);
    const [child2, setChild2] = useState(0);
  
    const updateParent = () => {
      setParent(Math.floor(Math.random() * 100) + 1);
    };
  
    const updateChild1 = () => {
      setChild1(Math.floor(Math.random() * 100) + 1);
    };
  
    const updateChild2 = () => {
      setChild2(Math.floor(Math.random() * 100) + 1);
    };
  
    console.log("Parent rerendered");
  
    return (
      <>
        <p>Parent - {parent}</p>
        <button onClick={updateParent}>Update Parent</button>
        <button onClick={updateChild1}>Update Child 1</button>
        <button onClick={updateChild2}>Update Child 2</button>
        <Child1 value={child1} />
        <Child2 value={child2} />
      </>
    );
  };
  
  const Child1 = ({ value }) => {
    console.log("Child 1 rerendered");
  
    return (
      <p>Child 1 - {value}</p>
    );
  };
  
  const Child2 = ({ value }) => {
    console.log("Child 2 rerendered");
  
    return (
      <p>Child 2- {value}</p>
    );
  };

/*
      a). Click On Parent -> State of Parent changes -> Re-render Parent
          All Its child will re-render
          Op : Parent rerendered
               Child 1 rerendered
               Child 2 rerendered

      b). Click On child1 -> State of Parent changes -> Re-render Parent
          All Its child will re-render
          Op : Parent rerendered
               Child 1 rerendered
               Child 2 rerendered

          Issue ? Why Child2 is re-render ?? even its prop is not changed ?
*/