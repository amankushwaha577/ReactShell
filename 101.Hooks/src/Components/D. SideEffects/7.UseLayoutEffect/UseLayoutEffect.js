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

  // Asynchronous: useEffect is asynchronous and runs after render (after the browser has painted and the user has seen the updated UI).
  // useLayoutEffect is synchronous and runs synchronously after all DOM mutations. 
  // It fires before the browser has painted, making it suitable for operations that need to be done before the user sees the updated UI.

  return ( 
    <Fragment> 
      <div> 
      </div>
    </Fragment> 
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
// |----------------------------|--------------------------------------|------------------------------------|
// | ⏰ **Execution Timing**   | After render & screen update 🖥️      | After render but before paint 🎨  |
// | 📦 **Use Case**           | Non-blocking side effects ✅         | Blocking layout adjustments 🚧    |
// | ⚡ **Performance Impact** | Better performance 🚀                | Might slow rendering 🐢           |
// | 🔄 **Execution Type**     | Asynchronous 🌐                      | Synchronous 🕰️                    |


*/
