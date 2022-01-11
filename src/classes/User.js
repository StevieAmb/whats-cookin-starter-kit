const { ingredientsData } = require("../data/ingredients");


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
      recipe.isFavorited = true 
    }
  }

  removeFavoriteRecipe(recipe) {
    if(this.favoriteRecipes.includes(recipe)) {
      let indexOfRecipe = this.favoriteRecipes.indexOf(recipe) 
      this.favoriteRecipes.splice(indexOfRecipe, 1)
      recipe.isFavorited = false
    }
  }

  addRecipeToCook(recipe) {
    if(!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe)
      recipe.addedToCook = true;
    }
  }

  removeRecipeToCook(recipe) {
    if(this.recipesToCook.includes(recipe)) {
      let indexOfRecipe = this.recipesToCook.indexOf(recipe)
      this.recipesToCook.splice(indexOfRecipe, 1)
      recipe.addedToCook = false;
    }
  }

  filterFavoritesByName(userInput) {
    let lowerCasedUserInput = userInput.toLowerCase();
    return this.favoriteRecipes.filter((recipe) => {
      let lowerCasedName = recipe.name.toLowerCase();
      if (lowerCasedName.includes(lowerCasedUserInput)) {
        return recipe
      }
    })
  }

  filterFavoritesByIngredient(userInput) {
    return this.favoriteRecipes.reduce((acc, recipe) => {
      const matchingIngredient = ingredientsData.find((ingredient) => {
        if (userInput === ingredient.name) {
        }
        return ingredient
      });
      recipe.ingredients.filter((ingredient) => {
        if (ingredient.id === matchingIngredient.id) {
          acc.push(recipe)
        }
        return recipe
      })
      return acc
    }, [])
  }
  
  filterFavoritesByTag(userInput) {
    return this.favoriteRecipes.filter((recipe) => recipe.tags.includes(userInput))
  }

};



export default User;