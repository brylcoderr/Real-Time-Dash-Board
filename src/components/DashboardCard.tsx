import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

export function DashboardCard({ title, value, icon }: DashboardCardProps) {
  const { theme } = useTheme();

  return (
    <div className={`${theme.card} p-6 rounded-xl shadow-sm border ${theme.border}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-sm font-medium ${theme.textSecondary}`}>{title}</h3>
        {icon}
      </div>
      <p className={`text-2xl font-semibold ${theme.text}`}>{value}</p>
    </div>
  );
}