const { ingredientsData } = require("../data/ingredients");
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

  // determineIfEnoughIngredientsForRecipe(recipe) {
  //   let pantryIngredients = this.showPantryIngredientInfo();
  //   let recipeIngredients = recipe.findRecipeIngredientInfo();

  // }

  // determineIfEnoughIngredientsForRecipe(recipe) {
  //   let ingredientsNeeded = [];
  //   let pantryIngredients = this.showPantryIngredientInfo();
  //   let recipeIngredients = recipe.findRecipeIngredientInfo();
  //   recipeIngredients.forEach(ingredient => {
  //     pantryIngredients.forEach(item => {
  //       if (ingredient.id === item.ingredient && item.amount >= parseInt(ingredient.quantity.amount)) {
  //         ingredientsNeeded.push(ingredient)
  //       }
  //     });
  //       //returns an array of recipe ingredient objects that are missing from the pantry or less than the amount needed to make the recipe
  //   })
  //   return ingredientsNeeded
  // }

  // determineIfEnoughIngredientsForRecipe(recipe) {
  //   let pantryIngredients = this.showPantryIngredientInfo();
  //   let recipeIngredients = recipe.findRecipeIngredientInfo();
  //   return pantryIngredients.reduce((acc, currentItem) => {
  //   let foundIngredient = recipeIngredients.find(ingredient => ingredient.id === currentItem.ingredient)
  //     acc.push(foundIngredient)
  //     console.log('THESE',acc)
  //     return acc
  //   }, [])
  // }
// PANTRY[{ ---array
//       ingredient: 11297,
//       amount: 4,
//       name: 'flat leaf parsley leaves'
//     }
  // RECIPE[{ -array
  //       id: 20081,
  //       quantity: {
  //         amount: 1.5,
  //         unit: 'c'
  //       },
  //       name: 'wheat flour'
  //     },

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

  cookRecipe(recipe) {
    return this.shelf.reduce((acc, pantryIngredient) => {
      recipe.ingredients.forEach(recipeIngredient => {
        if (pantryIngredient.ingredient === recipeIngredient.id) {
          pantryIngredient.amount = pantryIngredient.amount - recipeIngredient.quantity.amount
        }
        if (pantryIngredient.amount) {
          acc.push(pantryIngredient)
          this.shelf = acc
        }
      })
      return this.shelf
    }, [])
  }

  makeShoppingList(ingredientNames) {
    return ingredientNames.forEach(name => {
      ingredientsData.map(ingredient => {
        if (ingredient.name === name) {
          return ingredient
        }
      })
    })
  }
  //maybe move this to the User class and establist a property that holds a shopping list

  shopForIngredients(ingredientNames) {
    let groceries = this.makeShoppingList(ingredientNames);
    console.log('working', groceries)
    this.shelf.reduce((acc, pantryItem) => {
      groceries.forEach(item => {
        if (pantryItem.name === item.name) {
          pantryItem.amount++
          acc.push(pantryItem)
        } else if (!pantryItem) {
          acc.push(item)
        }
      })
      this.shelf = acc
      console.log(this.shelf)
      return acc
    }, [])

  }

};

export default Pantry;