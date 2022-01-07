const { ingredientsData } = require("../data/ingredients");
const { userData } = require("../data/users");

class Pantry {
  constructor(user) {
    this.shelf = user.pantry;
  }

  showPantryIngredientInfo() {
    let nameOfUserIngredients = [];
    ingredientsData.forEach(ingredient => {
      this.shelf.forEach(userIngredient => {
        if(ingredient.id === userIngredient.ingredient) {
          nameOfUserIngredients.push({id: `${userIngredient.ingredient}`, amount: `${userIngredient.amount}`, name: `${ingredient.name}`})
        }
      })
    })
    return nameOfUserIngredients;
  }

  determineIfEnoughIngredientsForRecipe(recipe) {
    let userIngredientAmt = this.showPantryIngredientInfo();
    console.log(userIngredientAmt);
    for(var i = 0; i < recipe.ingredients.length; i++) {
      let match = false 
      for(var j = 0; j < userIngredientAmt.length; j++) {
        if (recipe.ingredients[i].id === parseInt(userIngredientAmt[j].id)) {
          console.log('one')
          match = true
        }
        if ((recipe.ingredients[i].id === parseInt(userIngredientAmt[j].id)) && (userIngredientAmt[j].amount < recipe.ingredients[i].quantity.amount)) {
          console.log('two')
          return "You don't have enough ingredients to cook this recipe";
         
        }
      }
      if (match === false) {
        console.log('three')
        console.log('id', recipe.ingredients[i].id)
       return "You don't have enough ingredients to cook this recipe";
      
      }
    } 
    return "Let's get cookin', good lookin!"
  }
}


export default Pantry;