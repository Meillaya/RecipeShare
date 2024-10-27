"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus, Users } from "lucide-react";

interface ServingsAdjusterProps {
  servings: number;
  onChange: (servings: number) => void;
  min?: number;
  max?: number;
}

export function ServingsAdjuster({
  servings,
  onChange,
  min = 1,
  max = 12,
}: ServingsAdjusterProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Users className="h-4 w-4" />
        <span className="font-medium">Servings</span>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onChange(Math.max(min, servings - 1))}
          disabled={servings <= min}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center">{servings}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => onChange(Math.min(max, servings + 1))}
          disabled={servings >= max}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}