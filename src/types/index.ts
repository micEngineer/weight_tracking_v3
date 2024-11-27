export interface FoodEntry {
  id: string;
  date: Date;
  meal: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  description: string;
  calories?: number;
}

export interface WeightEntry {
  id: string;
  date: Date;
  weight: number;
}