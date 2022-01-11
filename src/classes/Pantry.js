const {
  ingredientsData
} = require("../data/ingredients");
// const { userData } = require("../data/users");

class Pantry {
  constructor(user) {
    this.shelf = user.pantry;
    this.shoppingList = []; //Write test for this property
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

  cookRecipe(recipe) { //-subtract
    return this.shelf.reduce((acc, pantryIngredient) => {
      recipe.ingredients.forEach(recipeIngredient => {
        if (pantryIngredient.ingredient === recipeIngredient.id) {
          recipeIngredient.quantity.amount = pantryIngredient.amount - recipeIngredient.quantity.amount
        }
      })
      // if ((!acc.includes(pantryIngredient)) && (pantryIngredient.amount !== 0)) {
        // acc.push(pantryIngredient)
        // this.shelf = acc
      // }
      console.log(acc)
        return acc
    }, [])
  }
  //make this method add ingredients by positive or negative number based on cooking or shopping
  //return the pantry array with all updates

  addToShoppingList(nameInput, amountInput) { 
    let groceryItem = {
      'name': nameInput, 
      'amount': amountInput
    }
    this.shoppingList.push(groceryItem)
    let groceryStuff = this.shoppingList.map(name => {
      ingredientsData.forEach(ingredient => {
        if (ingredient.name === name.name) { //Do we need say only add the id if it doesn't exist?
          groceryItem.id = ingredient.id
  
        }
      })
    })  
    return groceryStuff
  }



  //returns an array of the ingredients that a user would like to add to their pantry
  //userInput.value for ingredient name && userInput.value for the amount
  
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
    console.log('new', groceries)
    return groceries
  }
};

export default Pantry;