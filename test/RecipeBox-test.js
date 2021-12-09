import { expect } from 'chai';
import RecipeBox from '../src/classes/RecipeBox';
import { recipeData } from '../src/data/recipes';
import Recipe from '../src/classes/Recipe';

describe('RecipeBox', () => {
  let recipe1,
  recipe2,
  recipe3,
  recipesCollection,
  recipeBox;

  beforeEach(function() {
    recipe1 = new Recipe(recipeData[0])
    recipe2 = new Recipe(recipeData[1])
    recipe3 = new Recipe(recipeData[2])

    recipesCollection = [recipe1, recipe2, recipe3]
    recipeBox = new RecipeBox(recipesCollection)
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

    it.only('Should be able to store recipes by one or more tag', () => {
      expect(recipeBox.storeTag("snack")).to.deep.equal([recipe1]);
      expect(recipeBox.storeTag("lunch")).to.equal();
    });

    it('Should be able to filter recipes based on name', () => {
      expect().to.be.a();
    });

  // it('Should ', () => {
  //   expect().to.be.a();
  // });

  // it('Should ', () => {
  //   expect().to.be.a();
  // });

  // it('Should ', () => {
  //   expect().to.be.a();
  // });

  // it('Should ', () => {
  //   expect().to.be.a();
  // });

  // it('Should ', () => {
  //   expect().to.be.a();
  // });

  // it('Should ', () => {
  //   expect().to.be.a();
  // });

  // it('Should ', () => {
  //   expect().to.be.a();
  });

