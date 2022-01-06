import { expect } from 'chai';
import { usersData } from '../src/data/users';
import { recipeData } from '../src/data/recipes';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import Pantry from '../src/classes/Pantry';

describe.only('Recipe', () => {
  let myRecipe;
  let user;
  let pantry;
  
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

    




  
  
  
  });