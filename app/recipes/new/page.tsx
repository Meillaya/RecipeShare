"use client";

import { useRouter } from "next/navigation";
import RecipeForm from "@/components/recipe-form";
import { RecipeFormData } from "@/types/recipe";

export default function NewRecipe() {
  const router = useRouter();

  const handleSubmit = async (data: RecipeFormData & { instructions: any }) => {
    // In a real app, this would be an API call
    console.log("Recipe data:", data);
    // Redirect to recipes list after creation
    router.push("/recipes");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Create New Recipe</h1>
      <RecipeForm onSubmit={handleSubmit} />
    </div>
  );
}