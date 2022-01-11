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
  let myRecipe1;
  
  beforeEach(() => {
    user = new User(usersData[0])
    pantry = new Pantry(usersData[0])
    myRecipe = new Recipe(recipeData[0]);
    myRecipe1 = new Recipe({
      "id": 595736,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [{
        "id": 20081,
        "quantity": {
          "amount": 1.5,
          "unit": "c"
        }
      },
      {
        "id": 1001,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      },
      {
        "id": 1230,
        "quantity": {
          "amount": 2,
          "unit": "c"
        }
      }
      ],
      "instructions": [{
        "instruction": "Heat the oil in a large pot or pan to medium heat, then stir in the raw flour.",
        "number": 1
      },
      {
        "instruction": "Stir constantly. The oil and flour will combine to form a liquid slurry. If you don’t keep stirring, the roux will start to burn and you’ll have to start over, so do not stop stirring.",
        "number": 2
      }
      ],
      "name": "Roux",
      "tags": [
        "sauce",
        "topping",
      ]
    })
  });

  it('Should be a function', () => {
    expect(Pantry).to.be.a('function');
  });

  it('Should be an instance of Pantry', () => {
    expect(pantry).to.be.an.instanceOf(Pantry);
  });
    
  it('Should have a shelf of user ingredients', () => {
    expect(pantry.shelf).to.equal(usersData[0].pantry);
  });

  it('Should have a name for each ingredient in the pantry', () => {
    let ingredientsWithName = pantry.showPantryIngredientInfo();
    expect(ingredientsWithName).to.equal(pantry.shelf);
  });
  
  it('Should be able to tell us if we have enough ingredients to cook a recipe', () => {
    let neededIngredients = pantry.determineIfEnoughIngredientsForRecipe(myRecipe);
    let neededIngredients2 = pantry.determineIfEnoughIngredientsForRecipe(myRecipe1);

    expect(neededIngredients).to.deep.equal(
      [{
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
      }])
    expect(neededIngredients2).to.deep.equal([]);
  });

  it('Should be able to tell us the ingredients we need to complete the recipe', () => {
    expect(pantry.findAmountNeeded(myRecipe)).to.deep.equal([
      {
        id: 19206,
        quantity: {
          amount: 3,
          unit: 'Tbsp'
        },
        name: 'instant vanilla pudding',
        amountNeeded: 1
      }, {
        id: 19334,
        quantity: {
          amount: 0.5,
          unit: 'c'
        },
        name: 'brown sugar',
        amountNeeded: 0.5
      }, {
        id: 1012047,
        quantity: {
          amount: 24,
          unit: 'servings'
        },
        name: 'fine sea salt',
        amountNeeded: 24
      }, {
        id: 10019903,
        quantity: {
          amount: 2,
          unit: 'c'
        },
        name: 'semi sweet chips',
        amountNeeded: 2
      }
    ]);
  });

  it('Should be able to use pantry items to cook a recipe', () => {
    let cookedRecipe = pantry.cookRecipe(myRecipe1)
    expect(cookedRecipe).to.deep.equal([
      { id: 20081, quantity: { amount: -1.5, unit: 'c' } },
      { id: 1001, quantity: { amount: -0.5, unit: 'tsp' } },
      { id: 1230, quantity: { amount: -2, unit: 'c' } }
    ]);
  });

  it('Should be able to find ingredients to shop for', () => {
    pantry.addToShoppingList('wheat flour', 3475);
    pantry.addToShoppingList('fine sea salt', 90678);
    pantry.addToShoppingList('extra virgin olive oil', 7);

    expect(pantry.shoppingList).to.deep.equal([{
      id: 20081,
      name: 'wheat flour',
      amount: 3475
    },
    {
      id: 1012047,
      name: 'fine sea salt',
      amount: 90678
    },
    {
      id: 1034053,
      name: 'extra virgin olive oil',
      amount: 7
    }
    ]);
  });
});