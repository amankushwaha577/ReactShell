import React, { useState, useEffect } from 'react';

// A Higher-Order Component that adds a loading state
function withLoading(Component) {
    return function EnhancedComponent(props) {
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            // Simulate a data fetching delay
            setTimeout(() => {
                setIsLoading(false);
            }, 2000); // After 2 seconds, set loading to false
        }, []);

        return isLoading ? <div>Loading...</div> : <Component {...props} />;
    };
}

// A simple component to be wrapped
function UserProfile() {
    return <div>User Profile Content</div>;
}

// Wrap UserProfile with the withLoading HOC
const EnhancedUserProfile = withLoading(UserProfile);

function App() {
    return (
        <div>
            <h1>Higher-Order Component Example</h1>
            <EnhancedUserProfile />
        </div>
    );
}

export default App;
