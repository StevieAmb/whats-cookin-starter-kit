class RecipeBox {
  constructor(recipeData) {
    this.recipeData = recipeData;
  }
  
};

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
  
//Should be able to store recipes by one or more tag
  //Iterate through the recipeData array, 
  //If tag.includes 'string name of tag' 
  //Then return the whole object in new array 

//Should be able to filter recipes based on name 
  //  