import { useState, useEffect } from 'react';
import '../App.css';

function CitizenDashboard() {
  // State for alerts
  const [alerts, setAlerts] = useState<string[]>([]);

  // Connect to WebSocket for real-time alerts
  useEffect(() => {
    // Assume JWT is in localStorage—add to WebSocket later
    const token = localStorage.getItem('jwt');
    const ws = new WebSocket('ws://localhost:8080/alerts'); // Replace with real URL
    
    ws.onopen = () => console.log('WebSocket connected');
    ws.onmessage = (event) => {
      setAlerts((prev) => [...prev, event.data]);
    };
    ws.onerror = (error) => console.error('WebSocket error:', error);
    ws.onclose = () => console.log('WebSocket closed');
    
    return () => ws.close();
  }, []);

  return (
    <div className="container">
      <h1>Citizen Dashboard</h1>
      <section className="alert-logs">
        <h2>Latest Alerts</h2>
        <ul>
          {alerts.length === 0 ? (
            <li>No alerts yet...</li>
          ) : (
            alerts.map((alert, index) => <li key={index}>{alert}</li>)
          )}
        </ul>
      </section>
    </div>
  );
}

export default CitizenDashboard;