function Parent() {
  const [resetKey, setResetKey] = useState(0);

  return (
    <div>
      <MyComponent key={resetKey} />
      <button onClick={() => setResetKey(prevKey => prevKey + 1)}>Reset</button>
    </div>
  );
}

/*
Solution 2 : Reset State When Key Changes :
------------------------------------------
Instead of unmounting the component, 
a. Just pass a key name prop in Child Component.
b. Change it through button in Parent.
c. 👉 Changing the key forces React to re-create the component, resetting its state.

Very Important Note :
--------------------
Q🔹  What Happens When the key Prop Changes in a React Component?
Ans. If the key prop of a component changes, React completely destroys (unmounts) the old component
     and creates (mounts) a new one instead of just re-rendering it.
*/