import React from "react";

const MyComponent = ({ value }) => {
    console.log("Rendering MyComponent...");
    return <div>{value}</div>;
  };
  
  
  // 1. Generally Memoizing the functional component
  // const MemoizedMyComponent = React.memo(MyComponent);
  
  
  // 2. Customize : Custom comparison function
  const MemoizedMyComponent = React.memo(MyComponent, (prevProps, nextProps) => {
    // Prevent re-render if value prop hasn't changed
    return prevProps.value === nextProps.value;

    return true;
    // no render
  });
  
  function App() {
    const [count, setCount] = React.useState(0);
    const [text, setText] = React.useState('');
  
    return (
      <div>
        <MemoizedMyComponent value={count} />
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    );
  }
  
  export default App;
  