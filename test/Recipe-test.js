
import { expect } from 'chai';
import RecipeBox from '../src/classes/RecipeBox';
import recipeData from '../src/data/recipes';
import Recipe from '../src/classes/Recipe';

describe('Recipe', () => {
  let recipeBox;
  let recipe1;
  let recipe2;
  let recipe3;
  let recipeArray;

  beforeEach(() => {
    recipeArray = recipeData;
    recipe1 = new Recipe(recipeArray.recipeData[0].id, recipeArray.recipeData[0].image, recipeArray.recipeData[0].ingredients, recipeArray.recipeData[0].instructions, recipeArray.recipeData[0].name, recipeArray.recipeData[0].tags)
    recipe2 = new Recipe(2, "src2", [{ingred1: "ingred1"}, {ingred2: "ingred2"}, {ingred3: "ingred3"}], [{instruct1: "instruct1"}, {instruct2: "instruct2"}, {instruct3: "instruct3"}], "Grilled Cheese", ["sandwich", "main"])
    recipe3 = new Recipe(3, "src3", [{ingred1: "ingred1"}, {ingred2: "ingred2"}, {ingred3: "ingred3"}], [{instruct1: "instruct1"}, {instruct2: "instruct2"}, {instruct3: "instruct3"}], "CheeseCake", ["dessert", "sweet"])
    recipeBox = new RecipeBox(recipe1, recipe2, recipe3)
    console.log(recipeArray.recipeData[0].id);
  });

    it('Should be a function', () => {
      expect(Recipe).to.be.a('function');
    });
  
    it('Should be an instance of Recipe', () => {
      expect(recipe1).to.be.an.instanceOf(Recipe);
    });
  
    it('Should have an id', () => {
      expect(recipe1.id).to.equal(recipeArray.recipeData[0].id);
    });
  
    it('Should have an image', () => {
      expect(recipe1.image).to.equal(recipeArray.recipeData[0].image);
    });
  
    it('Should have ingredients', () => {
      expect(recipe1.ingredients).to.deep.equal(recipeArray.recipeData[0].ingredients);
    });
  
    it('Should have instructions', () => {
      expect(recipe1.instructions).to.deep.equal(recipeArray.recipeData[0].instructions);
    });
  
    it('Should have a name', () => {
      expect(recipe1.name).to.equal(recipeArray.recipeData[0].name);
    });
  
    it('Should have tags', () => {
      expect(recipe1.tags).to.deep.equal(recipeArray.recipeData[0].tags);
    });
  
    it('Should return a list of ingredients needed for a Recipe ', () => {
      expect(recipe.determineIngredients(595736)).to.be.a();
    });
  
    // it('Should ', () => {
    //   expect().to.be.a();
    // });
  
    // it('Should ', () => {
    //   expect().to.be.a();
    // });
    
    // it('Should ', () => {
    //   expect().to.be.a();
    });
