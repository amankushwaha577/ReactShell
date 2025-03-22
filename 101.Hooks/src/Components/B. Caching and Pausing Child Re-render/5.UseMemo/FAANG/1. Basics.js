/*
Question 1 : So what actually prevent child from re-rendering ?
---------------------------------------------------------------
Answer: React.memo (Higher-Order Component)
(i).  Purpose: Prevents re-rendering of a component if its props haven't changed.
(ii). How it works: It memoizes the entire functional component.
      const Component1 = React.memo(({ prop1 }) => {  return ()  });
      During First render Component1 will be cached & It will not re-render unless prop1 changes


Question 2 : Do all three (React.memo, useCallback, and useMemo) work during the render phase. ?
---------------------------------------------------------------
✅ Yes, all three (useMemo, useCallback, and React.memo) work during the render phase.
A. useMemo → Prevents value recalculation by memoizing the result of a function based on dependencies.
B. useCallback → Prevents function recreation unless dependencies change.
C. React.memo → Prevents component re-renders if props haven't changed.

*/