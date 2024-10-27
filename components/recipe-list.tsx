"use client";

import { useState } from "react";
import { RecipeCard } from "@/components/recipe-card";
import { SearchFilters } from "@/components/search-filters";
import { Recipe } from "@/types/recipe";
import { mockRecipes } from "@/lib/mock-data";

const cuisines = ["All", "Italian", "American", "Chinese", "Japanese", "Mexican", "Indian", "Thai"];
const categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert", "Vegetarian", "Vegan", "Gluten-Free"];

export function RecipeList() {
  const [search, setSearch] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("title");

  const filteredAndSortedRecipes = mockRecipes
    .filter((recipe) => {
      const matchesSearch =
        recipe.title.toLowerCase().includes(search.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(search.toLowerCase())
        ) ||
        recipe.cookTime.toLowerCase().includes(search.toLowerCase());

      const matchesCuisine =
        selectedCuisine === "All" || recipe.cuisine === selectedCuisine;

      const matchesCategory =
        selectedCategory === "All" ||
        recipe.categories.includes(selectedCategory);

      return matchesSearch && matchesCuisine && matchesCategory;
    })
    .sort((a: Recipe, b: Recipe) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title);
        case "cookTime":
          return parseInt(a.cookTime) - parseInt(b.cookTime);
        case "rating":
          return ((b.ratings?.average || 0) - (a.ratings?.average || 0));
        default:
          return 0;
      }
    });

  return (
    <div className="space-y-6">
      <SearchFilters
        search={search}
        onSearchChange={setSearch}
        selectedCuisine={selectedCuisine}
        onCuisineChange={setSelectedCuisine}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
        cuisines={cuisines}
        categories={categories}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {filteredAndSortedRecipes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">
            No recipes found. Try adjusting your search or filters.
          </p>
        </div>
      )}
    </div>
  );
}