import { useNavigate } from 'react-router-dom';

const DataPassingFrom = () => {
    const navigate = useNavigate();

    const sendData = () => {
        navigate('/DataPassingTo', { 
            state: { from: "Aman", message: "Hello from Aman!" } 
        });
    };

    return <button onClick={sendData}>Go to Profile</button>;
};

export default DataPassingFrom;


/*
✅ Sending State using navigate:
---------------------------------
The navigate function from react-router-dom can send state to another route as a second argument.

📌 Key Points:
1. Sending State: Pass an object as the second argument in navigate(path, { state }).
2. Receiving State: Use const location = useLocation() and access location.state.
3. Handling Missing State: Always use fallback (location.state || {}) to avoid undefined errors.


🚀 What is useNavigate?
The useNavigate hook is a part of React Router and is used for programmatic navigation in a React application.
It replaces the older useHistory hook from React Router v5.

1. 📌 Basic Usage: 
      Navigating to a Different Route:
                    navigate('/dashboard'); // Navigating to the dashboard page

2. 📌 Passing State with navigate: 
      You can pass data between components without using URL parameters using the state object.
                    navigate('/dashboard', {
                                state: { message: "Hello from HomePage!" }
                            });

3. 📌 Navigating Back and Forward (History Navigation) : 
      You can navigate programmatically through the browser history using -1 for going back and 1 for going forward. 
                    <button onClick={() => navigate(-1)}>Go Back</button>
                    <button onClick={() => navigate(1)}>Go Forward</button>                   




✅ Key Points to Remember:
1. useNavigate vs Link:
-------------------------
        Use useNavigate for programmatic navigation.
        Use <Link> for declarative navigation.

2. State Handling:
---------------------
        State can be passed as an optional parameter in the navigate function.
        The state is available via the useLocation hook.

3.History Management:
--------------------
        navigate(-1) → Go back.
        navigate(1) → Go forward.
        navigate('/path', { replace: true }) → Replace the current entry in history.


        
📌 Best Practice:
Always use useNavigate for dynamic navigation and <Link> for static links to avoid code duplication.

*/