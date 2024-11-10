import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;

// 1. In React, a custom hook is a reusable function that allows you to encapsulate and reuse logic across multiple components.
// 2. Custom hooks are functions prefixed with use and can leverage other hooks (like useState, useEffect, etc.) to handle complex
//  logic while keeping components cleaner and more focused on rendering.



// ┌───────────────────────────────┬──────────────────────────────────────────────────────────┬───────────────────────────────────────────────────────────┐
// │ Feature                       │ Components                                              │ Custom Hooks                                              │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────┤
// │ 🌐 Purpose                    │ Render UI elements and manage user interactions.         │ Encapsulate reusable logic, without rendering UI elements. │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────┤
// │ 🔗 Role                       │ Handles both presentation (UI) and logic.                │ Handles only logic (e.g., fetching data, managing state).  │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────┤
// │ 🎨 Output                     │ Returns JSX to display UI.                               │ Returns values (data, state, functions) for components.    │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────┤
// │ ⚙️ Usage                      │ Called as JSX (e.g., `<MyComponent />`).                  │ Called as functions (e.g., `useFetch(url)`).               │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────┤
// │ ✍️ Naming Convention          │ Typically PascalCase (e.g., `MyComponent`).              │ Must start with `use` (e.g., `useFetch`, `useAuth`).       │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────┤
// │ 🔄 Access to Other Hooks      │ Uses hooks like `useState`, `useEffect`, etc., for UI    │ Can use other hooks, often to separate logic from UI.      │
// │                               │ interaction.                                             │                                                           │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────┤
// │ 🧹 Separation of Concerns     │ May mix UI with logic; benefits from extracting logic    │ Isolates logic for cleaner, more focused components.       │
// │                               │ into custom hooks.                                       │                                                           │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────┤
// │ 💡 Examples of Use Cases      │ Buttons, forms, modals, pages, or sections of UI.        │ Fetching data, handling authentication, form validation,   │
// │                               │                                                          │ managing timers, sharing global state.                     │
// └───────────────────────────────┴──────────────────────────────────────────────────────────┴───────────────────────────────────────────────────────────┘
