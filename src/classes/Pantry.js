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
    console.log('hi')
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
      })
      if ((!acc.includes(pantryIngredient)) && (pantryIngredient.amount !== 0)) {
        acc.push(pantryIngredient)
        this.shelf = acc
      }
        return acc
    }, [])
  }

  makeShoppingList(ingredientNames) {
    return ingredientNames.map(name => {
    ingredientsData.forEach(ingredient => {
        if (ingredient.name === name) {
          name = ingredient
        }
      })
      return name
    })  
  }
  
  // shopForIngredients(ingredientNames) {
  //   let groceries = this.makeShoppingList(ingredientNames);
  //   this.shelf.reduce((acc, pantryItem) => {
  //     groceries.forEach(listItem => {
  //       if (!acc.includes(listItem)) {
  //         listItem = {
  //           ingredient: listItem.id,
  //           amount: 1,
  //           name: listItem.name
  //         }
  //         acc.push(listItem)
  //       }
  //       if (!acc.includes(pantryItem) && pantryItem.ingredient === listItem.id) {
  //         pantryItem.amount++
  //         acc.push(pantryItem)
  //       }
  //     })
  //       this.shelf = acc
  //     return acc
  //   }, [])
  // }

};

export default Pantry;