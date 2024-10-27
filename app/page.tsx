import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, ChefHat } from "lucide-react";
import Link from "next/link";

const featuredRecipes = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    cookTime: "30 mins",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Chocolate Chip Cookies",
    cookTime: "25 mins",
    servings: 24,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Beef Stir Fry",
    cookTime: "20 mins",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&auto=format&fit=crop&q=60",
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Share Your Culinary Creations</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join our community of food lovers and share your favorite recipes with the world.
          Discover new dishes and connect with passionate cooks.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/recipes">Browse Recipes</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/recipes/new">Share Recipe</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRecipes.map((recipe) => (
            <Card key={recipe.id} className="overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{recipe.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full" asChild>
                  <Link href={`/recipes/${recipe.id}`}>View Recipe</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}