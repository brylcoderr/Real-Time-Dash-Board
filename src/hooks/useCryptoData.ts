import { useState, useEffect } from 'react';
import { getTopCoins, getGlobalData } from '../services/cryptoApi';
import type { CoinData, MarketSummary, PricePoint } from '../types';

export function useCryptoData() {
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [summary, setSummary] = useState<MarketSummary>({
    totalMarketCap: 0,
    totalVolume: 0,
    activeCurrencies: 0,
    btcDominance: 0
  });

  const [priceHistory, setPriceHistory] = useState<PricePoint[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [coinsData, globalData] = await Promise.all([
        getTopCoins(),
        getGlobalData()
      ]);

      setCoins(coinsData);
      setSummary(globalData);

      // Create price history from Bitcoin's sparkline data
      if (coinsData.length > 0) {
        const btcSparkline = coinsData[0].sparkline_in_7d.price;
        const now = Date.now();
        const timePoints = btcSparkline.map((price, index) => ({
          timestamp: now - (btcSparkline.length - index) * 3600000,
          value: price
        }));
        setPriceHistory(timePoints);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return { coins, summary, priceHistory };
}