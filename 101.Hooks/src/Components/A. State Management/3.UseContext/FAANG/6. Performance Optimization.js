
/*
🔥 Summary :
    a. Always wrap context values (objects/arrays) inside useMemo to prevent unnecessary re-renders.
    b. Wrap functions inside useCallback to avoid function re-creation.
    c. Split context into multiple smaller contexts.
            const ThemeContext = createContext(null);
            const UserContext = createContext(null);
            .
            .
    d. Use selectors (useReducer + context selectors) to optimize updates.

    This makes your React app faster, more efficient, and scalable! 🚀
*/

/*
Que.  Other than this How can you prevent unnecessary re-renders in context consumers?
Ans.  React re-renders all components consuming a context when its value changes, even if a component only uses part of the state.

      ❌ Bad Approach (Leads to Unnecessary Re-renders) :
         const AllContext = createContext();

         const { user, theme, bulb} = useContext(AppContext);  // ⚠️ Will re-render if ANY one value in context changes

      ✅ To fix this issue :
         Optimized Approach: split the context into Multiple Contexts
         const UserContext = createContext();
         const ThemeContext = createContext();

         const { user } = useContext(UserContext);
         Now, components consuming only UserContext will not re-render when theme changes.
*/