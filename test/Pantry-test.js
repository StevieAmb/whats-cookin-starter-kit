import { expect } from 'chai';
import { usersData } from '../src/data/users';
import { recipeData } from '../src/data/recipes';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import Pantry from '../src/classes/Pantry';

describe.only('Recipe', () => {
  let user;
  let pantry;
  let myRecipe;
  
  beforeEach(() => {
    user = new User(usersData[0])
    pantry = new Pantry(usersData[0])
    myRecipe = new Recipe(recipeData[0]);
  });

    it('Should be a function', () => {
      expect(Pantry).to.be.a('function');
    });

    it('Should be an instance of Pantry', () => {
      expect(pantry).to.be.an.instanceOf(Pantry);
    })

    it('Should have a shelf of user ingredients', () => {
      expect(pantry.shelf).to.equal(usersData[0].pantry);
    })

    it('Should be able to tell us if we have enough ingredients to cook a recipe', () => {
      let message = pantry.determineIfEnoughIngredientsForRecipe(myRecipe);
  
      expect(message).to.equal("You don't have enough ingredients to cook this recipe")
    })



  
  
  
  });