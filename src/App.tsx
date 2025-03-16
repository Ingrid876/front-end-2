import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import CitizenRegister from './components/CitizenRegister';
import CitizenDashboard from './components/CitizenDashboard';
import Login from './components/Login';
import Signup from './components/Signup'; // New import
import ResponderDashboard from './components/ResponderDashboard'; // New import for ResponderDashboard
import './App.css';

function App() {
  const [token, setToken] = useState<string | null>(null);
  const [alerts] = useState<string[]>(["Storm warning at 2:00 PM", "Flood alert at 1:45 PM"]);

  useEffect(() => {
    const storedToken = localStorage.getItem('jwt');
    setToken(storedToken);
    const handleStorageChange = () => setToken(localStorage.getItem('jwt'));
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setToken(null);
  };

  return (
    <div>
      {token && window.location.pathname.startsWith('/admin') && (
        <Navbar onLogout={handleLogout} />
      )}
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* New signup route */}
        <Route path="/citizen/register" element={<CitizenRegister />} />
        
        {/* Responder Dashboard route */}
        <Route path="/responder/dashboard" element={<ResponderDashboard />} /> {/* New route for ResponderDashboard */}
        
        {/* Default route */}
        <Route path="/" element={<Navigate to={token ? "/citizen/dashboard" : "/login"} />} />
      </Routes>
    </div>
  );
}

export default App;