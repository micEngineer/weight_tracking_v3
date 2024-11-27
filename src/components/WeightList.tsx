import React from 'react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import type { WeightEntry } from '../types';

interface WeightListProps {
  entries: WeightEntry[];
}

export function WeightList({ entries }: WeightListProps) {
  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <div key={entry.id} className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              {format(entry.date, 'M月d日 (E) HH:mm', { locale: ja })}
            </p>
            <p className="text-xl font-semibold">{entry.weight}kg</p>
          </div>
        </div>
      ))}
    </div>
  );
}