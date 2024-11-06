export interface PageView {
    timestamp: number;
    page: string;
    duration: number;
    country: string;
  }
  
  export interface UserSession {
    id: string;
    startTime: number;
    duration: number;
    pages: number;
  }
  
  export interface AnalyticsSummary {
    activeUsers: number;
    totalPageViews: number;
    averageSessionDuration: number;
    bounceRate: number;
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