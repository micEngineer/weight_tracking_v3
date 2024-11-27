import React, { useState } from 'react';
import { Scale } from 'lucide-react';
import type { WeightEntry } from '../types';

interface WeightEntryFormProps {
  onSubmit: (entry: Omit<WeightEntry, 'id'>) => void;
}

export function WeightEntryForm({ onSubmit }: WeightEntryFormProps) {
  const [weight, setWeight] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      date: new Date(),
      weight: Number(weight),
    });
    setWeight('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">体重 (kg)</label>
          <input
            type="number"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            placeholder="例：60.5"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        >
          <Scale className="h-5 w-5 mr-2" />
          体重を記録
        </button>
      </div>
    </form>
  );
}