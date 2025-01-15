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


// ✅ Best Practices:
// 1. Avoid directly mutating location.state.
// 2. Use conditional rendering to avoid errors when state is missing.