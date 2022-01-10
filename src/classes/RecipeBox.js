const { recipeData } = require("../data/recipes");
const { ingredientsData } = require("../data/ingredients");

class RecipeBox {
  constructor(recipesCollection) {
    this.recipesCollection = recipesCollection;
    // this.matchingRecipesTags = [];
    // this.matchingRecipes = [];
    this.recipeMatch = [];
  }

  storeByTag(theUserInput) {
    let lowerCaseInput = theUserInput.toLowerCase();

    return this.recipesCollection.filter((recipe) => {
      if (recipe.tags.includes(lowerCaseInput)) {
        return recipe
      }
    })
    // return this.matchingRecipesTags;
  }

  findRecipeName(theUserInput) {
    let lowerCaseInput = theUserInput.toLowerCase();

    return this.recipesCollection.filter((recipe) => {
      let lowerCasedName = recipe.name.toLowerCase();

      if (lowerCasedName.includes(lowerCaseInput)) {
        return recipe
      }
    })
  }

  findIngredientById(theUserInput) {
    let matchingIngredientId = null;
    ingredientsData.forEach((ingredient) => {
      if (ingredient.name === theUserInput) {
        matchingIngredientId = ingredient.id
      }
    })
    this.recipesCollection.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        if (ingredient.id === matchingIngredientId) {
          this.recipeMatch.push(recipe)
        }
      })
    })
    // console.log('FILTER-ID', this.recipeMatch)
    return this.recipeMatch;
  }
};

export default RecipeBox;
 

