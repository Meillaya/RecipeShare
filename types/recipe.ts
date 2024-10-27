export interface Recipe {
  id: string;
  title: string;
  description: string;
  cookTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cuisine: string;
  categories: string[];
  ingredients: string[];
  instructions: any; // EditorJS data
  image?: string;
  nutritionInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  ratings?: {
    average: number;
    count: number;
  };
  createdAt: Date;
  updatedAt: Date;
}