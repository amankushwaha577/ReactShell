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
  age: PropTypes.number.isRequired,  // age must be a number and is required
  isActive: PropTypes.bool,          // isActive must be a boolean
};

// Default values for props
UserProfile.defaultProps = {
  isActive: false,  // Default value if isActive is not passed
};

export default UserProfile;


// In React, props validation is a mechanism used to ensure that the props passed to a component are of the 
// correct type and structure. This helps catch bugs and improve the maintainability of your code.

// 1. Key PropTypes:
// PropTypes.string: validates that the prop is a string.
// PropTypes.number: validates that the prop is a number.
// PropTypes.bool: validates that the prop is a boolean.
// PropTypes.array: validates that the prop is an array.
// PropTypes.object: validates that the prop is an object.
// PropTypes.func: validates that the prop is a function.
// PropTypes.node: validates that the prop can be anything that can be rendered (string, number, element, array, etc.).
// PropTypes.element: validates that the prop is a React element.

// 2. Optional vs Required Props:
// To specify that a prop is required, use .isRequired, e.g., PropTypes.string.isRequired.
// If you don't use .isRequired, the prop is optional.

// 3. Default Props:
// To set default values for props, you can use defaultProps like in the example above. 
// This ensures that the component has sensible default values if props are not provided.


// Note : Support for defaultProps will be removed from function components in a future major release in react.