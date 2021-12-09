import { expect } from 'chai';
import RecipeBox from '../src/classes/RecipeBox';
// import recipeData from '../src/data/recipes';
import Recipe from '../src/classes/Recipe';

describe('RecipeBox', () => {
  let recipeBox;
  let recipe1;
  let recipe2;
  let recipe3;

  beforeEach(function() {
    recipe1 = new Recipe(1, "src1", [{ingred1: "ingred1"}, {ingred2: "ingred2"}, {ingred3: "ingred3"}], [{instruct1: "instruct1"}, {instruct2: "instruct2"}, {instruct3: "instruct3"}], "Spaghetti", ["pasta", "main"])
    recipe2 = new Recipe(2, "src2", [{ingred1: "ingred1"}, {ingred2: "ingred2"}, {ingred3: "ingred3"}], [{instruct1: "instruct1"}, {instruct2: "instruct2"}, {instruct3: "instruct3"}], "Grilled Cheese", ["sandwich", "main"])
    recipe3 = new Recipe(3, "src3", [{ingred1: "ingred1"}, {ingred2: "ingred2"}, {ingred3: "ingred3"}], [{instruct1: "instruct1"}, {instruct2: "instruct2"}, {instruct3: "instruct3"}], "CheeseCake", ["dessert", "sweet"])
    recipeBox = new RecipeBox(recipe1, recipe2, recipe3)
  }); 

    it('Should be a function', () => {
      expect(RecipeBox).to.be.a('function');
    });

    it('Should be an instance of RecipeBox ', () => {
      expect(recipeBox).to.be.an.instanceOf(RecipeBox);
    });

    it('Should should be able to take in recipe data', () => {
      expect().to.be.a();
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
  // });

  // it('Should ', () => {
  //   expect().to.be.a();
  // });

  // it('Should ', () => {
  //   expect().to.be.a();
  // });

  // it('Should ', () => {
  //   expect().to.be.a();
  })
});
