import { memo, useCallback, useState } from "react";

const Parent = () => {
  const [parent, setParent] = useState(0);
  const [child1, setChild1] = useState(0);
  const [child2, setChild2] = useState(0);

  const updateParent = () => {
    setParent(Math.floor(Math.random() * 100) + 1);
  };

  const updateChild1 = useCallback(() => {
    setChild1(Math.floor(Math.random() * 100) + 1);
  }, [setChild1 ]);

  const updateChild2 = useCallback(() => {
    setChild2(Math.floor(Math.random() * 100) + 1);
  }, [setChild2 ]);

  console.log("Parent rerendered");

  return (
    <>
      <p>Parent - {parent}</p>
      <button onClick={updateParent}>Update Parent</button>
      <Child1 value={child1} updateValue={updateChild1} />
      <Child2 value={child2} updateValue={updateChild2} />
    </>
  );
};
export default Parent

const Child1 = memo(({ value, updateValue }) => {
  console.log("Child 1 rerendered");

  return (
    <>
      <p>Child 1- {value}</p>
      <button onClick={updateValue}>Update Child 1</button>
    </>
  );
});

const Child2 = memo(({ value, updateValue }) => {
  console.log("Child 2 rerendered");

  return (
    <>
      <p>Child 2- {value}</p>
      <button onClick={updateValue}>Update Child 2</button>
    </>
  );
});


/*
There is a limitation of memo, React.memo only memorize the value not functions / objects.

Ex :
Now Children have 2 props (One normal value | other is function type)

      <Child1 value={child1} updateValue={updateChild1} />
      <Child2 value={child2} updateValue={updateChild2} />
                |                     |
                |----> Normal Prop    |----> Function type prop
                
            (React.memo can deal          (useCallback can deal
                 with it )                        with it )

      a). Click On Parent -> State of Parent changes -> Re-render Parent
          See, 
          Parent re-render so its all function will change its reference.
          But we used useCallback() for memozation of Functions. so now updateChild1, updateChild2 will not change its reference.
          
          So None of the Props (neither value nor function) in child1, child2 changed so both will not re-render.

          Op : Parent rerendered.

      b). Click On child1 -> State of Parent changes -> Re-render Parent
                          ( Because state is in parent )
          Parent re-render so its all function will change its reference.
          But we used useCallback() for memozation of Functions. so now updateChild1, updateChild2 will not change its reference.

          Now, prop of Child1 (state-child) is changed so it will re-render.
          So None of the Props (neither value nor function) in child2 changed so it will not re-render.

          Op : Parent rerendered
               Child 1 rerendered
*/

/*
Purpose of useCallback:
------------------------------------------------
1. `useCallback` is used to **cache the function reference** across renders.
2.  Prevents unnecessary re-creation of functions when passed as props to child components.

const memoizedFunction = useCallback(() => {
    // Do something
}, [dependency]);


1. About Function :
-----------------------
    A. ✅ The function must be **pure** and should avoid side effects.
    B. ✅ Avoid using arguments directly inside the function. 
        - ❌ Incorrect: `useCallback((a, b) => { return a + b }, [a, b]);`
        - ✅ Correct: `useCallback(() => calculateSum(a, b), [a, b]);`
    C. ✅ The function can return / not return.

2. About Dependency :
    A. No Array: Function recreated on **every render**.
    B. []: Function created **once** on component mount.
    C. [dep]`: Function created once on mount + Function recreated when **dependency changes**.
*/