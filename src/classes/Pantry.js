const { userData } = require("../data/users");

class Pantry {
  constructor(user) {
    this.shelf = user.pantry;
  }

  // determineAmountOfIngredientsUserHas(recipe) {
  //   let userIngredientsAmt = this.shelf.reduce((allUserIngredientAmt, userIngredient) => {
  //     recipe.ingredients.forEach(recipeIngredient => {
  //       if (recipeIngredient.id === userIngredient.ingredient)
  //         allUserIngredientAmt.push(userIngredient.amount)
  //     })
  //     return allUserIngredientAmt;
  //   }, [])
  //   return userIngredientsAmt
  // }

  determineAmountOfIngredientsUserHas() {
    let userIngredientAmt = this.shelf.map(ingredient => {
      return ingredient.amount 
    })
    return userIngredientAmt;
  }
  //user ingredients amount is an array of the amount of each ingredient the user
  //has if it matches the ingredients in the recipe

  determineIfEnoughIngredientsForRecipe(recipe) {
    let userIngredientAmt = this.determineAmountOfIngredientsUserHas(recipe);
    let userMessage = "";
    console.log(userIngredientAmt);
    userIngredientAmt.forEach(amount => {
      recipe.ingredients.forEach(ingredient => {
        if(amount < ingredient.quantity.amount || !userIngredientAmt.includes(ingredient.quantity.amount)) {
          userMessage = "You don't have enough ingredients to cook this recipe"
        } else {
          userMessage = "Let's get cookin', good lookin";
        }
      })
    })
    return userMessage
  }
}


export default Pantry;