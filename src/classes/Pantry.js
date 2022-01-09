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
    console.log(recipe.findRecipeIngredientInfo())
    let ingredientsNeeded = this.determineIfEnoughIngredientsForRecipe();
    let theIngredients = recipe.findRecipeIngredientInfo();
    console.log('NEED', ingredientsNeeded, 'EXIST', theIngredients)
    const newShelf = ingredientsNeeded.map(neededIngredient => {
      theIngredients.forEach(theIngredient => {
        if (theIngredient.id === neededIngredient.amount) {
          console.log('hi')
        }
      })
    })
  }
};


//We have an array of ingredients that are either missing from the user's pantry OR, that we don't have
//enough (INGREDIENTS NEEDED TO COOK RECIPE)

//so if we iterate through the recipe array, and check if the ingredients we need match the recipe ingredients,
//IF they do 
// findAmountNeeded(recipe) {
//   let neededIngredients = this.determineIfEnoughIngredientsForRecipe();
// console.log(this.determineIfEnoughIngredientsForRecipe())
// console.log(recipe.findRecipeIngredientInfo())
// // let recipeIngredients = recipe.findRecipeIngredientInfo()
// console.log('NEED', neededIngredients, 'EXIST', recipeIngredients)
// const newShelf = recipeIngredients.map(recipeIngredient => {
//   this.shelf.forEach(pantryIngredient => {
//     if (recipeIngredient.id === pantryIngredient.ingredient) {
//       recipeIngredient.amountNeeded = pantryIngredient.amount - (parseInt(recipeIngredient.quantity.amount))
//     }
//     if (recipeIngredient.id !== pantryIngredient.ingredient) {
//       recipeIngredient.amountNeeded = recipeIngredient.quantity.amount
//     }
//   })
//     return recipeIngredient
// })
// return newShelf.filter(ingredient => ingredient.amountNeeded)
// }

// cookRecipe(recipe) {
//   return this.shelf.reduce((acc, pantryIngredient) => {
//     recipe.ingredients.forEach(recipeIngredient => {
//       if (pantryIngredient.ingredient === recipeIngredient.id) {
//         pantryIngredient.amount = pantryIngredient.amount - recipeIngredient.quantity.amount

//       }
//       if (pantryIngredient.amount < 0) {
//         // let index = pantryIngredient.indexof();
//         this.shelf.splice(index, 1)
//       }
//       // console.log(pantryIngredient.name, pantryIngredient.amount, pantryIngredient.amount > 0 && !acc.includes(pantryIngredient))
//       if ((!acc.includes(pantryIngredient)) && (pantryIngredient.amount > 0)) {
//         // console.log((!acc.includes(pantryIngredient)) && (pantryIngredient.amount > 0))
//         acc.push(pantryIngredient)
//         this.shelf = acc
//       }
//     })
//     return this.shelf
//   }, [])
// }

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

// };

export default Pantry;