import React from 'react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { WeightEntry } from '../types';

interface WeightGraphProps {
  entries: WeightEntry[];
}

export function WeightGraph({ entries }: WeightGraphProps) {
  const sortedEntries = [...entries].sort((a, b) => a.date.getTime() - b.date.getTime());

  const data = sortedEntries.map((entry) => ({
    date: entry.date,
    weight: entry.weight,
    formattedDate: format(entry.date, 'M/d HH:mm', { locale: ja }),
  }));

  // 体重の最小値と最大値を計算し、グラフの表示範囲を設定
  const weights = entries.map((entry) => entry.weight);
  const minWeight = Math.floor(Math.min(...weights) - 1);
  const maxWeight = Math.ceil(Math.max(...weights) + 1);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="w-full h-[400px]">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="formattedDate"
              angle={-45}
              textAnchor="end"
              height={70}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              domain={[minWeight, maxWeight]}
              tick={{ fontSize: 12 }}
              label={{ 
                value: '体重 (kg)', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle' }
              }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
              formatter={(value: number) => [`${value} kg`, '体重']}
              labelFormatter={(label) => `${label}`}
            />
            <Line
              type="monotone"
              dataKey="weight"
              stroke="#ec4899"
              strokeWidth={2}
              dot={{ fill: '#ec4899', strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}