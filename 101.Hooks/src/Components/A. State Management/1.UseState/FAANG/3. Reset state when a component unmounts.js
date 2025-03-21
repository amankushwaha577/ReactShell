import { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {

    return () => {
      setCount(0); 
      // Reset state when component unmounts
      // his approach does NOT work because you cannot update state of an unmounted component. 
    };

  }, []);

  return <p>Count: {count}</p>;
}

/*
Que.  How do you reset state when a component unmounts?
Ans.  🚨 Problem: This approach does NOT work because you cannot update state of an unmounted component. 
                   Instead, use one of the following alternatives.

    🔥 Best Approach?
    1. ✅ For Child components: Unmount child from the parent component.
    2. ✅ For forceful resets: Change the key prop of the component.
    3. ✅ For React Router apps: Reset state based on location.pathname.
*/