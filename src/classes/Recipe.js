const { ingredientsData } = require("../data/ingredients");

class Recipe {
  constructor(recipeData) {
    this.id = recipeData.id;
    this.image = recipeData.image;
    this.ingredients = recipeData.ingredients;
    this.instructions = recipeData.instructions;
    this.name = recipeData.name;
    this.tags = recipeData.tags;
    this.isFavorited = false;
    this.addedToCook = false;
  }

  findRecipeIngredientInfo() {
    const recipeIngredients = this.ingredients.map(recipeIngredient => {
      // const ingredientAmt = recipeIngredient.quantity.amount;
      // const ingredientUnit = recipeIngredient.quantity.unit;
      ingredientsData.find(ingredientItem => {
        if (ingredientItem.id === recipeIngredient.id) {
          recipeIngredient.name = ingredientItem.name;
        }
      });
      return recipeIngredient
      // { id: `${ingredientItem.id}`, amount: `${ingredientAmt}`, unit: `${ingredientUnit}`, name: `${ingredientName.name}` };
    });
    return recipeIngredients;
  }
  //refactor to add the name property to the recipe ingredient objects. Then we can use this to consolidate and simplify the logic in the pantry class (pass through an array of ingredients? For the recipe it would be this.ingredients and for other ingredients such as ones returned from determineIfEnoughIngredientsForRecipe in the Pantry class assign a method invocation to a variable and pass it through) 

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