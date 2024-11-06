import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import type { CoinData } from '../types';

interface CoinListProps {
  coins: CoinData[];
}

export function CoinList({ coins }: CoinListProps) {
  const { theme } = useTheme();

  return (
    <div className={`${theme.card} p-6 rounded-xl shadow-sm border ${theme.border}`}>
      <h3 className={`text-lg font-semibold mb-4 ${theme.text}`}>Top Cryptocurrencies</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`${theme.textSecondary} text-sm`}>
              <th className="text-left pb-4">Name</th>
              <th className="text-right pb-4">Price</th>
              <th className="text-right pb-4">24h Change</th>
              <th className="text-right pb-4">Volume</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id} className={`border-t ${theme.border}`}>
                <td className={`py-4 ${theme.text}`}>
                  <div className="flex items-center">
                    <span className="font-medium">{coin.name}</span>
                    <span className={`ml-2 text-sm ${theme.textSecondary}`}>
                      {coin.symbol.toUpperCase()}
                    </span>
                  </div>
                </td>
                <td className={`text-right ${theme.text}`}>
                  ${coin.current_price.toLocaleString()}
                </td>
                <td className={`text-right ${
                  coin.price_change_percentage_24h >= 0 ? theme.success : theme.error
                }`}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className={`text-right ${theme.text}`}>
                  ${(coin.total_volume / 1000000).toFixed(2)}M
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}