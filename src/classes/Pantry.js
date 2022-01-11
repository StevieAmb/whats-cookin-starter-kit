const {
  ingredientsData
} = require("../data/ingredients");


class Pantry {
  constructor(user) {
    this.shelf = user.pantry;
    this.shoppingList = []; 
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
    const negative = recipe.ingredients.map(elem => {
      elem.quantity.amount = -elem.quantity.amount
      return elem
    })
    return negative
  }

  addToShoppingList(nameInput, amountInput) { 
    let groceryItem = {
      'name': nameInput, 
      'amount': amountInput
    }
    this.shoppingList.push(groceryItem)
    let groceryStuff = this.shoppingList.map(name => {
      ingredientsData.forEach(ingredient => {
        if (ingredient.name === name.name) { 
          groceryItem.id = ingredient.id
  
        }
      })
    })  
    return groceryStuff
  }
  shopForIngredients() { 
    let groceries = this.shoppingList.forEach(listItem => {
    this.shelf.reduce((acc, pantryItem) => {
        if (!this.shelf.includes(listItem)) {
          acc.push(listItem)
        } else if (pantryItem.id === listItem.ingredient) {
          pantryItem.amount 
        }
        if (!acc.includes(pantryItem) && pantryItem.id === listItem.id) {
          acc.push(pantryItem)
          pantryItem.amount++
        }
        this.shelf = acc
        return acc
      }, [])
    })
    return groceries
  }
};

export default Pantry;