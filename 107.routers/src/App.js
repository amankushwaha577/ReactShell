// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, Outlet, useNavigate, useParams, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import UserProfile from './Components/User';
import User from './Components/User';
import Profile from './Components/Profile';

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

            <li><Link to="/user/123">"/user/:id" -----------------------------------------useParams()</Link></li>
            <li><Link to="/profile/?name=aman&age=24">"/user" ---------------------------------------------useSearchParams()</Link></li>
            <li><Link to="/Settings">"/Settings"</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          
          {/* Dynamic Route: User Profile */}
          <Route path="/user/:id" element={<User />} />
          <Route path="/profile" element={<Profile />} />


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

