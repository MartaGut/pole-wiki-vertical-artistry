import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import "./Navbar.scss"

function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('./');
    window.location.reload();
  };

    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <div>
        {!token ? (
          <>
            <Link className="navbar-links" to="/login">Login</Link>
            <Link className="navbar-links" to="/registration">Register</Link>
          </>
        ) : (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
        </nav>
    )
}; 

export default Navbar; 