import { expect } from 'chai';
import { beforeEach } from 'mocha';
import Recipe from '../src/classes/Recipe';

describe('Recipe', () => {
const recipe;
const ingredientsData;
  beforeEach(() => {
    recipe1 = new Recipe(1, "src1", [{"ingred1"}, {"ingred2"}, {"ingred3"}], [{"instruct1"}, {"instruct2"}, {"instruct3"}], "Spaghetti", ["pasta", "main"])
    recipe2 = new Recipe(2, "src2", [{"ingred1"}, {"ingred2"}, {"ingred3"}], [{"instruct1"}, {"instruct2"}, {"instruct3"}], "Grilled Cheese", ["sandwich", "main"])
    recipe3 = new Recipe(3, "src3", [{"ingred1"}, {"ingred2"}, {"ingred3"}], [{"instruct1"}, {"instruct2"}, {"instruct3"}], "CheeseCake", ["dessert", "sweet"])
    ingredientsData1 = new Ingredients(1, "baking soda", 475);

    it('Should be a function', () => {
      expect(Recipe).to.be.a('function');
    });
  
    it('Should be an instance of Recipe', () => {
      expect(recipe).to.be.an.instanceOf(Recipe);
    });
  
    it('Should have an id', () => {
      expect(recipe.id).to.equal(1);
    });
  
    it('Should have an image', () => {
      expect(recipe.image).to.equal('src');
    });
  
    it('Should have ingredients', () => {
      expect(recipe.ingredients).to.equal('ingredients');
    });
  
    it('Should have instructions', () => {
      expect(recipe.instructions).to.equal(['food', 'food', 'food']);
    });
  
    it('Should have a name', () => {
      expect(recipe.name).to.equal('Spaghetti');
    });
  
    it('Should have tags', () => {
      expect(recipe.tags).to.equal(['pasta', 'brekkie']);
    });
    recipe.determineCost(1);
    console.log(result);
  
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