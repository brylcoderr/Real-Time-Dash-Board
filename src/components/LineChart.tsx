import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import { useTheme } from '../contexts/ThemeContext';

interface DataPoint {
  timestamp: number;
  value: number;
}

interface LineChartProps {
  data: DataPoint[];
  title: string;
}

export function LineChart({ data, title }: LineChartProps) {
  const { theme } = useTheme();

  return (
    <div className={`${theme.card} p-6 rounded-xl shadow-sm border ${theme.border}`}>
      <h3 className={`text-lg font-semibold mb-4 ${theme.text}`}>{title}</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={theme.border} />
            <XAxis
              dataKey="timestamp"
              tickFormatter={(timestamp) => format(timestamp, 'HH:mm')}
              stroke={theme.textSecondary}
            />
            <YAxis stroke={theme.textSecondary} />
            <Tooltip
              labelFormatter={(timestamp) => format(timestamp, 'HH:mm:ss')}
              contentStyle={{ backgroundColor: theme.card, border: `1px solid ${theme.border}` }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={theme.chartLine}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}