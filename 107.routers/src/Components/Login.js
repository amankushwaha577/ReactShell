import { useNavigate } from "react-router-dom";

// Login Page for redirect demo
const Login = () => {
    const navigate = useNavigate();
  
    const handleLogin = () => {
      // Simulate login action and navigate to Dashboard
      navigate('/dashboard');
    };
  
    return (
      <div> 
        <h2>Login Page</h2> 
        <button onClick={handleLogin}>Login</button>  
      </div> 
    );
  };

  export default Login