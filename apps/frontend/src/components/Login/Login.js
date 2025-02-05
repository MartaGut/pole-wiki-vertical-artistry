import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault(); 
  setError(""); 

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json(); 
      localStorage.setItem("token", data.token);
      navigate("/"); 
    } else {
      setError("Invalid username and password");
    }
  } catch (error) {
    setError("Something went wrong!")
  }
}

    return (
      <div className='login-container'>
        <h2 className="page-title">Login</h2>
        {error && <p className='error-message'>{error}</p>}
        <form className='form login-form' onSubmit={handleLogin}>
          <label  className='label'>Username: </label>
          <input
          className='input'
          type="text"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          required
          />
          <label className='label'>Password:</label>
          <input
              className='input'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
          />
          <button className='button' type="submit">Login</button>
        </form>
      </div>
    );
  }
  
  export default Login;