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
  }

  addFavoriteRecipe(recipe) {
    if(!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
  }

  addRecipeToCook(recipe) {
    if(!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe)
    }
  }

  filterFavoritesByName(userInput) {
    let recipesByName = this.favoriteRecipes.filter((recipe) => {
      if(recipe.name.includes(userInput)) {
        return recipe
      }
    })
    return recipesByName;
  }

  filterFavoritesByIngredient(userInput) {
    let matchingIngredientId = null;
    ingredientsData.forEach((ingredient) => {
      if(ingredient.name.userInput) {
        matchingIngredientId = ingredient.id
      }
    })
    let recipesByIngredient = this.favoriteRecipes.filter((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        if(matchingIngredientId === ingredient.id) {
        }
      })
      return recipe 
    })
      return recipesByIngredient
  }

  filterFavoritesByTag(userInput) {
    this.favoriteRecipes.filter(recipe => recipe.tags.contains(userInput))
  }

};

export default User;
