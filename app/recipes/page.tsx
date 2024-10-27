import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RecipeList } from "@/components/recipe-list";

export default function RecipesPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">All Recipes</h1>
        <Button asChild>
          <Link href="/recipes/new">Create Recipe</Link>
        </Button>
      </div>

      <RecipeList />
    </div>
  );
}