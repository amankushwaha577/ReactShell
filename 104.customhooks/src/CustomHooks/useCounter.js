import { useState } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
};

export default useCounter;


// 1. In React, a custom hook is a reusable function that allows you to encapsulate and reuse logic across multiple components.
// 2. Custom hooks are functions prefixed with use and can leverage other hooks (like useState, useEffect, etc.) to handle complex
//    logic while keeping components cleaner and more focused on rendering.

// ┌───────────────────────────────┬──────────────────────────────────────────────────────────┬───────────────────────────────────────────────────────────┐
// │ Feature                       │ Components                                              │ Custom Hooks                                              │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────┤
// │ 🌐 Purpose                    │ Render UI elements and manage user interactions.         │ Encapsulate reusable logic, without rendering UI elements. │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────┤
// │ 🔗 Role                       │ Handles both presentation (UI) and logic.                │ Handles only logic (e.g., fetching data, managing state).  │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────┤
// │ 🎨 Output                     │ Returns JSX to display UI.                               │ Returns values (data, state, functions) for components.    │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────┤
// │ ✍️ Naming Convention          │ Typically PascalCase (e.g., `MyComponent`).              │ Must start with `use` (e.g., `useFetch`, `useAuth`).       │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────┤
// │ 🔄 Access to Other Hooks      │ Uses hooks like `useState`, `useEffect`, etc., for UI    │ Can use other hooks, often to separate logic from UI.      │
// │                               │ interaction.                                             │                                                           │
// ├───────────────────────────────┼──────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────────┤
// │ 💡 Examples of Use Cases      │ Buttons, forms, modals, pages, or sections of UI.        │ Fetching data, handling authentication, form validation,   │
// │                               │                                                          │ managing timers, sharing global state.                     │
// └───────────────────────────────┴──────────────────────────────────────────────────────────┴───────────────────────────────────────────────────────────┘
