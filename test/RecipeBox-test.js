import { expect } from 'chai';
import RecipeBox from '../src/classes/RecipeBox';

describe('Recipe', () => {
const recipeBox;

  beforeEach(() => {
    const recipe1 = new Recipe(1, "src1", [{"ingred1"}, {"ingred2"}, {"ingred3"}], [{"instruct1"}, {"instruct2"}, {"instruct3"}], "Spaghetti", ["pasta", "main"])
    const recipe2 = new Recipe(2, "src2", [{"ingred1"}, {"ingred2"}, {"ingred3"}], [{"instruct1"}, {"instruct2"}, {"instruct3"}], "Grilled Cheese", ["sandwich", "main"])
    const recipe3 = new Recipe(3, "src3", [{"ingred1"}, {"ingred2"}, {"ingred3"}], [{"instruct1"}, {"instruct2"}, {"instruct3"}], "CheeseCake", ["dessert", "sweet"])
    const recipeBox = new RecipeBox(recipe1, recipe2, recipe3)

    it.only('Should be a function', () => {
      expect(RecipeBox).to.be.a('function');
    });
  
    it('Should be an instance of RecipeBox ', () => {
      expect(recipeBox).to.be.an.instanceOf(RecipeBox);
    });
  
    it('Should ', () =>g
      expect().to.be.a();
    });
  
    it('Should ', () => {
      expect().to.be.a();
    });
  
    it('Should ', () => {
      expect().to.be.a();
    });
  
    it('Should ', () => {
      expect().to.be.a();
    });
  
    it('Should ', () => {
      expect().to.be.a();
    });
  
    it('Should ', () => {
      expect().to.be.a();
    });
  
    it('Should ', () => {
      expect().to.be.a();
    });
  
    it('Should ', () => {
      expect().to.be.a();
    });
  
    it('Should ', () => {
      expect().to.be.a();
    });
  
    it('Should ', () => {
      expect().to.be.a();
    });
  });
});