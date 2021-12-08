import { expect } from 'chai';
import { beforeEach } from 'mocha';
import Recipe from '../src/classes/Recipe';

describe('Recipe', () => {
const recipe;
  beforeEach(() => {
    recipe = new Recipe(1, "src", "ingredients", ['food', 'food', 'food'], "Spaghetti", ['pasta', 'brekkie']);
    
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
      expect().to.be.a();
    });
  
    it('Should have a name', () => {
      expect().to.be.a();
    });
  
    it('Should have tags', () => {
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