const { recipeData } = require("../data/recipes");
const { ingredientsData } = require("../data/ingredients");

class RecipeBox {
  constructor(recipeData) {
    this.recipeData = recipeData;
  }
  storeTag(theUserInput) {
    let matchingRecipesTags = [];
    recipeData.forEach((recipe) => {
      if(recipe.tags.includes(theUserInput)) {
        matchingRecipesTags.push(recipe)
      }
    })
    return matchingRecipesTags;
  }
  
  findRecipeName(theUserInput) {
    let matchingRecipes = [];
    recipeData.forEach((recipe) => {
      if(recipe.name.includes(theUserInput)) {
        matchingRecipes.push(recipe)
      }
    })
    return matchingRecipes;
  }
  findIngredientById(theUserInput) {
    let matchingIngredientId = null;
    let recipeMatch = [];
    ingredientsData.forEach((ingredient) => {
      if(ingredient.name === theUserInput) {
        matchingIngredientId = ingredient.id
      }
    })
    recipeData.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        if(ingredient.id === matchingIngredientId) {
          recipeMatch.push(recipe)
        }
      })
    })
    return recipeMatch;
  }
}

export default RecipeBox;
 

//Should be able to take in recipe data
//we're passing in recipeData array as the parameter
  //create new instance of recipe box will house the entire recipes array of object
  //create 3 new instances of recipe to pass as one recipeBox array to test 
  //goal: return recipeData 
  //example: const recipe1 = new Recipe(id, image, ingredients, instructions, name, tags)
  // const recipe2 = new Recipe(id, image, ingredients, instructions, name, tags)
  //const recipe3 = new Recipe(id, image, ingredients, instructions, name, tags)
  //const recipeBox = new RecipeBox(recipe1, recipe2, recipe3)
  
//Should be able to store recipes by one or more tag/name
  //given the tag 
  //iterate through the recipeData for tags array
  //iterate through the tags array 
  //if tag is included in array
  //push recipe into new array 
  //return an that new array of recipes that include the tag 
  //If tag.includes 'string name of tag' 
  //Then return the whole object in new array 
//Should be able to filter recipes based on name 
  
//should be able to filter recipes based on ingredients 
//have a user input, filter through ingredientsData for ingredientsData.name
//return the ingredientsData.id 
//compare ingredientsData.id to recipesData.ingredients.id
//if they match then push recipe into matchingIngredientsArray