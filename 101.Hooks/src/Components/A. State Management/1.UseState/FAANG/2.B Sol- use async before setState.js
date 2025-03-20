import { useState, useEffect } from "react";

function FetchDataWithAsyncAwait() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const result = await response.json();
      setData(result); // ✅ Correct: Updating with resolved value
    };

    fetchData();
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
2. Correct Way to Handle Async Updates :
----------------------------------------
    Instead of passing an async function to setState, handle async logic separately, 
    then update the state after resolving the Promise.
*/