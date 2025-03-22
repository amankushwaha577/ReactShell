/*
Qu1.  When should you NOT use React.memo?
Ans.  a. If the component always re-renders anyway (e.g., it depends on global state or context).
      b. If props change frequently, memoization overhead is worse than re-rendering.
      c. If the component is small & cheap to render, memoization adds unnecessary complexity.

Qu2. So what actually prevent child from re-rendering ?
Ans. React.memo (Higher-Order Component)

Qu3. Do all three (React.memo, useCallback, and useMemo) work during the render phase. ?
Ans. Yes, all three (useMemo, useCallback, and React.memo) work during the render phase.
      A. useMemo → Prevents value recalculation by memoizing the result of a function based on dependencies.
      B. useCallback → Prevents function recreation unless dependencies change.
      C. React.memo → Prevents component re-renders if props haven't changed.

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