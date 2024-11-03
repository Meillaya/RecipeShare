"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Users,
  ChefHat,
  Scale,
  Star,
  ThumbsUp,
  Printer,
  Share2,
  Bookmark,
} from "lucide-react";
import { ServingsAdjuster } from "@/components/recipe/servings-adjuster";
import { UnitConverter } from "@/components/recipe/unit-converter";
import { NutritionInfo } from "@/components/recipe/nutrition-info";
import { RecipeInstructions } from "@/components/recipe/recipe-instructions";
import { Recipe } from "@/types/recipe";

interface RecipeDetailProps {
  recipe: Recipe;
}

export function RecipeDetail({ recipe }: RecipeDetailProps) {
  const [servings, setServings] = useState(recipe.servings);
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  const servingRatio = servings / recipe.servings;

  return (
    <article className="max-w-4xl mx-auto">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{recipe.title}</h1>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{recipe.cuisine}</Badge>
            {recipe.categories.map((category) => (
              <Badge key={category} variant="outline">
                {category}
              </Badge>
            ))}
          </div>
          <p className="text-lg text-muted-foreground">{recipe.description}</p>
        </div>

        {/* Recipe Image and Quick Info */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8">
          <div className="space-y-4">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full aspect-video object-cover rounded-lg"
              width={800}
              height={450}
            />
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{recipe.cookTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{servings} servings</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="h-4 w-4" />
                <span>{recipe.difficulty}</span>
              </div>
              {recipe.ratings && (
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>
                    {recipe.ratings.average.toFixed(1)} ({recipe.ratings.count}{" "}
                    ratings)
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-4 border rounded-lg space-y-4">
              <ServingsAdjuster
                servings={servings}
                onChange={setServings}
                min={1}
                max={12}
              />
              <UnitConverter unit={unit} onUnitChange={setUnit} />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <Printer className="h-4 w-4 mr-2" />
                Print
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>

            <NutritionInfo
              nutritionInfo={recipe.nutritionInfo}
              servingRatio={servingRatio}
            />
          </div>
        </div>

        {/* Recipe Content */}
        <Tabs defaultValue="ingredients" className="mt-8">
          <TabsList>
            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            <TabsTrigger value="instructions">Instructions</TabsTrigger>
          </TabsList>

          <TabsContent value="ingredients" className="mt-4">
            <ul className="grid gap-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-md"
                >
                  <Scale className="h-4 w-4 text-muted-foreground" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="instructions" className="mt-4">
            <RecipeInstructions instructions={recipe.instructions} />
          </TabsContent>
        </Tabs>

        {/* User Interaction */}
        <div className="border-t pt-6 mt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <ThumbsUp className="h-4 w-4 mr-2" />
                Helpful
              </Button>
              <p className="text-sm text-muted-foreground">
                Last updated {recipe.updatedAt.toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}