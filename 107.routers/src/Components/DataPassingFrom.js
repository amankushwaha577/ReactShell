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
*/