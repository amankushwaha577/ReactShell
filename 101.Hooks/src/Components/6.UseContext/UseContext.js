import React, { createContext, useContext, useState } from 'react';

// 1. Create a context with a default value
const ThemeContext = createContext('light');  // ThemeContext is Object

function UseContext() {
  const [theme, setTheme] = useState('light');

  // 2. Use the Provider to wrap the component tree and pass down the context value
  return (
    <ThemeContext.Provider value={theme}>   {/* Provider is a Wrapper Component Provided By CreateContext API */}
      <div>
        UseContext<br/>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}
export default UseContext;

// 3. Consume the context in a child component using `useContext`
function Content() {
  const theme = useContext(ThemeContext);
  return <div>The current theme is {theme}</div>;
}












// Introduction :
// -------------------------------------
// The createContext and useContext hooks in React are used for creating and consuming context in a component tree, 
// allowing you to share values between components without passing props down manually at every level. 
// This is particularly useful for managing global state or settings, such as themes, user authentication, or language preferences.



// Summary  :
// ------------------------------------
// 1. createContext: Creates a context object, which you can then provide and consume across components.
// 2. useContext: A hook that allows easy access to context values provided by a context's Provider.
// When to Use: For passing data or functions down deeply nested components without props, such as global state, themes, user settings, or configuration values.



// Provider :
// ---------------------------------------
// 1. The Provider is a component created by React’s createContext() API .
// 2. It directly provides values (such as state or functions) to the context’s consumers in the component tree.
// 3. the Provider is not technically a Higher-Order Component (HOC), although it shares a similar purpose in managing 
// and distributing data across components.
