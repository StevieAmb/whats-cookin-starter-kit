const { recipeData } = require("../data/recipes");
const { ingredientsData } = require("../data/ingredients");

class RecipeBox {
  constructor(recipesCollection) {
    this.recipesCollection = recipesCollection;
    this.matchingRecipesTags = [];
    this.matchingRecipes = [];
    this.recipeMatch = [];
  }
  storeByTag(theUserInput) {
    this.recipesCollection.forEach((recipe) => {
      if(recipe.tags.includes(theUserInput) && !this.matchingRecipesTags.includes(recipe)) {
        this.matchingRecipesTags.push(recipe)
      }
    })
    return this.matchingRecipesTags;
  }
  
  findRecipeName(theUserInput) {
    this.recipesCollection.forEach((recipe) => {
      let lowerCasedName = recipe.name.toLowerCase();
      if(lowerCasedName.includes(theUserInput) && !this.matchingRecipes.includes(recipe)) {
        this.matchingRecipes.push(recipe)
      }
    })
    return this.matchingRecipes;
  }

  findIngredientById(theUserInput) {
    let matchingIngredientId = null;
    ingredientsData.forEach((ingredient) => {
      if(ingredient.name === theUserInput) {
        matchingIngredientId = ingredient.id
      }
    })
    this.recipesCollection.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        if(ingredient.id === matchingIngredientId) {
          this.recipeMatch.push(recipe)
        }
      })
    })
    return this.recipeMatch;
  }
}

export default RecipeBox;
 

