import React, { useState, useLayoutEffect } from 'react';

const ScrollTracker = () => {
  const [scrollY, setScrollY] = useState(0);

  // useLayoutEffect runs after DOM is updated
  useLayoutEffect(() => {
    // Capture the scroll position before the DOM update (equivalent to getSnapshotBeforeUpdate)
    const scrollY = window.scrollY;

    // Update the scrollY state with the current scroll position
    setScrollY(scrollY);

    // Log the previous scrollY value when the component updates (equivalent to componentDidUpdate)
    console.log('Previous scrollY:', scrollY);
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div>
      <h1>Scroll Tracker</h1>
      <p>Scroll Position: {scrollY}</p>
    </div>
  );
};

export default ScrollTracker;
