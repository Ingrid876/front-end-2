import '../App.css';

function SystemHealth() {
  // Static for now—typed as strings
  const wsStatus: string = "Connected";
  const apiStatus: string = "Online";

  return (
    <section className="system-health">
      <h2>System Health</h2>
      <div className="health-box">
        <p>WebSocket Status: <span className="status green">{wsStatus}</span></p>
        <p>API Status: <span className="status green">{apiStatus}</span></p>
      </div>
    </section>
  );
}

export default SystemHealth;