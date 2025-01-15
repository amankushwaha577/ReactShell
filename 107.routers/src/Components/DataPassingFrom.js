import { useNavigate } from 'react-router-dom';

const DataPassingFrom = () => {
    const navigate = useNavigate();

    const sendData = () => {
        navigate('/DataPassingTo', { 
            state: { from: "Aman", message: "Hello from Aman!" } 
        });
    };

    return <button onClick={sendData}>Go to Profile</button>;
};

export default DataPassingFrom;
