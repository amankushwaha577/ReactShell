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


// Summary  :
// ------------------------------------
// 1. createContext(): createContext() API Creates a context object.
// 2. useContext(): A hook that allows to access context values provided by a context's Provider.


// A. createContext(defaultValue): 
// -------------------------------
//    We can pass default value when calling to createContext().
//       (i).  If no provider is used : Default value will be used in consumer.
//       (ii). If  provider  is used  : provider will override default value in consumer.
//
//  Returns : it returns context object.
//            it does't hold any data + it have 2 properties.
//  (i). OurContextObject.Provider : it wraps our consumer components and specifies 'value'
//                                   <OurContextObject.Provider value={theme}> 
//                                                       ------consumer children--------
//                                              -----value can be accessed here no matter how deep it is ----
//                                   <OurContextObject.Provider />
//  (i). OurContextObject.Consumer : Outdated ( It was used before useContext())


// B. useContext(OurContextObject): 
// -------------------------------
//    useContext takes previously created context Object and returns value of that context.
//       (i).  If no provider is used : Default  value will be used here.
//       (ii). If  provider  is used  : Provider value will be used here.




// Question 1 : If Multiple Nested Context.Provider are there for Child than nearest ( innermost ) provider's value will be used.
//               <OurContextObject.Provider value={"dark"}> 
//                                  <OurContextObject.Provider value={"blue"}>       // value overriden
//                                            <Child/>                                 => Ans => "blue" (nearest)
//                                  <OurContextObject.Provider />            
//               <OurContextObject.Provider />


// Question 2 : if you are not passing anything in createContext() , value will be undefined.
//              const ThemeContext = createContext();  // value = undefined

// Question 3 : If a default value is not provided + if you are forgot to specify value in provider , value will be undefined.
//              const ThemeContext = createContext();  // value = undefined
//              <OurContextObject.Provider > 
//                                  ------consumer children--------  // value = undefined
//              <OurContextObject.Provider />


// Question 4 : If a default value is provided + if you are forgot to specify value in provider , value will be default.
//              const ThemeContext = createContext(8);  // value = 8
//              <OurContextObject.Provider > 
//                                  ------consumer children--------  // value = 8
//              <OurContextObject.Provider />

