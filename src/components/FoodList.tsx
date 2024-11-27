import React from 'react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import type { FoodEntry } from '../types';

const mealLabels = {
  breakfast: '朝食',
  lunch: '昼食',
  dinner: '夕食',
  snack: '間食',
};

interface FoodListProps {
  entries: FoodEntry[];
}

export function FoodList({ entries }: FoodListProps) {
  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <div key={entry.id} className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <span className="inline-block px-2 py-1 text-sm font-semibold text-pink-700 bg-pink-100 rounded-full">
                {mealLabels[entry.meal]}
              </span>
              <p className="mt-2 text-gray-600">
                {format(entry.date, 'M月d日 (E) HH:mm', { locale: ja })}
              </p>
              <p className="mt-1 text-lg font-medium">{entry.description}</p>
            </div>
            {entry.calories && (
              <div className="text-right">
                <span className="text-sm text-gray-500">カロリー</span>
                <p className="font-semibold">{entry.calories}kcal</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}