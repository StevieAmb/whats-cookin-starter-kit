const { ingredientsData } = require("../data/ingredients");

class RecipeBox {
  constructor(recipesCollection) {
    this.recipesCollection = recipesCollection;
  }

  storeByTag(theUserInput) {
    let lowerCaseInput = theUserInput.toLowerCase();

    return this.recipesCollection.filter((recipe) => {
      if (recipe.tags.includes(lowerCaseInput)) {
        return recipe
      }
    })
  }

  findRecipeName(theUserInput) {
    let lowerCaseInput = theUserInput.toLowerCase();

    return this.recipesCollection.filter((recipe) => {
      let lowerCasedName = recipe.name.toLowerCase();

      if (lowerCasedName.includes(lowerCaseInput)) {
        return recipe
      }
    })
  }

  findIngredientById(theUserInput) {    
    return this.recipesCollection.reduce((acc, recipe) => {
      const matchingIngredient = ingredientsData.find((ingredient) => ingredient.name === theUserInput);
      recipe.ingredients.filter((ingredient) => {
        if (ingredient.id === matchingIngredient.id) {
          acc.push(recipe)
        }
        return recipe
      })
       return acc
    }, [])
  }

};

export default RecipeBox;
 

