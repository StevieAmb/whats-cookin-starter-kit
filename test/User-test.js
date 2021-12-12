import { expect } from 'chai';
import { usersData } from '../src/data/users'
import { recipeData } from '../src/data/recipes'
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';

describe('User', () => {
  let user, myRecipe;
  beforeEach(() => {
    myRecipe = new Recipe(recipeData[0]);
    user = new User(usersData[0]);
  });
    
    it('Should be a function', () => {
      expect(User).to.be.a('function');
    });
 
    it('Should be an instance of User', () => {
      expect(user).to.be.an.instanceOf(User);
    });

    it('Should have a name', () => {
      expect(user.name).to.equal(usersData[0].name);
    });
  
    it('Should have an id', () => {
      expect(user.id).to.equal(usersData[0].id);
    });
  
    it('Should have a pantry', () => {
      expect(user.pantry).to.equal(usersData[0].pantry);
    });
  
    it.skip('Should be able to favorite a recipe', () => {
      expect(user.favoriteRecipes).to.equal([]);

      user.addFavoriteRecipe(recipe);

      expect(user.favoriteRecipes.length).to.equal(1);
    });
  
    it.skip('Should hold a collection of recipes to cook', () => {
      expect(user.recipesToCook).to.equal([]);
    });
  
    it.skip('Should be able to add a recipe to the collection of recipes to cook', () => {
      user.addRecipeToCook();

      expect(user.recipesToCook.length).to.equal(1);
    });
  
  
    it.skip('Should be able to search favorite recipes by name', () => {
      expect().to.equal();
    });
  
    it.skip('Should be able to search favorite recipes by ingredient', () => {
      expect().to.equal();
    });
  
    it.skip('Should be able to search favorite recipes by tag', () => {
      expect().to.equal();
    });
  
    it.skip('Should ', () => {
      expect().to.equal();
    });
});