import React from 'react';

function PreventDefault() {
  const handleClick = (event) => {
    event.preventDefault(); // Prevents the default link navigation
    alert("Link navigation prevented!");
  };

  return (
    <a href="https://www.example.com" onClick={handleClick}>
      Click me to prevent navigation
    </a>
  );
}

export default PreventDefault;

// preventDefault() is used to stop the default behavior of an event from occurring. 

// Explanation:
// 1. Link: The <a> tag has a link to "https://www.example.com".
// 2. handleClick: The handleClick function is triggered when the link is clicked. 
//    Inside it, event.preventDefault() prevents the default behavior of navigating to the specified URL.
// 3. Behavior: When you click the link, it shows an alert and does not redirect to the href URL, 
//    because the navigation is stopped by preventDefault().