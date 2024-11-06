import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import { useTheme } from '../contexts/ThemeContext';
import type { PricePoint } from '../types';

interface LineChartProps {
  data: PricePoint[];
  title: string;
}

export function LineChart({ data, title }: LineChartProps) {
  const { theme } = useTheme();

  return (
    <div className={`${theme.card} p-6 rounded-xl shadow-sm border ${theme.border}`}>
      <h3 className={`text-lg font-semibold mb-4 ${theme.text}`}>{title}</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={data}>
            <XAxis
              dataKey="timestamp"
              tickFormatter={(timestamp) => format(timestamp, 'MMM d')}
              stroke={theme.name === 'dark' ? '#9CA3AF' : '#6B7280'}
            />
            <YAxis
              stroke={theme.name === 'dark' ? '#9CA3AF' : '#6B7280'}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: theme.name === 'dark' ? '#1F2937' : '#FFFFFF',
                border: 'none',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
              labelFormatter={(timestamp) => format(timestamp, 'MMM d, yyyy HH:mm')}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Price']}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={theme.name === 'dark' ? '#60A5FA' : '#3B82F6'}
              strokeWidth={2}
              dot={false}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}