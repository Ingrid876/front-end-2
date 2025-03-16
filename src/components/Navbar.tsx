import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

interface NavbarProps {
  onLogout: () => void; // Only required prop
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
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/settings">Settings</Link>
        </li>
        <li>
          <a onClick={handleLogout}>Logout</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;