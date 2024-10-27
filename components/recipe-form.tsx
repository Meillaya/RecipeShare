"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Editor from "@/components/editor";
import { RecipeFormData } from "@/types/recipe";

const cuisines = ["Italian", "American", "Chinese", "Japanese", "Mexican", "Indian", "Thai"];

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  cookTime: z.string().min(1, "Cook time is required"),
  servings: z.number().min(1, "Servings must be at least 1"),
  difficulty: z.enum(["Easy", "Medium", "Hard"]),
  cuisine: z.string().min(1, "Cuisine is required"),
  ingredients: z.array(z.string()).min(1, "At least one ingredient is required"),
});

interface RecipeFormProps {
  onSubmit: (data: RecipeFormData & { instructions: any }) => void;
  initialData?: RecipeFormData & { instructions: any };
}

export default function RecipeForm({ onSubmit, initialData }: RecipeFormProps) {
  const [instructions, setInstructions] = useState(initialData?.instructions || {});
  const [ingredients, setIngredients] = useState<string[]>(
    initialData?.ingredients || [""]
  );

  const form = useForm<RecipeFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      description: "",
      cookTime: "",
      servings: 1,
      difficulty: "Easy",
      cuisine: "",
      ingredients: [""],
    },
  });

  const handleSubmit = (data: RecipeFormData) => {
    onSubmit({ ...data, instructions });
  };

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const removeIngredient = (index: number) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Recipe Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter recipe title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Brief description of your recipe"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <FormField
            control={form.control}
            name="cookTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cook Time</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 30 mins" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="servings"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Servings</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={1}
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="difficulty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Difficulty</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cuisine"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cuisine</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select cuisine" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {cuisines.map((cuisine) => (
                      <SelectItem key={cuisine} value={cuisine}>
                        {cuisine}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <FormLabel>Ingredients</FormLabel>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={ingredient}
                onChange={(e) => {
                  const newIngredients = [...ingredients];
                  newIngredients[index] = e.target.value;
                  setIngredients(newIngredients);
                }}
                placeholder={`Ingredient ${index + 1}`}
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => removeIngredient(index)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button type="button" variant="outline" onClick={addIngredient}>
            Add Ingredient
          </Button>
        </div>

        <div className="space-y-4">
          <FormLabel>Instructions</FormLabel>
          <div className="border rounded-md p-4">
            <Editor
              onChange={(data) => setInstructions(data)}
              initialData={initialData?.instructions}
            />
          </div>
        </div>

        <Button type="submit">Save Recipe</Button>
      </form>
    </Form>
  );
}