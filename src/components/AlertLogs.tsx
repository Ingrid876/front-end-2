import '../App.css';

// Define props type for alerts
interface AlertLogsProps {
  alerts: string[];
}

function AlertLogs({ alerts }: AlertLogsProps) {
  return (
    <section className="alert-logs">
      <h2>Incoming Alert Logs</h2>
      <ul>
        {alerts.length === 0 ? (
          <li>No alerts yet...</li>
        ) : (
          alerts.map((alert, index) => <li key={index}>{alert}</li>)
        )}
      </ul>
    </section>
  );
}

export default AlertLogs;