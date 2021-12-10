import { expect } from 'chai';
import RecipeBox from '../src/classes/RecipeBox';
import { recipeData } from '../src/data/recipes';
import Recipe from '../src/classes/Recipe';
import { ingredientsData } from '../src/data/ingredients';
import Ingredient from '../src/classes/Ingredient';

describe.only('RecipeBox', () => {
  let recipeBox;
  let recipe1;
  let recipe2;
  let recipe3;
  let recipesCollection;
  let ingredient1;
  let ingredient2;

  beforeEach(function() {
    recipe1 = new Recipe(recipeData[0].id, recipeData[0].image, recipeData[0].ingredients, recipeData[0].instructions, recipeData[0].name, recipeData[0].tags)
    recipe2 = new Recipe(recipeData[1].id, recipeData[1].image, recipeData[1].ingredients, recipeData[1].instructions, recipeData[1].name, recipeData[1].tags)
    recipe3 = new Recipe(recipeData[2].id, recipeData[2].image, recipeData[2].ingredients, recipeData[2].instructions, recipeData[2].name, recipeData[2].tags)

    recipesCollection = [recipe1, recipe2, recipe3]
    recipeBox = new RecipeBox(recipesCollection)

    ingredient1 = new Ingredient(ingredientsData[0])
    ingredient2 = new Ingredient(ingredientsData[12])
  }); 

    it('Should be a function', () => {
      expect(RecipeBox).to.be.a('function');
    });

    it('Should be an instance of RecipeBox ', () => {
      expect(recipeBox).to.be.an.instanceOf(RecipeBox);
    });

    it('Should should be able to take in recipe data', () => {
      expect(recipeBox.recipeData).to.equal(recipesCollection);
    });

    it('Should be able to store recipes by one or more tag', () => {
      expect(recipeBox.storeTag("snack")).to.deep.equal([recipe1]);
      expect(recipeBox.storeTag("lunch")).to.deep.equal([recipe2]);
      expect(recipeBox.storeTag("sauce")).to.deep.equal([recipe3]);
    });

    it('Should be able to filter recipes based on name', () => {
      expect(recipeBox.findRecipeName("Loaded")).to.deep.equal([recipe1]);
      expect(recipeBox.findRecipeName("Dijon")).to.deep.equal([recipe2]);
      expect(recipeBox.findRecipeName("Wing")).to.deep.equal([recipe3]);
    });

  it('Should be able to search by ingredients ', () => {
    expect(recipeBox.findIngredientById('wheat flour')).to.deep.equal([recipe1]);
    expect(recipeBox.findIngredientById('apple')).to.deep.equal([recipe2]);
  });
  });

