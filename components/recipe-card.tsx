"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, ChefHat, Star } from "lucide-react";
import Link from "next/link";
import { Recipe } from "@/types/recipe";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle className="line-clamp-2">{recipe.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {recipe.description}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{recipe.servings} servings</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="h-4 w-4" />
            <span>{recipe.difficulty}</span>
          </div>
          {recipe.ratings && (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-current text-yellow-400" />
              <span>{recipe.ratings.average.toFixed(1)}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" className="w-full" asChild>
          <Link href={`/recipes/${recipe.id}`}>View Recipe</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}