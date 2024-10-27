"use client";

import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UnitConverterProps {
  unit: "metric" | "imperial";
  onUnitChange: (unit: "metric" | "imperial") => void;
}

export function UnitConverter({ unit, onUnitChange }: UnitConverterProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Scale className="h-4 w-4" />
        <span className="font-medium">Units</span>
      </div>
      <div className="flex">
        <Button
          variant={unit === "metric" ? "secondary" : "ghost"}
          size="sm"
          onClick={() => onUnitChange("metric")}
          className="rounded-r-none"
        >
          Metric
        </Button>
        <Button
          variant={unit === "imperial" ? "secondary" : "ghost"}
          size="sm"
          onClick={() => onUnitChange("imperial")}
          className="rounded-l-none"
        >
          Imperial
        </Button>
      </div>
    </div>
  );
}