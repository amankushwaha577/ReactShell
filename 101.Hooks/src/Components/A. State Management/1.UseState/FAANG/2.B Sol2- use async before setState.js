import { useState, useEffect } from "react";

function FetchDataWithAsyncAwait() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users/1"
  //     );
  //     const result = await response.json();
  //     setData(result); // ✅ Correct: Updating with resolved value
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/2")
      .then(response => response.json())
      .then(result => setData(result));  // ✅ Correct: Updating with resolved data
  }, []);

  return (
    <div>
      <h2>Correct: Using async/await Before setState</h2>
      <p>Data: {data ? JSON.stringify(data) : "Loading..."}</p>

      {/*
        ✅ Output:
                    1. Initially:
                              Data: Loading...

                    2. After fetching:
                              Data: {"id":1,"name":"Leanne Graham","usernam...... }
      */}
    </div>
  );
}

export default FetchDataWithAsyncAwait;

/*
You can Use .then() Instead of async/await :
*/

/*
🎯 Key Takeaways :
1. ✔ ❌ Never pass an async function to setState.
2. ✔ ✅ Always resolve the async function before updating state.
3. ✔ ✅ Use useEffect for auto-fetching data.
4. ✔ ✅ Use .then() or async/await properly.
*/