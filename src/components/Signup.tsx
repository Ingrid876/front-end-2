import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Signup() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<string>('citizen');
  const [location, setLocation] = useState<string>(''); // Optional for citizens
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Mock backend signup—replace with real API
    const mockToken = `jwt-${role}-${username}`;
    console.log('Signup:', { username, password, role, location });
    
    // Real backend example (uncomment when ready):
    /*
    try {
      const response = await fetch('http://localhost:8080/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role, location }),
      });
      const data = await response.json();
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        navigate(role === 'admin' ? '/admin/dashboard' : role === 'responder' ? '/responder/dashboard' : '/citizen/dashboard');
      }
    } catch (error) {
      console.error('Signup failed:', error);
    }
    */
    
    // Mock success—store token and redirect
    localStorage.setItem('jwt', mockToken);
    navigate(role === 'admin' ? '/admin/dashboard' : role === 'responder' ? '/responder/dashboard' : '/citizen/dashboard');
  };

  return (
    <div className="container signup-container">
      <h1>Sign Up</h1>
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
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="citizen">Citizen</option>
            <option value="admin">Admin</option>
            <option value="responder">First Responder</option>
          </select>
        </div>
        {role === 'citizen' && (
          <div>
            <label>Location (e.g., City):</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your city"
            />
          </div>
        )}
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
}

export default Signup;