import '../App.css';

// Define props type for alerts
interface MetricsProps {
  alerts: string[];
}

function Metrics({ alerts }: MetricsProps) {
  // Static values—type them for clarity
  const activeConnections: number = 5;
  const dataSourcesOnline: string = "3/3";
  const totalAlerts: number = alerts.length; // Count from alerts

  return (
    <section className="metrics">
      <h2>System Metrics</h2>
      <div className="metric-box">
        <p>Total Alerts: {totalAlerts}</p>
        <p>Active Connections: {activeConnections}</p>
        <p>Data Sources Online: {dataSourcesOnline}</p>
      </div>
    </section>
  );
}

export default Metrics;