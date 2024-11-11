import React from 'react';

function EventDelegation() {
  const handleClick = (event) => {
    if (event.target.tagName === 'BUTTON') {
      console.log(`Button ${event.target.textContent} clicked!`);
    }
  };

  return (
    <div onClick={handleClick}>
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </div>
  );
}

export default EventDelegation;

// 1. Event delegation is a technique where a single event listener is added to a common ancestor element rather 
//    than to each individual child element. 
// 2. When events are triggered on child elements, they "bubble up"(Bubbling) through the DOM tree to this common ancestor, 
//    which can handle them centrally. 
// 3. This is efficient because it minimizes the number of event listeners, reducing memory usage and improving performance.


