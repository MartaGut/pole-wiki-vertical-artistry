import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

function Home() {
  return <h1>Welcome to the Home Page</h1>;
}

function Login() {
  return <h1>Login Page</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
