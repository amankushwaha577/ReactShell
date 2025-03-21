import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
      console.log("Updated Count:", count);
    }, 1000);
  }, []);

  return <p>Count: {count}</p>;
}

export default App;
