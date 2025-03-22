const Parent = () => {
  const [parent, setParent] = useState(0);

  const updateParent = () => {
    setParent(Math.floor(Math.random() * 100) + 1);
  };

  console.log("Parent rerendered");

  return (
    <>
      <p>Parent - {parent}</p>
      <button onClick={updateParent}>Update Parent</button>
      <Child1  />
      <Child2  />
    </>
  );
};

const Child1 = () => {
  console.log("Child 1 rerendered");
  return (
    <p>Child 1 </p>
  );
};

const Child2 = () => {
  console.log("Child 2 rerendered");
  return (
    <p>Child 2</p>
  );
};
/* 
Just remember one concept :
--------------------------
“whenever a state of parent component get’s updated all it’s child components get’s rendered along side that parent component”.

When you click button of Parent:  Parent state changes -> parent re-render -> All child also re-render
OP :
      Parent rerendered
      Child 1 rerendered
      Child 2 rerendered

      Issue : Why Children re-render ?? even their props are not changed.
              
*/

