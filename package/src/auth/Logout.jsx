import { useAuth } from '../context/AuthContext'; // Import the auth context
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();


  const handleLogout = () => {
    logout(); // Calls the function to remove the role from localStorage & update state
    navigate('/login', { replace: true }); // Redirects immediately
  };

  return (
    <button onClick={handleLogout} style={styles.button}>
      Logout
    </button>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default Logout;
