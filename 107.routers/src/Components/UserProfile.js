import { useParams } from "react-router-dom";

// User Profile Page with dynamic parameter (e.g., /user/:id)
const UserProfile = () => {
    const { id } = useParams(); // Accessing dynamic route parameter
    return <>
    <h1>path="/user/:id" </h1>
    <h1>http://localhost:3000/user/123</h1>
    <hr/>
    <h1>{"const { \"id\" } = useParams()"}</h1>
    <h2>id - {id}</h2></>;
  };

  export default UserProfile


/*
useParams():
-----------------------------
The useParams hook allows you to access dynamic parameters from the URL (like :id or :slug).


What useParams() Does:
--------------------------
It returns an object containing key-value pairs of the URL parameters defined in the route.


Key Concept:
--------------
1. Accessing Multiple Parameters (nested):
-----------------------------------------
      <Route path="/user/:userId/order/:orderId" element={<OrderDetails />} />
                           ⬇️             ⬇️
      URL :       /user/   42   /order/   1001    will display Order 1001 for User 42.
      const OrderDetails = () => {
          const { orderId, userId } = useParams();
          return <h1>Order {orderId} for User {userId}</h1>;
      };


2. URL Parameters as Strings:
--------------------------------
Parameters are always returned as strings, even if they look like numbers.
        const { id } = useParams();
        console.log(typeof id); // Always 'string'

  
3. Optional Parameters:
--------------------------------
<Route path="/profile/:userId?/" element={<UserProfile />} />
The ? makes the parameter optional. Visiting /profile/ will not break the app.


4. Default Values:
--------------------------------
const UserProfile = () => {
    const { id } = useParams();
    return <h1>User ID: {id || "Not Provided"}</h1>;
};



Common Mistakes:
----------------
Not using a Route setup properly. Ensure dynamic segments match the path.
Expecting numbers: Always convert parameters if needed: Number(id).

*/