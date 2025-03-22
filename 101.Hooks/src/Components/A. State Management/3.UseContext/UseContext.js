import React, { createContext, useContext, useState } from 'react';

// 1. Create a context with a default value
const ThemeContext = createContext('light');  // ThemeContext is Object

function UseContext() {
  const [theme, setTheme] = useState('light');

  // 2. Wrap Component tree using this context object.
  //    Use the Provider to wrap the component tree and pass down the context value
  //    Provider is a Wrapper Component Provided By CreateContext API
  return (
    <ThemeContext.Provider value={theme}>   
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

/*
Introduction :
-------------------------------------
The createContext and useContext hooks in React are used for creating and consuming context in a component tree, 
allowing you to share values between components without passing props down manually at every level. 

✅ Why Use useContext? :
-------------------------
    a. Avoids Prop Drilling
    b. Makes State Management Easier
    c. Improves Readability

❌ When NOT to Use useContext :
-------------------------------
    a. When passing props one or two levels deep (Props are simpler in such cases).
    b. When state updates very frequently (Frequent context updates can cause unnecessary re-renders).
    c. When state is component-specific (Use useState instead).

API and Hook Involvement  :
--------------------------
    1. createContext(): createContext is a React API used to create a Context object.
                        That allows data to be shared across multiple components without prop drilling.
    2. useContext(): A hook that allows to access context values provided by a context's Provider.
*/


/*
1. createContext(defaultValue) API: 
----------------------------------
      Argument : 
            We can pass default value when calling to createContext().
            (i).  If no provider is used : Default value will be used in consumer.
            (ii). If  provider  is used  : provider will override default value in consumer.

      Returns : it returns context object.
                context object does't hold any data + it have 2 properties.
        (i). OurContextObject.Provider : it wraps our consumer components and specifies 'value'
                                          <OurContextObject.Provider value={theme}> 
                                                              ------consumer children--------
                                                    -----value can be accessed here no matter how deep it is ----
                                          <OurContextObject.Provider />
        (ii). OurContextObject.Consumer : Deprecated(Now use useContext).


2. useContext(OurContextObject): 
-------------------------------
   useContext takes previously created context Object and returns value of that context.
      (i).  If no provider is used : Default  value will be used here.
      (ii). If  provider  is used  : Provider value will be used here.
*/

