import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ name, age, isActive }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
};

// Prop validation
UserProfile.propTypes = {
  name: PropTypes.string.isRequired, // name must be a string and is required
  age: PropTypes.number.isRequired,  // age must be a number and is required   || If it will be missed    it will give warning🚫 in console.
  isActive: PropTypes.bool,          // isActive must be a boolean             || If wrong type is passed it will give warning🚫 in console.
};

// Default values for props
UserProfile.defaultProps = {
  isActive: false,  // Default value if isActive is not passed
};

export default UserProfile;

/*
Prop validation ensures components receive the correct types of props, preventing bugs and improving code quality.

ComponentName.propTypes = { }
ComponentName.defaultProps = { }

1. 📌 Key Prop Types Available:
------------------------------
PropTypes.string – String || validates that the prop is a string.
PropTypes.number – Number
PropTypes.bool – Boolean
PropTypes.array – Array
PropTypes.object – Object
PropTypes.func – Function
PropTypes.node – Anything renderable || validates that the prop can be anything that can be rendered (string, number, element, array, etc.).
PropTypes.element – React element || validates that the prop is a React element.


2. 📌 Optional vs Required Props:
-----------------------------------------------------------
To specify that a prop is required, use .isRequired, e.g., PropTypes.string.isRequired. If you don't use .isRequired, the prop is optional.
PropTypes.number.isRequired


3. 📌 Default Props:
-----------------------------------------------------------
To set default values for props, you can use defaultProps like in the example above. 
This ensures that the component has sensible default values if props are not provided.


Note:
   Ques. If prop is marked as 'isRequired' + also its default value is also set to 'defaultProps'
         than=> if it's not passed by parent component ?
   Ans : isRequired will give warning in console.
         even if default value is set.




Note : Support for defaultProps will be removed from function components in a future major release in react.


*/