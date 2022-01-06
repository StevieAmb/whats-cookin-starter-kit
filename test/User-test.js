import { expect } from 'chai';
import { usersData } from '../src/data/users'
import { recipeData } from '../src/data/recipes'
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';

describe('User', () => {
  let user, myRecipe, myRecipe2, myRecipe3;
  beforeEach(() => {
    myRecipe = new Recipe(recipeData[0]);
    myRecipe2 = new Recipe(recipeData[1]);
    myRecipe3 = new Recipe(recipeData[2]);

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
    
    it('Should be able to store favorite recipes', () => {
      expect(user.favoriteRecipes).to.deep.equal([]);
    });
    
    it('Should be able to add a favorite recipe', () => {
      user.addFavoriteRecipe(myRecipe);

      expect(user.favoriteRecipes.length).to.equal(1);
    });

    it('Should be able to remove a favorite recipe', () => {
      user.addFavoriteRecipe(myRecipe);
      expect(user.favoriteRecipes.length).to.equal(1);

      user.addFavoriteRecipe(myRecipe2);
      expect(user.favoriteRecipes.length).to.equal(2);

      user.removeFavoriteRecipe(myRecipe);
      expect(user.favoriteRecipes.length).to.deep.equal(1);
    });
  
    it('Should be able to store a collection of recipes to cook', () => {
      expect(user.recipesToCook).to.deep.equal([]);
    });

    it('Should be able to add a recipe to the collection of recipes to cook', () => {
      user.addRecipeToCook(myRecipe);

      expect(user.recipesToCook.length).to.equal(1);
    });

    it('Should be able to remove a recipe from the collection of recipes to cook', () => {
      user.addRecipeToCook(myRecipe);
      expect(user.recipesToCook.length).to.equal(1);

      user.removeRecipeToCook(myRecipe);
      expect(user.recipesToCook.length).to.equal(0);
    });
  
    it('Should be able to search favorite recipes by name', () => {
      user.addFavoriteRecipe(myRecipe);
      user.addFavoriteRecipe(myRecipe2);
      user.addFavoriteRecipe(myRecipe3);

      let filteredRecipe = user.filterFavoritesByName('Chocolate')
  
      expect(filteredRecipe).to.deep.equal([user.favoriteRecipes[0]]);
    });
  
    it('Should be able to search favorite recipes by ingredient', () => {
      user.addFavoriteRecipe(myRecipe);
      user.addFavoriteRecipe(myRecipe2);
      user.addFavoriteRecipe(myRecipe3);

      expect(user.filterFavoritesByIngredient('Chocolate')).to.deep.equal(user.recipeMatch);
    });
  
    it('Should be able to search favorite recipes by tag', () => {
      user.addFavoriteRecipe(myRecipe);
      user.addFavoriteRecipe(myRecipe2);
      user.addFavoriteRecipe(myRecipe3);

      let filteredRecipe = user.filterFavoritesByTag('snack');

      expect(filteredRecipe).to.deep.equal([myRecipe]);
    });  
});