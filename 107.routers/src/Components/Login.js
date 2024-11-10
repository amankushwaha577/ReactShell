import { useNavigate } from "react-router-dom";

// Login Page for redirect demo
const Login = () => {
    const navigate = useNavigate();
  
    const handleLogin = () => {
      navigate('/dashboard');  // Navigate to another route
    };
  
    return (
      <div> 
        <h2>Login Page</h2> 
        <button onClick={handleLogin}>Login</button>  
      </div> 
    );
  };

  export default Login

// useNavigate ---
// The useNavigate hook allows you to programmatically navigate to different routes from ***within your components***. 
// It replaces the useHistory hook from React Router v5.