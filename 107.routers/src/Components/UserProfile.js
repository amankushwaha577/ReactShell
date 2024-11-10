// User Profile Page with dynamic parameter (e.g., /user/:id)
const UserProfile = () => {
    const { id } = useParams(); // Accessing dynamic route parameter
    return <h2>User Profile for ID: {id}</h2>;
  };

  export default UserProfile