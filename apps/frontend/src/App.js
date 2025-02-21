import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './auth/ProtectedRoute';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
