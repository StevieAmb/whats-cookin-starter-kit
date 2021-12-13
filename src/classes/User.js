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
  }

  addFavoriteRecipe(recipe) {
    if(!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
  }
  removeFavoriteRecipe(recipe) {
    if(!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.splice(1, recipe)
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
      if(ingredient.name === userInput) {
        matchingIngredintId = ingredient.id
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
    const recipesByTags = this.favoriteRecipes.filter((recipe) => {
      if(recipe.tags.includes(userInput)) {
        return recipe
      }
    }) 
    return recipesByTags;
  }
  
};


export default User;
