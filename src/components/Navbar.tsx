import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

interface NavbarProps {
  onLogout: () => void;
}

function Navbar({ onLogout }: NavbarProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Clears JWT via App.tsx
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="./components/Dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="./components/Settings">Settings</Link>
        </li>
        <li>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
