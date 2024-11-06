import React from 'react';
import { Users, Eye, Clock, ArrowUpDown } from 'lucide-react';
import { DashboardCard } from './components/DashBoardCard';
import { LineChart } from './components/LineChart';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { useAnalytics } from './hooks/useAnalytics';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const { summary, pageViews } = useAnalytics();
  const { theme } = useTheme();

  const pageViewData = pageViews.map(view => ({
    timestamp: view.timestamp,
    value: 1,
  }));

  return (
    <div className={`min-h-screen ${theme.background}`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className={`text-3xl font-bold ${theme.text}`}>Analytics Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className={theme.textSecondary}>
              Last updated: {new Date().toLocaleTimeString()}
            </div>
            <ThemeSwitcher />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Active Users"
            value={summary.activeUsers}
            change={12}
            icon={<Users className={theme.primary} />}
          />
          <DashboardCard
            title="Page Views"
            value={summary.totalPageViews}
            change={8}
            icon={<Eye className={theme.success} />}
          />
          <DashboardCard
            title="Avg. Session Duration"
            value={`${Math.floor(summary.averageSessionDuration / 60)}m ${summary.averageSessionDuration % 60}s`}
            change={-5}
            icon={<Clock className={theme.secondary} />}
          />
          <DashboardCard
            title="Bounce Rate"
            value={`${summary.bounceRate}%`}
            change={-2}
            icon={<ArrowUpDown className={theme.error} />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LineChart
            data={pageViewData}
            title="Real-time Page Views"
          />
          <LineChart
            data={pageViews.map(view => ({
              timestamp: view.timestamp,
              value: view.duration,
            }))}
            title="Session Duration (seconds)"
          />
        </div>
      </div>
    </div>
  );
}

export default App;