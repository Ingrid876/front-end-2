import Metrics from './Metrics.tsx';
import AlertLogs from './AlertLogs.tsx';
import SystemHealth from './SystemHealth.tsx';
import '../App.css';

interface DashboardProps {
  alerts: string[];
}

function Dashboard({ alerts }: DashboardProps) {
  return (
    <div className="admin-dashboard"> {/* Centered via CSS */}
      <h1>Admin Dashboard</h1>
      <Metrics alerts={alerts} />
      <AlertLogs alerts={alerts} />
      <SystemHealth />
    </div>
  );
}

export default Dashboard;