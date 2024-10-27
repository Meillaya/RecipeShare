"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedCuisine: string;
  onCuisineChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  cuisines: string[];
  categories: string[];
}

export function SearchFilters({
  search,
  onSearchChange,
  selectedCuisine,
  onCuisineChange,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  cuisines,
  categories,
}: SearchFiltersProps) {
  return (
    <div className="grid gap-4 md:grid-cols-[2fr,1fr,1fr,1fr]">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search recipes, ingredients, or cooking time..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      <Select value={selectedCuisine} onValueChange={onCuisineChange}>
        <SelectTrigger>
          <SelectValue placeholder="Filter by cuisine" />
        </SelectTrigger>
        <SelectContent>
          {cuisines.map((cuisine) => (
            <SelectItem key={cuisine} value={cuisine}>
              {cuisine}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedCategory} onValueChange={onCategoryChange}>
        <SelectTrigger>
          <SelectValue placeholder="Filter by category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={sortBy} onValueChange={onSortChange}>
        <SelectTrigger>
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="title">Alphabetical</SelectItem>
          <SelectItem value="cookTime">Cooking Time</SelectItem>
          <SelectItem value="rating">Rating</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}