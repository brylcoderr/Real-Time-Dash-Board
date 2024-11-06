import { useState, useEffect } from 'react';
import type { PageView, UserSession, AnalyticsSummary } from '../types';

function generateRandomData(): {
  pageViews: PageView[];
  sessions: UserSession[];
  summary: AnalyticsSummary;
} {
  const now = Date.now();
  const pages = ['/home', '/products', '/about', '/contact', '/blog'];
  const countries = ['US', 'UK', 'DE', 'FR', 'JP'];

  const pageViews = Array.from({ length: 50 }, (_, i) => ({
    timestamp: now - (50 - i) * 60000,
    page: pages[Math.floor(Math.random() * pages.length)],
    duration: Math.floor(Math.random() * 300),
    country: countries[Math.floor(Math.random() * countries.length)],
  }));

  const sessions = Array.from({ length: 20 }, (_, i) => ({
    id: `session-${i}`,
    startTime: now - Math.floor(Math.random() * 3600000),
    duration: Math.floor(Math.random() * 1800),
    pages: Math.floor(Math.random() * 10) + 1,
  }));

  return {
    pageViews,
    sessions,
    summary: {
      activeUsers: Math.floor(Math.random() * 100) + 50,
      totalPageViews: pageViews.length,
      averageSessionDuration: Math.floor(
        sessions.reduce((acc, session) => acc + session.duration, 0) / sessions.length
      ),
      bounceRate: Math.floor(Math.random() * 30) + 20,
    },
  };
}

export function useAnalytics() {
  const [data, setData] = useState(generateRandomData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateRandomData());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return data;
}