import React, { useState } from 'react';

function ConditionalRenderingExample() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [hasPermission, setHasPermission] = useState(true);

    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);

    return (
        <div>
            {/* Button to toggle login state */}
            <button onClick={isLoggedIn ? handleLogout : handleLogin}>
                {isLoggedIn ? 'Log out' : 'Log in'}
            </button>

            {/* Conditional rendering based on login state : IIFE for calculating a dynamic value (for example, a greeting message) */}
            <h1>{(() => {
                if (isLoggedIn) {
                    return hasPermission ? "Welcome back, user!" : "You have logged in, but you don't have permission.";
                } else {
                    return "Please log in to continue.";
                }
            })()}</h1>

            {/* Conditional rendering using && for permission check */}
            {isLoggedIn && hasPermission && (
                <p>You have permission to access this feature.</p>
            )}

            {/* Conditional rendering with switch-case like structure */}
            {isLoggedIn && !hasPermission ? (
                <p>You don't have permission to access this feature.</p>
            ) : (
                <p>Enjoy exploring the site!</p>
            )}
        </div>
    );
}

export default ConditionalRenderingExample;

// Conditional rendering in React allows you to display different content or components based on certain conditions.

//1. If-Else Statements: Use if and else to render different content based on conditions.
//2. Ternary Operator: Conditionally render content with a concise syntax using condition ? true : false.
//3. Logical AND (&&): Render content only if the condition is true using condition && content.
//4. Switch-Case: Use switch or multiple if-else to handle more complex conditions.
//5. IIFE (Immediately Invoked Function Expression): Immediately run a function to compute or evaluate values based on conditions, often used for inline logic.