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
      const expected = [
        'wheat flour',
        'bicarbonate of soda',
        'eggs',
        'sucrose',
        'instant vanilla pudding',
        'brown sugar',
        'salt',
        'fine sea salt',
        'semi sweet chips',
        'unsalted butter',
        'vanilla'
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