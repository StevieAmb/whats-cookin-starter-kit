const { ingredientsData } = require("../data/ingredients");
const { userData } = require("../data/users");

class Pantry {
  constructor(user) {
    this.shelf = user.pantry;
  }

  showPantryIngredientInfo() {
    this.shelf.map(userIngredient => {
      ingredientsData.forEach(ingredient => {
        if (ingredient.id === userIngredient.ingredient) {
          userIngredient.name = ingredient.name
        }
      })
    })
    return this.shelf
  }
  //Could we use the findRecipeIngredientInfo method from the Recipe class to instead of repeating the logic here?
  determineIfEnoughIngredientsForRecipe(recipe) {
    let pantryIngredients = this.showPantryIngredientInfo();
    let recipeIngredients = recipe.findRecipeIngredientInfo();
    const ingredientsNeeded = recipeIngredients.filter(ingredient => {
      const enoughIngredients = pantryIngredients.every(item => ingredient.id === item.id && item.amount >= parseInt(ingredient.quantity.amount));
      if (!enoughIngredients) {
        return ingredient
        //returns an array of recipe ingredient objects that are missing from the pantry or less than the amount needed to make the recipe
      }
    })
    return ingredientsNeeded
  }
  findAmountNeeded(recipe) {
    let recipeIngredients = recipe.findRecipeIngredientInfo();
    const newShelf = recipeIngredients.map(recipeIngredient => {
      this.shelf.forEach(pantryIngredient => {
        if (recipeIngredient.id === pantryIngredient.ingredient) {
          recipeIngredient.amountNeeded = pantryIngredient.amount + (parseInt(recipeIngredient.quantity.amount) - pantryIngredient.amount)
        }
        if (recipeIngredient.id !== pantryIngredient.ingredient) {
          recipeIngredient.amountNeeded = recipeIngredient.quantity.amount
        }
      })
        return recipeIngredient
    })
    return newShelf.filter(ingredient => ingredient.amountNeeded)
  }
};

export default Pantry;