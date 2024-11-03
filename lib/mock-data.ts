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
    servings: 3,
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
  },
  {
    id: "3",
    title: "Beef Stir-Fry",
    description: "A quick and flavorful stir-fry with beef, vegetables, and a savory sauce.",
    cookTime: "25 mins",
    servings: 2,
    difficulty: "Easy",
    cuisine: "Chinese",
    categories: ["Stir-Fry", "Beef"],
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&auto=format&fit=crop&q=60",
    ingredients: [
      "1 lb beef sirloin, sliced thin",
      "2 cups mixed vegetables (broccoli, carrots, snap peas)",
      "3 cloves garlic, minced",
      "1 tbsp ginger, minced",
      "1/4 cup soy sauce",
      "2 tbsp vegetable oil",
      "2 tbsp cornstarch",
      "1/4 cup beef broth",
      "1 tbsp sesame oil"    ],
    instructions: {
      blocks: [
        {
          type: "paragraph",
          data: {
            text: "Heat vegetable oil in a large wok or skillet over high heat."
          }
        },
        {
          type: "paragraph",
          data: {
            text: "Add sliced beef and stir-fry until browned, about 3-4 minutes. Remove and set aside."
          }
        },
        {
          type: "paragraph",
          data: {
            text: "Add garlic and ginger to the pan, stir-fry for 30 seconds. Add vegetables and stir-fry until crisp-tender."
          }
        },
        {
          type: "paragraph",
          data: {
            text: "Return beef to pan. Mix cornstarch with beef broth and soy sauce, pour into pan. Cook until sauce thickens."
          }
        },
        {
          type: "paragraph",
          data: {
            text: "Finish with a drizzle of sesame oil and serve hot."
          }
        }
      ]
    },    nutritionInfo: {
      calories: 320,
      protein: 25,
      carbs: 15,
      fat: 18
    },
    ratings: {
      average: 4.9,
      count: 12
    },
    updatedAt: new Date("2024-03-19")
  }
];