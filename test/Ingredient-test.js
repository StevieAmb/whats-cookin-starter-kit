import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';
import { ingredientsData } from '../src/data/ingredients'


describe('Ingredient', () => {
let ingredient1, ingredient2, ingredient3, ingredientsRepo;

  beforeEach(() => {   
    ingredient1 = new Ingredient(data.ingredientsData[0]);

    ingredient2 = new Ingredient(data.ingredientsData[1]);

    ingredient3 = new Ingredient(data.ingredientsData[2]);

    ingredientsRepo = [ingredient1, ingredient2, ingredient3];

    it('Should be a function', () => {
      expect(Ingredient).to.be.a('function');
    });
  
    it('Should be an instance of Ingredient ', () => {
      expect().to.be.an.instanceOf(Ingredient); 
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
    
    it('Should ', () => {
      expect().to.be.a();
    });
  });
});
