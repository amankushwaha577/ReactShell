import React, { createContext, useContext } from 'react';

// Create a context with a default value of "Guest"
const UserContext = createContext("Guest");

function NoProviderHere() {

    return (
        <div>  {/*  No provider here, so UserInfo will get the default "Guest" */}
            <UserInfo />
        </div>
    );
}

export default NoProviderHere;


function UserInfo() {
    const user = useContext(UserContext); // If no Provider is used, this gets "Guest"
    return <p>Current User: {user}</p>;
}