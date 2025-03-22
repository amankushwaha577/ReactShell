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
      <button onClick={updateChild1}>Update Child 1</button>
      <button onClick={updateChild2}>Update Child 2</button>
      <Child1 value={child1} />
      <Child2 value={child2} />
    </>
  );
};
export default Parent;

const Child1 = memo(({ value }) => {
  console.log("Child 1 rerendered");

  return (
    <p>Child 1 - {value}</p>
  );
});

const Child2 = memo(({ value }) => {
  console.log("Child 2 rerendered");

  return (
    <p>Child 2- {value}</p>
  );
});

/*
🚀 Explanation:

Que.  Why Use React.memo()?
Ans.  React.memo() memoizes a component, meaning it only re-renders if its props change.
      If Parent updates but child1 or child2 doesn't change, the respective child component won't re-render.

      a). Click On Parent -> State of Parent changes -> Re-render Parent
          (Child will not re-render cause their Props did't change)
          Op : Parent rerendered

      b). Click On child2 -> State of Parent changes -> Re-render Parent
                                    +
          Now child2 state is prop in <Child2> component, so its prop is now changed.

                          -> Prop of Child2 changed  -> Re-render Child2

          (Child1 will not re-render cause its Props did't change)

          Op : Parent rerendered
               Child 2 rerendered
*/