import React, { useState, useEffect } from 'react';

function GET() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching data with async/await inside useEffect
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://jsonplaceholder.typicode.com/posts';

      try {
        // Start the fetch request
        const response = await fetch(url);
        
        // Check if response is OK (status 200-299)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse the JSON data
        const result = await response.json();
        
        // Update state with the fetched data
        setData(result);
        setLoading(false);
      } catch (err) {
        // Catch any errors and update the error state
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array ensures this runs once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Fetched Posts</h1>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GET;
