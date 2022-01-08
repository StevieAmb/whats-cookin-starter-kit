import { expect } from 'chai';
import { usersData } from '../src/data/users';
import { recipeData } from '../src/data/recipes';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import Pantry from '../src/classes/Pantry';

describe('Pantry', () => {
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
      expect(message).to.deep.equal([{id: 20081, quantity: {amount: 1.5, unit: 'c'},
              name: 'wheat flour'
            },
            {
              id: 18372,
              quantity: {
                amount: 0.5,
                unit: 'tsp'
              },
              name: 'bicarbonate of soda'
            },
            {
              id: 1123,
              quantity: {
                amount: 1,
                unit: 'large'
              },
              name: 'eggs'
            },
            {
              id: 19335,
              quantity: {
                amount: 0.5,
                unit: 'c'
              },
              name: 'sucrose'
            },
            {
              id: 19206,
              quantity: {
                amount: 3,
                unit: 'Tbsp'
              },
              name: 'instant vanilla pudding'
            },
            {
              id: 19334,
              quantity: {
                amount: 0.5,
                unit: 'c'
              },
              name: 'brown sugar'
            },
            {
              id: 2047,
              quantity: {
                amount: 0.5,
                unit: 'tsp'
              },
              name: 'salt'
            },
            {
              id: 1012047,
              quantity: {
                amount: 24,
                unit: 'servings'
              },
              name: 'fine sea salt'
            },
            {
              id: 10019903,
              quantity: {
                amount: 2,
                unit: 'c'
              },
              name: 'semi sweet chips'
            },
            {
              id: 1145,
              quantity: {
                amount: 0.5,
                unit: 'c'
              },
              name: 'unsalted butter'
            },
            {
              id: 2050,
              quantity: {
                amount: 0.5,
                unit: 'tsp'
              },
              name: 'vanilla'
            }
          ])
    })

  it('Should be able to tell us the ingredients we need to complete the recipe', () => {
      
      
      expect(pantry.findAmountNeeded(myRecipe)).to.deep.equal([{
              id: 20081,
              quantity: {
                amount: 1.5,
                unit: 'c'
              },
              name: 'wheat flour',
              amountNeeded: 1.5
            },
            {
              id: 18372,
              quantity: {
                amount: 0.5,
                unit: 'tsp'
              },
              name: 'bicarbonate of soda',
              amountNeeded: 0.5
            },
            {
              id: 1123,
              quantity: {
                amount: 1,
                unit: 'large'
              },
              name: 'eggs',
              amountNeeded: 1
            },
            {
              id: 19335,
              quantity: {
                amount: 0.5,
                unit: 'c'
              },
              name: 'sucrose',
              amountNeeded: 0.5
            },
            {
              id: 19206,
              quantity: {
                amount: 3,
                unit: 'Tbsp'
              },
              name: 'instant vanilla pudding',
              amountNeeded: 3
            },
            {
              id: 19334,
              quantity: {
                amount: 0.5,
                unit: 'c'
              },
              name: 'brown sugar',
              amountNeeded: 0.5
            },
            {
              id: 2047,
              quantity: {
                amount: 0.5,
                unit: 'tsp'
              },
              name: 'salt',
              amountNeeded: 0.5
            },
            {
              id: 1012047,
              quantity: {
                amount: 24,
                unit: 'servings'
              },
              name: 'fine sea salt',
              amountNeeded: 24
            },
            {
              id: 10019903,
              quantity: {
                amount: 2,
                unit: 'c'
              },
              name: 'semi sweet chips',
              amountNeeded: 2
            },
            {
              id: 1145,
              quantity: {
                amount: 0.5,
                unit: 'c'
              },
              name: 'unsalted butter',
              amountNeeded: 0.5
            },
            {
              id: 2050,
              quantity: {
                amount: 0.5,
                unit: 'tsp'
              },
              name: 'vanilla',
              amountNeeded: 0.5
            }
          ])
  })
    
    
    
    
  
  
  });