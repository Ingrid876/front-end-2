import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function CitizenRegister() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [location, setLocation] = useState<string>(''); // e.g., "New York" or coords
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Mock backend registration—replace with real API
    const mockToken = 'citizen-jwt-token'; // Fake JWT
    console.log('Register:', { username, password, location });
    
    // Real backend example (uncomment when ready):
    /*
    try {
      const response = await fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, location }),
      });
      const data = await response.json();
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        navigate('/citizen/dashboard');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
    */
    
    // Mock success—store token and redirect
    localStorage.setItem('jwt', mockToken);
    navigate('/citizen/dashboard');
  };

  return (
    <div className="container">
      <h1>Citizen Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location (e.g., City):</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default CitizenRegister;