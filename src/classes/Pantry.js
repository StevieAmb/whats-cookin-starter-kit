import { usersData } from '../src/data/users'

class Pantry{
  constructor(user) {
    this.shelf = user.pantry;
  }

  determineIfHasEnoughIngredients(recipe) {
    let userIngredients = this.shelf.reduce((allUserIngredientIds, userIngredient) => {
      recipe.ingredients.forEach(recipeIngredient => {
        if (recipeIngredient.id === userIngredient.ingredient)
          allUserIngredientIds.push(userIngredient.ingredient)
      })
      return allUserIngredientIds;
    }, [])
    return userIngredients
  }
}