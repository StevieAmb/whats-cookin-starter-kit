const {
  ingredientsData
} = require("../data/ingredients");
// const { userData } = require("../data/users");

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

  determineIfEnoughIngredientsForRecipe(recipe) {
    let pantryIngredients = this.showPantryIngredientInfo();
    let recipeIngredients = recipe.findRecipeIngredientInfo();
    return recipeIngredients.reduce((acc, ingredient) => {
      let pantryItemStatus = pantryIngredients.some((item) => (item.name === ingredient.name && item.amount >= parseInt(ingredient.quantity.amount)))
      if (!acc.includes(ingredient) && !pantryItemStatus) {
        acc.push(ingredient)
      }
      return acc
    }, []);
  }

  findAmountNeeded(recipe) {
    let ingredientsNeeded = this.determineIfEnoughIngredientsForRecipe(recipe);
    return ingredientsNeeded.map(neededIngredient => {
      this.shelf.forEach(item => {
        if (item.name === neededIngredient.name) {
          neededIngredient.amountNeeded = (parseInt(neededIngredient.quantity.amount) - item.amount)       
        }
      })
        if (!neededIngredient.amountNeeded) {
          neededIngredient.amountNeeded = neededIngredient.quantity.amount
        }
      return neededIngredient
    })
  }

  cookRecipe(recipe) {
    return this.shelf.reduce((acc, pantryIngredient) => {
      recipe.ingredients.forEach(recipeIngredient => {
        if (pantryIngredient.ingredient === recipeIngredient.id) {
          pantryIngredient.amount = pantryIngredient.amount - recipeIngredient.quantity.amount

        }
        // else if (pantryIngredient.amount <= 0) {
        //   let index = this.shelf.indexOf(pantryIngredient);
        //   this.shelf.splice(index, 1)
        // }
        // console.log(pantryIngredient.name, pantryIngredient.amount, pantryIngredient.amount > 0 && !acc.includes(pantryIngredient))
        else if ((!acc.includes(pantryIngredient)) && (pantryIngredient.amount > 0)) {
          // console.log((!acc.includes(pantryIngredient)) && (pantryIngredient.amount > 0))
          acc.push(pantryIngredient)
          this.shelf = acc
        }
      })
      return this.shelf
    }, [])
  }

  // makeShoppingList(ingredientNames) {
  //   return ingredientNames.forEach(name => {
  //     ingredientsData.filter(ingredient => ingredient.name === name)
  //   })
  // }
  // //maybe move this to the User class and establist a property that holds a shopping list

  // shopForIngredients(ingredientNames) {
  //   let groceries = this.makeShoppingList(ingredientNames);
  //   // console.log('working', groceries)
  //   this.shelf.reduce((acc, pantryItem) => {
  //     groceries.forEach(item => {
  //       if (pantryItem.name === item.name) {
  //         pantryItem.amount++
  //         acc.push(pantryItem)
  //       } else if (!pantryItem) {
  //         acc.push(item)
  //       }
  //     })
  //     this.shelf = acc
  //     // console.log(this.shelf)
  //     return acc
  //   }, [])
  // }
};

export default Pantry;