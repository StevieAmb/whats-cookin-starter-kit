// const { recipeData } = require("../data/recipes");
// const { ingredientsData } = require("../data/ingredients");
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
    if(!this.favoriteRecipes.contains(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
  }

  addRecipeToCook(recipe) {
    if(!this.recipesToCook.contains(recipe)) {
      this.recipesToCook.push(recipe)
    }
  }

  filterFavoritesByName(userInput) {
    this.favoriteRecipes.filter(recipe => recipe.name === userInput)
  }

  filterFavoritesByIngredient(userInput) {
    this.favoriteRecipes.filter(recipe => recipe.ingredients.contains(userInput))
  }

  filterFavoritesByTag(userInput) {
    this.favoriteRecipes.filter(recipe => recipe.tags.contains(userInput))
  }

};

export default User;
