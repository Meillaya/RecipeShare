import { mockRecipes } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { RecipeDetail } from "@/components/recipe/recipe-detail";

export function generateStaticParams() {
  return mockRecipes.map((recipe) => ({
    id: recipe.id,
  }));
}

export default function RecipePage({ params }: { params: { id: string } }) {
  const recipe = mockRecipes.find((r) => r.id === params.id);

  if (!recipe) {
    notFound();
  }

  return <RecipeDetail recipe={recipe} />;
}