export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap: number;
  sparkline_in_7d: {
    price: number[];
  };
}

export interface MarketSummary {
  totalMarketCap: number;
  totalVolume: number;
  activeCurrencies: number;
  btcDominance: number;
}

export interface PricePoint {
  timestamp: number;
  value: number;
}

export interface Theme {
  name: string;
  background: string;
  card: string;
  cardHover: string;
  primary: string;
  secondary: string;
  text: string;
  textSecondary: string;
  border: string;
  chartLine: string;
  success: string;
  error: string;
}