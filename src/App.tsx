import React from 'react';
import { TrendingUp, DollarSign, Coins, BarChart } from 'lucide-react';
import { DashboardCard } from './components/DashboardCard';
import { LineChart } from './components/LineChart';
import { CoinList } from './components/CoinList';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { useCryptoData } from './hooks/useCryptoData';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const { coins, summary, priceHistory } = useCryptoData();
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme.background}`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className={`text-3xl font-bold ${theme.text}`}>Crypto Analytics</h1>
          <div className="flex items-center gap-4">
            <div className={theme.textSecondary}>
              Last updated: {new Date().toLocaleTimeString()}
            </div>
            <ThemeSwitcher />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Total Market Cap"
            value={`$${(summary.totalMarketCap / 1e12).toFixed(2)}T`}
            icon={<TrendingUp className={theme.primary} />}
          />
          <DashboardCard
            title="24h Volume"
            value={`$${(summary.totalVolume / 1e9).toFixed(2)}B`}
            icon={<DollarSign className={theme.success} />}
          />
          <DashboardCard
            title="Active Currencies"
            value={summary.activeCurrencies}
            icon={<Coins className={theme.secondary} />}
          />
          <DashboardCard
            title="BTC Dominance"
            value={`${summary.btcDominance.toFixed(2)}%`}
            icon={<BarChart className={theme.error} />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <LineChart
            data={priceHistory}
            title="Bitcoin Price (7d)"
          />
          <CoinList coins={coins.slice(0, 5)} />
        </div>
      </div>
    </div>
  );
}

export default App;