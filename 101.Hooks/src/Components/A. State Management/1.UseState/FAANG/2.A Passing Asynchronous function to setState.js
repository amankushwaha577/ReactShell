import { useState } from "react";

function WrongAsyncSetState() {
  const [data, setData] = useState(null);

  const fetchData = async () => {

    setData(async () => {
      // ❌ Incorrect: Passing an async function to setState() Function.
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      return response.json();
    });

  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <p>Data: {JSON.stringify(data)}</p>

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
                return response.json(); // ❌ This returns a Promise, not a value
            });

*/
