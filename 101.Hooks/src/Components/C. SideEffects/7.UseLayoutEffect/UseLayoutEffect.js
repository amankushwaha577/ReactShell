import React, {Fragment, useEffect, useLayoutEffect} from 'react'; 

function UseLayoutEffect() { 
  
  useEffect(()=>{
    console.log("First");
  },[])
  useEffect(()=>{
    console.log("Second");
  },[])
  useLayoutEffect(()=>{
    console.log("Third");
  },[])

  // Op:  Third,  First,  Second

  /* Render(DOM Mutations)       ->         Browser Painting  -->  Here useEffect works
                          | Synchronous  |
                          ----------------
                      Here useLayoutEffect works   
                      
   a. Asynchronous      useEffect : useEffects is asynchronous and runs after render (after the browser has painted and the user has seen the updated UI).
   b. Synchronous useLayoutEffect : useLayoutEffect is synchronous and runs synchronously after all DOM mutations. 
                                    But before the browser has painted.
  */
  return ( 
   <></>
  ); 
}; 
export default UseLayoutEffect;


/*
useLayoutEffect : 
------------------------------------------
useLayoutEffect is a React Hook used for running side effects synchronously after the DOM mutations(after rendering) 
but before the browser paints the screen.

          useLayoutEffect(() => {
                       Side effect logic here
            return () => {
                       Cleanup logic here
            };
          }, [dependencies]);


1. Impure : It's Impure because it directly interacts/ manipulate the DOM, which is side effects.
            Making an API call inside useLayoutEffect is possible, but it's not recommended. It will block UI.

            useLayoutEffect(() => {
                    // API Call (but blocking rendering)

              const fetchData = async () => {
                const response = await fetch('https://api.example.com/data');
                const result = await response.json();
                setData(result);
              };

              fetchData();
            }, []);

2. Synchronous : It will block UI.


Feature	useEffect	vs useLayoutEffect :
-------------------------------------
// | 🛠️ **Feature**            | 🎯 **useEffect**                     | 🧩 **useLayoutEffect**            |
// |----------------------------|--------------------------------------|-----------------------------------|
// | ⏰ **Execution Timing**   | After render & screen painting 🖥️    | After render but before paint 🎨  |
// | 📦 **Use Case**           | Non-blocking side effects ✅         | Blocking layout adjustments 🚧    |
// | ⚡ **Performance Impact** | Better performance 🚀                | worst performance 🐢              |
// | 🔄 **Execution Type**     | Asynchronous 🌐                      | Synchronous 🕰️                    |


*/
