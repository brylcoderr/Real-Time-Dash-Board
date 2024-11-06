import axios from 'axios';
import type { CoinData } from '../types';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export async function getTopCoins(): Promise<CoinData[]> {
  try {
    const response = await axios.get(`${BASE_URL}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 10,
        page: 1,
        sparkline: true,
        price_change_percentage: '24h'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    return [];
  }
}

export async function getGlobalData() {
  try {
    const response = await axios.get(`${BASE_URL}/global`);
    const data = response.data.data;
    
    return {
      totalMarketCap: data.total_market_cap.usd,
      totalVolume: data.total_volume.usd,
      activeCurrencies: data.active_cryptocurrencies,
      btcDominance: data.market_cap_percentage.btc
    };
  } catch (error) {
    console.error('Error fetching global data:', error);
    return {
      totalMarketCap: 0,
      totalVolume: 0,
      activeCurrencies: 0,
      btcDominance: 0
    };
  }
}