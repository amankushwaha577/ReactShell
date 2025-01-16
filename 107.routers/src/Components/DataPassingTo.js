import { useLocation } from 'react-router-dom';

const DataPassingTo = () => {
    const location = useLocation();
    const { from, message } = location.state || {}; // Ensure fallback to prevent errors

    return (
        <div>
            <h1>From: {from}</h1>
            <p>Message: {message}</p>
        </div>
    );
};

export default DataPassingTo;

/*
✅ When you Navigate like this:
navigate('/DataPassingTo', { 
                              state: {
                                       from: 'Aman',
                                       message: 'Hello from Aman!' 
                                      } 
                            }
        );

How it Works:
----------------
1. Path: /DataPassingTo
   The user is being navigated to the /DataPassingTo route.
2. State Data:
   The navigate() function passes an object as state :
   { from: 'Aman', message: 'Hello from Aman!' }

✅ What Happens in the Component:
----------------------------------
const location = useLocation();

a). location.state: The data passed via navigate().
b). const { from, message } = location.state;
    Destructuring: Extracts the values from and message from location.state

c). Fallback (|| {}): If no state is passed, it defaults to an empty object {} to avoid errors.
    const { from, message } = location.state || {};





// ✅ Best Practices:
// 1. Avoid directly mutating location.state.
// 2. Use conditional rendering to avoid errors when state is missing.


*/