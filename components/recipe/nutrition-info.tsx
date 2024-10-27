interface NutritionInfoProps {
  nutritionInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  servingRatio: number;
}

export function NutritionInfo({ nutritionInfo, servingRatio }: NutritionInfoProps) {
  if (!nutritionInfo) return null;

  const adjustedInfo = {
    calories: Math.round(nutritionInfo.calories * servingRatio),
    protein: Math.round(nutritionInfo.protein * servingRatio),
    carbs: Math.round(nutritionInfo.carbs * servingRatio),
    fat: Math.round(nutritionInfo.fat * servingRatio),
  };

  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-medium mb-3">Nutrition Per Serving</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-2xl font-bold">{adjustedInfo.calories}</div>
          <div className="text-sm text-muted-foreground">Calories</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{adjustedInfo.protein}g</div>
          <div className="text-sm text-muted-foreground">Protein</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{adjustedInfo.carbs}g</div>
          <div className="text-sm text-muted-foreground">Carbs</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{adjustedInfo.fat}g</div>
          <div className="text-sm text-muted-foreground">Fat</div>
        </div>
      </div>
    </div>
  );
}