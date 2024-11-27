import React, { useState } from 'react';
import { WeightEntryForm } from './WeightEntryForm';
import { WeightList } from './WeightList';
import { WeightGraph } from './WeightGraph';
import type { WeightEntry } from '../types';
import { ListFilter, LineChart } from 'lucide-react';

interface WeightTabsProps {
  entries: WeightEntry[];
  onSubmit: (entry: Omit<WeightEntry, 'id'>) => void;
}

export function WeightTabs({ entries, onSubmit }: WeightTabsProps) {
  const [activeTab, setActiveTab] = useState<'list' | 'graph'>('list');

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-4" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('list')}
            className={`${
              activeTab === 'list'
                ? 'border-pink-500 text-pink-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            } flex items-center whitespace-nowrap border-b-2 py-2 px-1 text-sm font-medium`}
          >
            <ListFilter className="h-5 w-5 mr-2" />
            リスト表示
          </button>
          <button
            onClick={() => setActiveTab('graph')}
            className={`${
              activeTab === 'graph'
                ? 'border-pink-500 text-pink-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            } flex items-center whitespace-nowrap border-b-2 py-2 px-1 text-sm font-medium`}
          >
            <LineChart className="h-5 w-5 mr-2" />
            グラフ表示
          </button>
        </nav>
      </div>

      <WeightEntryForm onSubmit={onSubmit} />

      {activeTab === 'list' ? (
        <WeightList entries={entries} />
      ) : (
        <WeightGraph entries={entries} />
      )}
    </div>
  );
}