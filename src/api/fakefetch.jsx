export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/recipes") {
        resolve({
          status: 200,
          message: "Success",
          recipes: [
            {
              id: 1,
              veg: false,
              recipe_name: "Spicy Thai Curry",
              cuisine: "Thai",
              ingredients: [
                {
                  name: "Chicken",
                  quantity: "500g",
                },
                {
                  name: "Coconut milk",
                  quantity: "400ml",
                },
                {
                  name: "Red curry paste",
                  quantity: "2 tablespoons",
                },
                {
                  name: "Bell peppers",
                  quantity: "2",
                },
                {
                  name: "Bamboo shoots",
                  quantity: "1 can",
                },
                {
                  name: "Fish sauce",
                  quantity: "2 tablespoons",
                },
                {
                  name: "Sugar",
                  quantity: "1 tablespoon",
                },
                {
                  name: "Basil leaves",
                  quantity: "a handful",
                },
              ],
              instructions: [
                "In a large pan, heat some oil over medium heat.",
                "Add the red curry paste and cook for a minute until fragrant.",
                "Add the chicken pieces and cook until they are browned on all sides.",
                "Stir in the coconut milk and bring it to a simmer.",
                "Add the sliced bell peppers and bamboo shoots. Cook for 5 minutes.",
                "Season the curry with fish sauce and sugar. Adjust the seasonings according to your taste.",
                "Simmer for another 10 minutes until the chicken is cooked through.",
                "Sprinkle the basil leaves over the curry and give it a quick stir.",
                "Serve the spicy Thai curry over steamed rice and enjoy!",
              ],
            },
            {
              id: 2,
              veg: true,
              recipe_name: "Chickpea Salad",
              cuisine: "Mediterranean",
              ingredients: [
                {
                  name: "Canned chickpeas",
                  quantity: "1 can",
                },
                {
                  name: "Cucumber",
                  quantity: "1",
                },
                {
                  name: "Cherry tomatoes",
                  quantity: "1 cup",
                },
                {
                  name: "Red onion",
                  quantity: "1/2",
                },
                {
                  name: "Feta cheese",
                  quantity: "1/2 cup",
                },
                {
                  name: "Kalamata olives",
                  quantity: "1/4 cup",
                },
                {
                  name: "Fresh parsley",
                  quantity: "1/4 cup",
                },
                {
                  name: "Lemon juice",
                  quantity: "2 tablespoons",
                },
                {
                  name: "Olive oil",
                  quantity: "2 tablespoons",
                },
                {
                  name: "Salt",
                  quantity: "to taste",
                },
                {
                  name: "Black pepper",
                  quantity: "to taste",
                },
              ],
              instructions: [
                "Drain and rinse the chickpeas.",
                "Dice the cucumber, cherry tomatoes, and red onion.",
                "In a large bowl, combine the chickpeas, cucumber, cherry tomatoes, red onion, feta cheese, Kalamata olives, and fresh parsley.",
                "In a small bowl, whisk together the lemon juice, olive oil, salt, and black pepper to make the dressing.",
                "Pour the dressing over the salad and toss to combine.",
                "Refrigerate for at least 30 minutes before serving to allow the flavors to meld.",
                "Serve the Mediterranean chickpea salad as a refreshing side dish or a light lunch.",
              ],
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "Books list not found.",
        });
      }
    }, 2000);
  });
};
