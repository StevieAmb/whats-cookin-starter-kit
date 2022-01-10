import { expect } from 'chai';
import RecipeBox from '../src/classes/RecipeBox';
import { recipeData } from '../src/data/recipes';
import Recipe from '../src/classes/Recipe';
// import { ingredientsData } from '../src/data/ingredients';

describe('RecipeBox', () => {
  let recipeBox;
  let recipe1;
  let recipe2;
  let recipe3;
  let recipesCollection;
  // let ingredient1;
  // let ingredient2;

  beforeEach(function() {
    recipe1 = new Recipe(recipeData[0])
    recipe2 = new Recipe(recipeData[1])
    recipe3 = new Recipe(recipeData[2])

    recipesCollection = [recipe1, recipe2, recipe3]
    recipeBox = new RecipeBox(recipesCollection)

    // ingredient1 = ingredientsData[0]
    // ingredient2 = ingredientsData[12]
  }); 

    it('Should be a function', () => {
      expect(RecipeBox).to.be.a('function');
    });

    it('Should be an instance of RecipeBox ', () => {
      expect(recipeBox).to.be.an.instanceOf(RecipeBox);
    });

    it('Should should be able to take in recipe data', () => {
      expect(recipeBox.recipesCollection).to.equal(recipesCollection);
    });

    it('Should be able to store recipes by one or more tag', () => {
      expect(recipeBox.storeByTag("snack")).to.deep.equal([recipe1]);
      expect(recipeBox.storeByTag("lunch")).to.deep.equal([recipe2]);
      expect(recipeBox.storeByTag("sauce")).to.deep.equal([recipe3]);
    });

  it('Should be able to filter recipes based on name', () => {
    console.log('recipe1', recipe1.name)
    console.log('recipe2', recipe2.name)
    console.log('recipe3', recipe3.name)
    console.log('LOADED', recipeBox.findRecipeName("Loaded"))
    expect(recipeBox.findRecipeName("Loaded")).to.deep.equal([recipe1]);
    console.log(recipeBox.matchingRecipes)
      expect(recipeBox.findRecipeName("Dijon")).to.deep.equal([recipe2]);
      expect(recipeBox.findRecipeName("Wing")).to.deep.equal([recipe3]);
    });

  it('Should be able to search by ingredients ', () => {
    expect(recipeBox.findIngredientById('wheat flour')).to.deep.equal([recipe1]);
    expect(recipeBox.findIngredientById('apple')).to.deep.equal([recipe]);
  });
  });

