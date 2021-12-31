const { ingredientsData } = require("../data/ingredients");

class Recipe {
  constructor(recipeData) {
    this.id = recipeData.id;
    this.image = recipeData.image;
    this.ingredients = recipeData.ingredients;
    this.instructions = recipeData.instructions;
    this.name = recipeData.name;
    this.tags = recipeData.tags;
    this.isFavorited = false
  }

  findRecipeIngredientInfo() {
    const recipeIngredients = this.ingredients.map(recipeIngredient => {
      const ingredientNames = ingredientsData.find(ingredientItem => ingredientItem.id === recipeIngredient.id);
      return ingredientNames.name;
    });
    return recipeIngredients;
  }

  getRecipeInstructions() {
    const instructionByOrder = this.instructions.map((elem) => {
     return elem.instruction
  })
  return instructionByOrder
}
  
  calculateRecipeCost() {
    let totalCost;
       const total = this.ingredients.reduce((acc, recipeIngredient) => {
         let foundID = ingredientsData.find(elem => {return elem.id === recipeIngredient.id});
         totalCost = (recipeIngredient.quantity.amount * foundID.estimatedCostInCents) / 100;
         acc += totalCost;
        return acc;
   }, 0);
    return total.toFixed(2);
  }
};

export default Recipe;