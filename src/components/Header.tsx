import React from 'react';
import { Scale, Utensils } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center">
        <div className="flex items-center space-x-2">
          <Utensils className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Weight Tracking</h1>
        </div>
      </div>
    </header>
  );
}