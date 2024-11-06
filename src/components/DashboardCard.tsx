import React, { ReactNode } from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface DashboardCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: ReactNode;
}

export function DashboardCard({ title, value, change, icon }: DashboardCardProps) {
  const { theme } = useTheme();
  const isPositive = change && change > 0;

  return (
    <div className={`${theme.card} rounded-xl p-6 shadow-sm border ${theme.border}`}>
      <div className="flex items-center justify-between mb-4">
        <span className={`${theme.textSecondary} text-sm font-medium`}>{title}</span>
        <div className={`p-2 ${theme.background} rounded-lg`}>{icon}</div>
      </div>
      <div className="flex items-baseline justify-between">
        <h3 className={`text-2xl font-bold ${theme.text}`}>{value}</h3>
        {change !== undefined && (
          <div className={`flex items-center ${isPositive ? theme.success : theme.error}`}>
            {isPositive ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
            <span className="text-sm font-medium">{Math.abs(change)}%</span>
          </div>
        )}
      </div>
    </div>
  );
}