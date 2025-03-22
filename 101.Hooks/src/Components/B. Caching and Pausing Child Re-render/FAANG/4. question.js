/* 
Que. How can you customize React.memo to do a deep comparison of props?
Ans. By default, React.memo does a shallow comparison. You can provide a custom comparison function for deep checking.
*/

const Child = memo(({ obj }) => {

    console.log("Child re-rendered");

    return <p>{obj.value}</p>;
  }, 
      (prevProps, nextProps) => {
          return prevProps.obj.value === nextProps.obj.value;
          // If this function returns true, React skips the re-render.
          // If this function returns false, React re-renders the component.
      }

);
  
