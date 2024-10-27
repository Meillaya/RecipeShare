export const mockRecipes = [
  {
    id: "1",
    title: "Classic Margherita Pizza",
    description: "A traditional Italian pizza with fresh basil, mozzarella, and tomatoes.",
    cookTime: "30 mins",
    servings: 4,
    difficulty: "Easy",
    cuisine: "Italian",
    categories: ["Pizza", "Vegetarian"],
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&auto=format&fit=crop&q=60",
    ingredients: [
      "2 cups all-purpose flour",
      "1 cup warm water",
      "2 1/4 tsp active dry yeast",
      "1 tsp sugar",
      "1 tsp salt",
      "2 tbsp olive oil",
      "1 cup tomato sauce",
      "8 oz fresh mozzarella",
      "Fresh basil leaves",
      "Extra virgin olive oil for drizzling"
    ],
    instructions: {
      blocks: [
        {
          type: "paragraph",
          data: {
            text: "Mix warm water with sugar and yeast. Let stand for 5 minutes until foamy."
          }
        },
        {
          type: "paragraph",
          data: {
            text: "In a large bowl, combine flour and salt. Add the yeast mixture and olive oil."
          }
        },
        {
          type: "paragraph",
          data: {
            text: "Knead dough for 10 minutes until smooth. Let rise for 1 hour."
          }
        }
      ]
    },
    nutritionInfo: {
      calories: 250,
      protein: 12,
      carbs: 30,
      fat: 8
    },
    ratings: {
      average: 4.8,
      count: 245
    },
    updatedAt: new Date("2024-03-20")
  },
  {
    id: "2",
    title: "Chocolate Chip Cookies",
    description: "Soft and chewy cookies loaded with chocolate chips.",
    cookTime: "25 mins",
    servings: 24,
    difficulty: "Easy",
    cuisine: "American",
    categories: ["Dessert", "Baking"],
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop&q=60",
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 cup butter, softened",
      "3/4 cup sugar",
      "3/4 cup brown sugar",
      "2 large eggs",
      "1 tsp vanilla extract",
      "1 tsp baking soda",
      "1/2 tsp salt",
      "2 cups chocolate chips"
    ],
    instructions: {
      blocks: [
        {
          type: "paragraph",
          data: {
            text: "Preheat oven to 375°F (190°C). Line baking sheets with parchment paper."
          }
        },
        {
          type: "paragraph",
          data: {
            text: "Cream together butter, sugar, and brown sugar until smooth."
          }
        },
        {
          type: "paragraph",
          data: {
            text: "Beat in eggs one at a time, then stir in vanilla."
          }
        }
      ]
    },
    nutritionInfo: {
      calories: 150,
      protein: 2,
      carbs: 19,
      fat: 8
    },
    ratings: {
      average: 4.9,
      count: 312
    },
    updatedAt: new Date("2024-03-19")
  }
];