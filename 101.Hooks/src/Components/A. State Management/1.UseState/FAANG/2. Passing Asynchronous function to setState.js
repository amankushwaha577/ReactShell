import { useState } from "react";

function WrongAsyncSetState() {
  const [data, setData] = useState(null);

  const fetchData = async () => {

    setData(async () => {
      // ❌ Incorrect: Passing an async function to setState() Function.

      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const result = await response.json();
      return result;
    });

  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <p>Data: {JSON.stringify(data)}</p>
      <p>Data: {JSON.stringify(data).type}</p>

      {/* Output:
            1. Initially:
                          Data: null

            2. After clicking "Fetch Data":
                          Data: {}  ------------>  But it's a Promise, not real data! */}
    </div>
  );
}

export default WrongAsyncSetState;

/*
Ques. Can we pass an asynchronous function to setState? Why or why not?
Ans.  No ❌, we cannot pass an asynchronous function to setState.
      The setState function expects a value or a function that returns a value.

      Now,
      If you pass an async function (which returns a Promise), React won't handle it correctly.

            const [data, setData] = useState(null);

            setData(async () => {
                const response = await fetch("https://api.example.com/data");
                const result = await response.json();
                return result; // ❌ This returns a Promise, not a value
            });

*/

/*
Que. This returns a Promise, not a value is it correct ?
          setData(async () => {
              const response = await fetch("https://api.example.com/data");
              const result = await response.json();
              return result; // ❌ This returns a Promise, not a value
          });
Ans. YEs,
    ⚠️ What's Wrong?
    a. setData expects a value or a function that synchronously returns a value.
    b. Instead, you're passing an async function, which always returns a Promise, not the actual value.

    🔹 Breaking It Down :
    a. Here, result is the actual fetched data (e.g., a JSON object).
    b. Since the function is async, it does not return result directly but wraps it in a Promise.
    c. So, setData stores a Promise, not the actual data.
       OP : {}


    ✅ Correct Way :
    const fetchData = async () => {
            const response = await fetch("https://api.example.com/data");
            const result = await response.json();
            setData(result); // ✅ Correct: Now data is an actual value
     };


*/