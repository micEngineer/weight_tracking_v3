import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import type { FoodEntry } from '../types';

interface FoodEntryFormProps {
  onSubmit: (entry: Omit<FoodEntry, 'id'>) => void;
}

export function FoodEntryForm({ onSubmit }: FoodEntryFormProps) {
  const [meal, setMeal] = useState<FoodEntry['meal']>('breakfast');
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      date: new Date(),
      meal,
      description,
      calories: calories ? Number(calories) : undefined,
    });
    setDescription('');
    setCalories('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">食事の種類</label>
          <select
            value={meal}
            onChange={(e) => setMeal(e.target.value as FoodEntry['meal'])}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          >
            <option value="breakfast">朝食</option>
            <option value="lunch">昼食</option>
            <option value="dinner">夕食</option>
            <option value="snack">間食</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">食事内容</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            placeholder="例：ごはん、味噌汁、焼き魚"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">カロリー (任意)</label>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            placeholder="例：500"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        >
          <PlusCircle className="h-5 w-5 mr-2" />
          記録を追加
        </button>
      </div>
    </form>
  );
}