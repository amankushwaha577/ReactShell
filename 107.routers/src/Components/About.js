import { useLocation } from "react-router-dom";

// About Page Component
const About = () => {
    const location = useLocation();

    console.log("location :",location);
    // Op: {pathname: '/about', search: '', hash: '', state: null, key: '07iu5usv'}
    
    return <h1>About Current path: {location.pathname}</h1>;
 
  };

export default About;

// useLocation :
// The useLocation hook allows you to access the current location object, 
// which contains the current URL and its properties.

// A hook that provides access to the current URL, including pathname, search, and hash.
