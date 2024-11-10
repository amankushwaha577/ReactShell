// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, Outlet, useNavigate, useParams, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import UserProfile from './Components/UserProfile';


// Dashboard with nested routes
const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><NavLink to="stats" activeClassName="active">Stats</NavLink></li>
          <li><NavLink to="settings" activeClassName="active">Settings</NavLink></li>
        </ul>
      </nav>
      <Outlet /> {/* Nested routes will render here */}
    </div>
  );
};

// Stats Page (nested route under Dashboard)
const Stats = () => {
  return <h3>Stats Page</h3>;
};

// Settings Page (nested route under Dashboard)
const Settings = () => {
  return <h3>Settings Page</h3>;
};



// App Component with routing
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/user/123">User Profile (ID 123)</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          
          {/* Dynamic Route: User Profile */}
          <Route path="/user/:id" element={<UserProfile />} />


          {/* Dashboard with Nested Routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="stats" element={<Stats />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
