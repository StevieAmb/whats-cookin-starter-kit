const { userData } = require("../data/users");

class Pantry {
  constructor(user) {
    this.shelf = user.pantry;
  }

  determineAmountOfIngredientsUserHas(recipe) {
    let userIngredientsAmt = this.shelf.reduce((allUserIngredientAmt, userIngredient) => {
      recipe.ingredients.forEach(recipeIngredient => {
        if (recipeIngredient.id === userIngredient.ingredient)
          allUserIngredientAmt.push(userIngredient.amount)
      })
      return allUserIngredientAmt;
    }, [])
    return userIngredientsAmt
  }

  determineIfEnoughIngredientsForRecipe(recipe) {
    let userIngredientAmt = determineAmountOfIngredientsUserHas();
    let userMessage = "";
    userIngredientAmt.forEach(amount => {
      recipe.ingredients.forEach(ingredient => {
        if(amount < ingredient.quantity.amount) {
          userMessage = "You don't have enough ingredients to cook this recipe"
        } else {
          userMessage = "Let's get cookin', good lookin";
        }
      })
    })
  }
}


export default Pantry;