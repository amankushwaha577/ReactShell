// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, Outlet, useNavigate, useParams, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import UserProfile from './Components/User';
import User from './Components/User';
import Profile from './Components/Profile';
import Details from './Components/Details';
import DataPassingFrom from './Components/DataPassingFrom';
import DataPassingTo from './Components/DataPassingTo';

// Setting with nested routes
const Settings = () => {
  return (
    <div>
      <h2>Setting</h2>
      <nav>
        <ul>
          <li><NavLink to="Setting1"  style={({ isActive }) => ({ color: isActive ? 'yellow' : 'blue' })}>Setting 1</NavLink></li>
          <li><NavLink to="Setting2" >Setting 2</NavLink></li>
        </ul>
      </nav>
      <Outlet /> {/* Nested routes will render here */}
    </div>
  );
};

// Setting1 Page (nested route under Setting)
const Setting1 = () => {
  return <h3>Settings Page 1</h3>;
};

// Settings2 Page (nested route under Setting)
const Setting2 = () => {
  return <h3>Settings Page 2</h3>;
};



// App Component with routing
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">"/"</Link></li>
            <li><Link to="/about">"/about"</Link></li>
            <li><Link to="/login">"/login"</Link></li>

            <li><Link to="/user/123">"/user/:id" -----------------------------------------useParams() || after /: is our dynamic parameter</Link></li>
            <li><Link to="/profile?name=aman&age=24">"/user" ---------------------------------------------useSearchParams() || after ? is our the query parameters</Link></li>
            <li><Link to="/details?name=aman&age=24">"/user" ---------------------------------------------useLocation() || information about the current URL</Link></li>

            {/* useLocation() + useNavigate() */}
            <li><Link to="/DataPassingFrom">send data from useNavigate() {"-------->"} To useLocation()</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          
          {/* Dynamic Route: User Profile */}
          <Route path="/user/:id?/" element={<User />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/details" element={<Details />} />

          <Route path="/DataPassingFrom" element={<DataPassingFrom />} />{/*---state---------> */}
          {/* send data from useNavigate() --------> To useLocation()                        | */}
          <Route path="/DataPassingTo" element={<DataPassingTo />} />    {/*<----------------- */}


          {/* Dashboard with Nested Routes */}
          <Route path="/Settings" element={<Settings />}>
            <Route path="Setting1" element={<Setting1 />} />
            <Route path="Setting2" element={<Setting2 />} />
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// 1. BrowserRouter (Router):
// This is the top-level component that provides the routing context to the rest of the application. 
// It uses the HTML5 history API to keep your app in sync with the URL.
// _____________________________________________________________________________________
//          <Router>
                     {/* Your routes go here */}
//          </Router>



// 2. Routes:
// A container for all the Route components, which automatically renders the first matching route.
// It Groups routes and renders the first matching route.
// _____________________________________________________________________________________
//           <Routes>
//                <Route path="/" element={<Home />} />
                  {/* More routes */}
//           </Routes>



// 3. Route:
// Defines a path and the component to render when the URL matches that path. 
// In React Router v6, the element prop is used to pass the JSX component to render.
// _____________________________________________________________________________________
//           <Route path="/about" element={<About />} />


// 4. Link :
// The Link component is used to create links that navigate to different routes . 
// It replaces the traditional <a> tag to prevent page reloads. (interview)
// _____________________________________________________________________________________
//            <Link to="/about">Go to About Page</Link>


// 5. Link vs NavLink
// While Link is used for basic routing, NavLink provides additional styling for 
// the active link (e.g., highlighting the current active route).
// _____________________________________________________________________________________
//         <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>
//            About
//          </NavLink>
// 
// A. The style prop is used to apply inline CSS styles dynamically.
// B. style prop takes a function that receives an object as an argument. This object contains information about the link’s state .
//    i). isActive: This is a boolean value that tells us whether the current route matches the route specified in the to prop (i.e., whether the link is active or not).
//    ii).The function then returns a style object, where the color property is dynamically set:

// C. If the link is active (the current URL is /about), isActive will be true.
// D. If the link is not active, isActive will be false.






// useNavigate	: Programmatically navigates to a route from within a component.
// useParams: 	Retrieves dynamic URL parameters (e.g., :id).
// useLocation:	Provides information about the current URL and location.
// Outlet:	Renders nested routes inside parent components.



/*
/*
Everything About React Router 🚦
---------------------------------

| **Aspect**               | **Explanation**                                                                                     |
|--------------------------|-----------------------------------------------------------------------------------------------------|
| **Definition**           | 🛣️ React Router is a library for routing in React applications, enabling navigation without reloading the page. |
| **Core Concepts**        |                                                                                                     |
| **Router**               | 🌐 Wraps the entire app to enable routing. Common routers: `BrowserRouter` and `HashRouter`.       |
| **Routes**               | 🛤️ Defines the path-to-component mapping, rendering the correct component based on the URL.        |
| **Link**                 | 🔗 Replaces `<a>` tags for navigation without refreshing the page.                                  |
| **NavLink**              | 🧭 Similar to `Link` but adds styling for the active route.                                         |
| **useNavigate**          | ⏩ A hook to programmatically navigate to different routes.                                         |
| **useParams**            | 🧩 Extracts route parameters from the URL (e.g., `/user/:id`).                                     |
| **useLocation**          | 🗺️ Provides information about the current route's location.                                       |
| **useRoutes**            | 🛠️ Allows defining routes programmatically.                                                       |
| **Outlet**               | 🔄 Used for rendering child routes in nested routing scenarios.                                    |
| **Navigate**             | 🧭 Redirects to a different route programmatically.                                                |

| **Common Routers**       |                                                                                                     |
|--------------------------|-----------------------------------------------------------------------------------------------------|
| **BrowserRouter**        | 🧭 Uses the HTML5 history API for clean URLs.                                                      |
| **HashRouter**           | 🛑 Uses the hash portion of the URL (e.g., `/#/path`). Useful for static file hosting.              |
| **MemoryRouter**         | 🧠 Keeps routes in memory, not the browser history (useful for tests).                             |

| **Routing Features**     |                                                                                                     |
|--------------------------|-----------------------------------------------------------------------------------------------------|
| **Nested Routes**        | 🛤️ Enables defining child routes within a parent route.                                            |
|                         | Example:                                                                                             |
|                         | <Route path="/dashboard" element={<Dashboard />} >                                                  |
|                         |   <Route path="settings" element={<Settings />} />                                                 |
|                         | </Route>                                                                                             |
| **Dynamic Routing**      | 🔄 Allows routes to change based on user interactions or data.                                      |
| **Route Parameters**     | 🧩 Pass dynamic data in the URL (e.g., `/user/:id`). Access using `useParams()`.                    |
| **Query Parameters**     | 🔍 Pass key-value pairs in the URL (e.g., `/search?q=query`). Access using `useLocation()`.         |
| **Code Splitting**       | ⚡ Lazy load routes using `React.lazy` and `Suspense` for better performance.                       |

| **Key Components and Hooks** |                                                                                                 |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| **Link Example**           |                                                                                                 |
|                           | <Link to="/home">Go to Home</Link>                                                              |
| **useNavigate Example**   |                                                                                                 |
|                           | const navigate = useNavigate();                                                                |
|                           | navigate('/profile');                                                                          |
| **useParams Example**     |                                                                                                 |
|                           | const { id } = useParams();                                                                     |
| **useRoutes Example**     |                                                                                                 |
|                           | const routes = useRoutes([{ path: "/", element: <Home /> }]);                                   |
| **Navigate Example**      |                                                                                                 |
|                           | <Navigate to="/login" />                                                                       |

| **Advanced Features**      |                                                                                                 |
|----------------------------|-------------------------------------------------------------------------------------------------|
| **Route Guards**           | 🛡️ Protect routes using authentication logic.                                                 |
|                           | Example: Wrap a `Route` with a higher-order component.                                         |
| **Custom Hooks**           | 🧩 Build custom hooks to encapsulate common routing logic.                                     |
| **Scroll Restoration**     | 📜 Manage scroll behavior during route changes (e.g., always scroll to top).                   |
| **Error Pages**            | ❗ Handle 404 or other errors by defining a fallback route.                                     |

| **Best Practices**         |                                                                                                 |
|----------------------------|-------------------------------------------------------------------------------------------------|
| **Keep URLs Semantic**     | 📝 Make routes readable and descriptive (e.g., `/profile` instead of `/p`).                    |
| **Lazy Loading**           | ⚡ Improve performance by lazy loading non-critical routes.                                    |
| **Use Route Parameters Sparingly** | Use route parameters only when they directly represent a resource.                   |
| **Modularize Routes**      | 📂 Group related routes in a single file for maintainability.                                  |

| **Common Libraries**       |                                                                                                 |
|----------------------------|-------------------------------------------------------------------------------------------------|
| **react-router-dom**       | 🌐 Core library for React applications.                                                        |
| **react-router-config**    | 📜 Useful for server-side rendering or centralized route definitions.                          |
*/

