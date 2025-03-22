/*
Qu1.  When should you NOT use React.memo?
Ans.  a. If the component always re-renders anyway (e.g., it depends on global state or context).
      b. If props change frequently, memoization overhead is worse than re-rendering.
      c. If the component is small & cheap to render, memoization adds unnecessary complexity.

Qu2. So what actually prevent child from re-rendering ?
Ans. React.memo (Higher-Order Component)

Qu3. Do all three (React.memo, useCallback, and useMemo) work during the render phase. ?
Ans. Yes, all three (useMemo, useCallback, and React.memo) work during the render phase.
     🔥 Final Takeaways
            a. Use React.memo for memoizing components.
            b. Use useMemo for memoizing values (objects, arrays).
            c. Use useCallback for memoizing functions.

Qu4. How does React.memo compare props?
Ans. a. It does a shallow comparison of props.
     b. It won't detect changes in objects or arrays.
*/


/*
Qu1. What is a common mistake when using useMemo?
Ans. Mistake 1. : Using useMemo to memoize non-expensive values.
     ❌ Wrong Usage:
      const obj = useMemo(() => ({ key: "value" }), []); ---> Works fine but unnecessary if `obj` is cheap


     Mistake 2  : Using useMemo([]) but missing dependencies, causing stale data.
*/


/*
Qu1. What is useCallback? How is it different from useMemo?
Ans. a. useMemo returns a memoized value.
     b. useCallback returns a memoized function

Qu2. When should you use useCallback?
Ans. If you're passing a function as a prop to a React.memo child.
     The React.memo child component may have performance issues due to function re-creation.

Qu3. What is a common mistake when using useCallback?
Ans. Mistake: Using useCallback([]) without dependencies, leading to stale closures.

     ❌ Wrong Usage (Stale Closure Issue):
     -------------------------------------
      const handleClick = useCallback(() => {
             console.log(count); // Always logs old `count` state
      }, []);

      Solution :
      ----------
      const handleClick = useCallback(() => {
             console.log(count);
      }, [count]);


*/