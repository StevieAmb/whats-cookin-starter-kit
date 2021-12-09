// import Ingredient from "./Ingredient";
const RecipeBox = require('./RecipeBox');
const Ingredient = require('./Ingredient');

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
      if (recipeId === ingredient.id) {
        return ingredient;
      }
    })
  }
  
  // determineCost(recipeId) {
  //   const ingredients = new Ingredients();
  //   const result = ingredients.ingredients.filter(ingredient => {
  //     if (recipeId === ingredient.id) {
  //       const cost = ingredients.estimatedCostInCents;
  //       //this creates an array of each cost
  //       console.log(costs);


  //       return result;
  //       // this.ingredients.filter(ingredient => ingredient.amount)
  //     }
  //   })

  // }
  determineCost(recipeId) {
    const ingredientsData = new Ingredients();
    let result = ingredientsData.ingredients.filter((ingredient) => {
      if (recipeId === ingredient.id) {
        return ingredient.estimatedCostInCents;
      }
    }).map((cost) => cost * ingredientsData.ingredients.amount)
    return result;
  }


  //need to get access to the ingredients of a specific recipe
  //the costs and the units will be multiplied together
  //the cost is in the ingredients file 
  //the units are in recipe property 
};

// export default RecipeBox;

module.exports = Recipe;
