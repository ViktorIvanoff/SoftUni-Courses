const recipeSelection = {

    isTypeSuitable(type, dietaryRestriction) {

      if (typeof type !== "string" || typeof dietaryRestriction !== "string"){
        throw new Error("Invalid input");
      }
      if (dietaryRestriction === "Vegetarian" && type === "Meat") {
        return "This recipe is not suitable for vegetarians";

      } else if (dietaryRestriction === "Vegan" && (type === "Meat" || type === "Dairy")) {
        return "This recipe is not suitable for vegans";
      } else {
        return "This recipe is suitable for your dietary restriction";
      }
    },

    isItAffordable(price, budget) {
                   // 10,  15
      if (typeof price !== "number" || typeof budget !== "number") {
        throw new Error("Invalid input");
      }
  
      let remainingBudget = budget - price;
      //    5             = 9 - 10
      if (remainingBudget < 0) {
            // -1 < 0
        return "You don't have enough budget to afford this recipe";
      } else {
        return `Recipe ingredients bought. You have ${remainingBudget}$ left`;
      }
    },

    getRecipesByCategory(recipes, category) {
         // ([ { title: " Spicy Tofu Stir-Fry ", category: " Asian " }, ...] , 'Asian'

      if (!Array.isArray(recipes) || typeof category !== "string") {
        throw new Error("Invalid input");
      }
  
      const filteredRecipes = recipes.filter((recipe) => recipe.category === category);
      // [ Spicy Tofu Stir-Fry, .... ] 
      return filteredRecipes.map((recipe) => recipe.title);
      // [' Spicy Tofu Stir-Fry' , 'Biryiani' ] = returns an array of strings
    },

  };
  
  module.exports = { recipeSelection };