import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<string>('citizen');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const mockToken = `jwt-${role}-${username}`;
    console.log('Login:', { username, password, role });
    
    localStorage.setItem('jwt', mockToken);
    navigate(role === 'admin' ? '/admin/dashboard' : role === 'responder' ? '/responder/dashboard' : '/citizen/dashboard');
  };

  return (
    <div className="login-container"> {/* Updated className */}
      <h1>Login</h1>
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account? <a href="/signup">Sign up here</a>
      </p>
    </div>
  );
}

export default Login;