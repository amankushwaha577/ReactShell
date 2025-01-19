import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';



const Details = () => {
  // Accessing the current location using useLocation
  const location = useLocation();

  // Parsing the query parameters using URLSearchParams
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name'); // Get 'name' query parameter
  const age = queryParams.get('age');   // Get 'age' query parameter

  return (
    <>
      <h1>Path: "/profile"</h1>
      <h1>{"URL: {window.location.href} -> "} {window.location.href}</h1>
      <h1>{"Pathname: {location.pathname} -> "} {location.pathname}</h1>
      <h1>{"Hash: {location.hash} -> "} {location.hash}</h1>
      <h1>{"Query: {location.search} -> "} {location.search}</h1>
      <hr />
      <h1>{"const queryParams = new URLSearchParams(location.search)"}</h1>
      <h2>{"const name = queryParams.get('name')"}</h2>
      <h2>{"const age = queryParams.get('age')"}</h2>
      <h2>{"{name}"}: {name}</h2>
      <h2>{"{age}"}: {age}</h2>
    </>
  );
};

export default Details;


/*
useLocation():
-----------------------------
The `useLocation` hook from React Router provides information about the current URL, including the path, query string, hash fragments, and state passed between routes. It returns a `location` object.

What useLocation() Provides:
----------------------------
The `location` object has the following properties:
1. **pathname**: The current path of the URL.
2. **search**: The query string, including the `?` symbol.
3. **hash**: The hash fragment of the URL, including the `#` symbol.
4. **state**: A JavaScript object for passing data between routes.
5. **key**: A unique key representing the current location.

Key Concepts:
-------------
1. **Accessing Query Parameters (search):**
   - The `search` property gives the query string, including the `?` symbol.
   - To extract query parameters as key-value pairs, use `URLSearchParams`.

      Example:
      ```jsx
      const location = useLocation();
      const searchParams = new URLSearchParams(location.search);
      const name = searchParams.get("name");

      console.log(name); 
      // If URL is "/profile?name=John",
      location.search => ?name=John
      output will be "John".
      ```

2. **Accessing Hash Fragments:**
   - The `hash` property provides the hash fragment in the URL, including the `#` symbol.

      Example:
      ```jsx
      const location = useLocation();
      console.log(location.hash);  // If URL = "/profile#contact", output will be "#contact"
      ```

3. **Updating URL (without navigation):**
   - The `useLocation` hook is read-only. To update the URL programmatically, use the `useNavigate` hook or the `<Link>` component.

      Example:
      ```jsx
      import { useNavigate } from 'react-router-dom';

      const Redirect = () => {
        const navigate = useNavigate();
        return <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>;
      };
      ```
4. **Accessing State:**
   - The `state` property is used to pass data between routes without query parameters.
   - State is often used with the `<Link>` component or `navigate()` function.

      Example:
      ```jsx
      import { Link, useLocation } from 'react-router-dom';

      const Home = () => (
        <Link to="/profile" state={{ from: "home", message: "Hello there!" }}>
          Go to Profile
        </Link>
      );

      const Profile = () => {
        const location = useLocation();
        const { from, message } = location.state || {};
        return <h1>From: {from}, Message: {message}</h1>;
      };
      ```
      - If the user clicks the link, it will pass the state `{ from: "home", message: "Hello there!" }`.
      - Accessed via `location.state` in the destination component.
      

✅ **Best Practices with useLocation:**
--------------------------------------
- **Avoid Direct Modification**: The `location` object is read-only. Use `useNavigate` or `setSearchParams` for updates.
- **State Handling**: Always check if `location.state` exists before accessing it to avoid errors.
- **URL Parsing**: Use `URLSearchParams` for query string manipulations.

🚫 **Common Mistakes:**
----------------------
1. Mutating the `location` object directly.
2. Not checking for missing parameters before accessing them.
3. Expecting numbers: Query strings are always returned as strings. Convert them if needed using `Number()` or `parseInt()`.

*/
