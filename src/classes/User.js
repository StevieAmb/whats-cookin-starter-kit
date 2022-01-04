// const { recipeData } = require("../data/recipes");
const { ingredientsData } = require("../data/ingredients");
// import Recipe from '../src/classes/Recipe';


class User {
  constructor(human) {
    this.name = human.name;
    this.id = human.id;
    this.pantry = human.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.recipeMatch = [];
    this.matchingRecipes = [];
    this.matchingRecipesTags = [];
  }

  
  addFavoriteRecipe(recipe) {
    if(!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
      recipe.isFavorited = true 
    }
  }
  removeFavoriteRecipe(recipe) {
    if(this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.splice(recipe, 1)
      recipe.isFavorited = false
    }
  }
  addRecipeToCook(recipe) {
    if(!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe)
    }
  }
  removeRecipeToCook(recipe) {
    if(this.recipesToCook.includes(recipe)) {
      this.recipesToCook.splice(recipe, 1)
    }
  }
  filterFavoritesByName(userInput) {
    let lowerCasedUserInput = userInput.toLowerCase();
    this.favoriteRecipes.forEach((recipe) => {
      let lowerCasedName = recipe.name.toLowerCase();
      if(lowerCasedName.includes(lowerCasedUserInput)) {
        this.matchingRecipes.push(recipe)
      }
    })
    return this.matchingRecipes;
  }

  filterFavoritesByIngredient(userInput) {
    let matchingIngredientId = null;
    ingredientsData.forEach((ingredient) => {
      if (ingredient.name === userInput) {
        matchingIngredientId = ingredient.id
      }
    })
    this.favoriteRecipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        if(ingredient.id === matchingIngredientId) {
          this.recipeMatch.push(recipe)
        }
      })
    })
    return this.recipeMatch;
  }

  filterFavoritesByTag(userInput) {
    this.favoriteRecipes.forEach((recipe) => {
      if(recipe.tags.includes(userInput)) {
        this.matchingRecipesTags.push(recipe)
      }
    })
    return this.matchingRecipesTags;
  }
};


export default User;
