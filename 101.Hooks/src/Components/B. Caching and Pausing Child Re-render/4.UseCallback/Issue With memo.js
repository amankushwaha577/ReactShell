import { memo, useState } from "react";

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

      a). Click On Parent -> State of Parent changes -> Re-render Parent
          See, 
          Parent re-render so its all function will change its reference.
          Child1, Child both are consuming these fun as prop. so both will re-render.

          React.memo is thinking this is a new value in props and it re renders the child component.
          it is just like function is making fool to React.memo.

          Op : Parent rerendered
               Child 1 rerendered
               Child 2 rerendered

      b). Click On child1 -> State of Parent changes -> Re-render Parent
                          ( Because state is in parent )
          Parent re-render so its all function will change its reference.
          Child1, Child both are consuming these fun as prop. so both will re-render

          Op : Parent rerendered
               Child 1 rerendered
               Child 2 rerendered

          Issue ? But actually functions are same they did't change ?? How to deal with Object/Function props.
*/