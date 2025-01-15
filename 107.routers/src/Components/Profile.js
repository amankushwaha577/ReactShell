import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Profile = () => {
  // Accessing the query parameters using useSearchParams
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name'); // Get 'name' query parameter
  const age = searchParams.get('age');   // Get 'age' query parameter

  return (
    <>
      <h1>Path: "/profile"</h1>
      <h1>URL: http://localhost:3000/profile?name=aman&age=24</h1>
      <hr />
      <h1>{"const { name, age } = useSearchParams()"}</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </>
  );
};

export default Profile;



/*
useSearchParams():
-----------------------------
The useSearchParams hook allows you to access and manipulate the query parameters from the URL (the part after the `?`).

What useSearchParams() Does:
--------------------------
It returns an array with two elements:
1. A `URLSearchParams` object that allows you to access query parameters as key-value pairs.
2. A setter function to update the search parameters (if needed).

Key Concept:
--------------
1. **Accessing Query Parameters:**
   --------------------------------
      - With `useSearchParams()`, you can easily access query parameters from the URL.
      - The parameters are returned as a `URLSearchParams` object.
      
      Example:
      ```jsx
      const [searchParams] = useSearchParams();
      const name = searchParams.get("name");  // Get 'name' from the URL query string
      const age = searchParams.get("age");    // Get 'age' from the URL query string
      ```

      URL Example:
      "/profile/?name=aman&age=24"
      Will extract:
      - `name = aman`
      - `age = 24`

2. **Query Parameters as Strings:**
   --------------------------------
   - Query parameters are always returned as strings, even if they represent numbers or booleans.

      Example:
      ```jsx
      const [searchParams] = useSearchParams();
      const age = searchParams.get("age");
      console.log(typeof age);  // Always 'string', even if the query is 'age=24'
      ```

3. **Optional Query Parameters:**
   --------------------------------
   - Query parameters are optional. If a parameter is not provided in the URL, `.get()` will return `null`.

      Example:
      ```jsx
      const [searchParams] = useSearchParams();
      const name = searchParams.get("name");  // If "name" isn't in the URL, name will be `null`
      ```

      - This means that you should handle missing query parameters in your component.

4. **Default Values:**
   --------------------------------
   - You can provide default values when a query parameter is missing, ensuring your component behaves correctly even when the parameter is not provided.

      Example:
      ```jsx
      const [searchParams] = useSearchParams();
      const name = searchParams.get("name");
      return <h1>{name || "Guest"}</h1>;  // Use "Guest" as the default if "name" is not provided
      ```

5. **Updating Query Parameters:**
   --------------------------------
   - `useSearchParams` also allows you to update query parameters via the setter function. You can manipulate the query string dynamically.
    ✅ Key Takeaways:
    ------------------
    ❌ Don't: Spread searchParams directly Its not a plain JS object.
    ✅ Do: Convert it to a plain object first.
    ✅ Do: Use searchParams.set() when updating a single parameter.

      Example:
      ```jsx
      const [searchParams, setSearchParams] = useSearchParams();
      const updateAge = () => {
        setSearchParams({ age: 30 });  // Update the age query parameter
      };
      ```

      why not setSearchParams({ ...searchParams,age: 30 });
      🚫 Why This Doesn't Work as Expected:
      -----------------------------------------------------
      1. searchParams is not a plain object:
        searchParams is an instance of the URLSearchParams class, not a regular JavaScript object.
        When you spread it, you don't get the actual key-value pairs but instead a complex object structure which may not behave as expected.

      2. Incorrect Transformation:
        Spreading searchParams does not flatten the key-value pairs correctly.
        It results in an empty object {} or incorrect data being passed to the setter function.



      ✅ Correct Way to Update Using setSearchParams:
      -------------------------------------------------------
      If you want to preserve existing query parameters, you should use the Object.fromEntries() method, 
      which converts URLSearchParams back into a plain object before spreading:
      setSearchParams({ 
            ...Object.fromEntries(searchParams.entries()), 
            age: 30 
      });

      🔧 Explanation:
      -----------------------------------------------------
        searchParams.entries() converts URLSearchParams into an iterator of key-value pairs.
        Object.fromEntries() turns those pairs into a plain JavaScript object.
        Now you can safely spread and update the parameters.


    🎯 Best Practice:
       ------------------------------------------------------
        If you just want to add or update a single query parameter without affecting the rest:
        const handleUpdate = () => {
            searchParams.set("age", "30");  // Directly update the 'age' param
            setSearchParams(searchParams);  // Apply the change
        };




Common Mistakes:
----------------
- **Not Checking for Missing Parameters:** Always handle the case where a query parameter might be missing by checking if the result of `.get()` is `null`.
- **Expecting Numbers:** Query parameters are always strings. If you expect a number, convert it using `Number(param)` or `parseInt(param)`.
- **Mutating the `URLSearchParams` Object Directly:** Use the setter function (`setSearchParams`) to update query parameters, not by directly modifying the `URLSearchParams` object.

*/
