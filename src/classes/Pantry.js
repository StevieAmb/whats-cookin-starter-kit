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
    const neededIngredients = recipeIngredients.filter(ingredient => {
      const enoughIngredients = pantryIngredients.every(item => ingredient.id === item.id && item.amount >= parseInt(ingredient.quantity.amount));
      if (!enoughIngredients) {
        return ingredient
      }
    })
    return neededIngredients
  }
  
  
  findRemainingNeededIngredients(recipe) {
    let notEnoughorMismatchedIngredients = this.determineIfEnoughIngredientsForRecipe()
    let userNeededIngredients = notEnoughorMismatchedIngredients.reduce((neededIngredients, ingredient) => {
      recipe.ingredients.forEach(recipeIngredient => {
        neededIngredientsObj.push({amountNeeded: recipeIngredient.quantity.amount - ingredient.amount, ingredientName: ingredient.name})
        return neededIngredients;
      }, [])
    })
      return userNeededIngredients;
    }
  }
  
  //Create a method that iterates through the needed ingredients returned from determineIfEnoughIngredientsForRecipe
  //Also iterate through the recipe ingredients and compare the amounts 
  //Return the amount of each missing ingredient needed


};

export default Pantry;