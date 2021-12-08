import Ingredient from "./Ingredient";

class Recipe {
  constructor(id, image, ingredients, instructions, name, tags) {
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.name = name;
    this.tags = tags;
  }

  determineIngredient(recipeId) {
    const ingredients = new Ingredients();
    ingredients.ingredients.filter(ingredient => {
      if(recipeId === ingredient.id) {
        return ingredient;
      }
    }
  }

  determineCost(recipeId) {
    const ingredients = new Ingredients();
    ingredients.ingredients.filter(ingredient => {
      if(recipeId === ingredient.id) {

        const totalCents += ingredients.estimatedCostInCents;

      }
    })

  }
  //need to get access to the ingredients of a specific recipe
  //the costs and the units will be multiplied together
  //the cost is in the ingredients file 
  //the units are in recipe property 
};

export default Recipe;
