import { expect } from 'chai';
import { recipeData } from '../src/data/recipes';
import Recipe from '../src/classes/Recipe';

describe('Recipe', () => {
  let myRecipe;
  
  beforeEach(() => {
    myRecipe = new Recipe(recipeData[0]);
  });

    it('Should be a function', () => {
      expect(Recipe).to.be.a('function');
    });
    
    it('Should be an instance of Recipe', () => {
      expect(myRecipe).to.be.an.instanceOf(Recipe);
    });
    
    it('Should have an id', () => {
      expect(myRecipe.id).to.equal(recipeData[0].id);
    });
    
    it('Should have an image', () => {
      expect(myRecipe.image).to.equal(recipeData[0].image);
    });

    it('Should have a list of ingredients', () => {
      expect(myRecipe.ingredients).to.equal(recipeData[0].ingredients);
    });

    it('Should have a list of instructions', () => {
      expect(myRecipe.instructions).to.equal(recipeData[0].instructions);
    });

    it('Should have a name', () => {
      expect(myRecipe.name).to.equal(recipeData[0].name);
    });
  
    it('Should have tags', () => {
      expect(myRecipe.tags).to.deep.equal(recipeData[0].tags);
    });
    
  it('Should return the names of the ingredients in a recipe', () => {
    const expected = [{
        id: 20081,
        quantity: {
          amount: 1.5,
          unit: 'c'
        },
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
        name: 'instant vanilla pudding',
        amountNeeded: 1
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
        name: 'salt'
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
    ]
  
  const actual = myRecipe.findRecipeIngredientInfo();
  
  expect(actual).to.deep.equal(expected);
});

it('Should return recipe instructions ', () => {
  let collectInstructions = recipeData[0].instructions.reduce((instructionBox, elem) => {
        instructionBox.push(elem.instruction)
        return instructionBox;
      }, [])    
      expect(myRecipe.getRecipeInstructions()).to.deep.equal(collectInstructions)
    });
  
    it('Should calculate total recipe cost ', () => {
      expect(myRecipe.calculateRecipeCost()).to.equal('177.76');
    });
});