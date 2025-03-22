

/*
Question 1 : If Multiple Nested Context.Provider are there for Child than nearest ( innermost ) provider's value will be used.
              <OurContextObject.Provider value={"dark"}> 
                                 <OurContextObject.Provider value={"blue"}>       // value overriden
                                           <Child/>                                 => Ans => "blue" (nearest)
                                 <OurContextObject.Provider />            
              <OurContextObject.Provider />


Question 2 : if you are not passing anything in createContext() , value will be undefined.
             const ThemeContext = createContext();  // value = undefined

Question 3 : If a default value is not provided + if you are forgot to specify value in provider , value will be undefined.
             const ThemeContext = createContext();  // value = undefined
             <OurContextObject.Provider > 
                                 ------consumer children--------  // value = undefined
             <OurContextObject.Provider />


Question 4 : If a default value is provided + if you are forgot to specify value in provider , value will be default.
             const ThemeContext = createContext(8);  // value = 8
             <OurContextObject.Provider > 
                                 ------consumer children--------  // value = 8
             <OurContextObject.Provider />


Question 5 : value prop should only be called as "value" in Provider 
             <OurContextObject.Provider theme={theme}>                   // Warning :  The `value` prop is required for the ..
                                        ------consumer children--------
             <OurContextObject.Provider />
             Also Code will not work.
             */

