
const RecipeBox = require('./RecipeBox');
const Ingredient = require('./Ingredient');
const { ids } = require('webpack');

class Recipe {
  constructor(id, image, ingredients, instructions, name, tags) {
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.name = name;
    this.tags = tags;
  }

  determineIngredients(recipeData) {
   let ingredientIds = recipeData.map(recipe => recipe.ingredients.filter(ingredient => ingredient.id)
   return ingredientIds;
  }

  determineIngredientsEvenMore() {
  const ingredientsList = new IngredientsRepo();
  let ingredientIds = this.determineIngredients()

  const ingredientName = ingredientsList.ingredients.filter(ingredient => {
    if(ingredientIds.includes(ingredient.id)) {
      return ingredient.name;
    }
    return ingredientName;
  })
 
  }

  //split this method

  // input: the ids for the specific ingredient of a recipe
  // output: the name of the specific ingredient based on the incoming id!

  // take in a parameter that SHOULD be an array that has the ingredient ids
  // instantiate a class of ingredients, 
  // if the ingredients.id from instance INCLUDES any of the ids from the 
  // parameter, return the NAME

  //Returns ingredients based on recipe id
  determineCost(recipeId) {
    const ingredient = new Ingredient();
    let result = this.ingredients.map(ingredient => ingredient.amount)
    .map((amount) => amount * ingredient.estimatedCostInCents
  }

  //this method determineCost - creates a new instance of ingredients class
  //in order to access the ingredients array
  //it filters through the ingredients array, and if the recipe id
  //being passed into the parameter matches any id of the ingredients
  //in the array, it's going to pull the cost of that ingredient, and put it
  //into an array. 
  //So now we have an array of cost of ingredients we need for a particular recipe
  //and we are going to iterate through that array and multiply that
  //by the amount needed for each recipe. We will return that array
  //of each cost times unit, so that we have an array of [cost * unit]
  //Then, we are going to iterate through the method, using reduce, and
  //

  //Returning the cost of a recipe. 


  //need to get access to the ingredients of a specific recipe
  //the costs and the units will be multiplied together
  //the cost is in the ingredients file 
  //the units are in recipe property 
};

// export default RecipeBox;

module.exports = Recipe;
