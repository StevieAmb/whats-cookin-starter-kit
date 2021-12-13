import './styles.css';
// import apiCalls from './apiCalls';
import './images/cookies.jpg';
import RecipeBox from '../src/classes/RecipeBox';
import Recipe from '../src/classes/Recipe';
// import { ingredientsData } from '../src/data/ingredients';
import { recipeData } from '../src/data/recipes';
import { usersData } from '../src/data/users';
import User from '../src/classes/User';



console.log('Hello world');

//BUTTONS
const favoriteRecipesButton = document.getElementById('favoriteRecipesButton');
const homeButton = document.getElementById('homeButton');
// const tryRecipeButton = document.getElementById('tryRecipeButton');
const favoritingButton = document.getElementById('favoritingButton');
const seeAllRecipesButton = document.getElementById('seeAllRecipesButton');
const nameRadioButton = document.getElementById('name')
const tagRadioButton = document.getElementById('tag')
const ingredientRadioButton = document.getElementById('ingredient')
const searchButton = document.getElementById('searchButton')



//USER INPUT FIELD
const userSearchBox = document.getElementById('userSearchBox');

//VIEWS
const mainPageView = document.getElementById('mainPageView');
const recipeResultsView = document.getElementById('recipeResultsView');
// const recipeResultsStatement = document.getElementById('recipeResultsStatement');
const recipeInfoView = document.getElementById('recipeInfoView');
const allRecipesView = document.getElementById('allRecipesView');
const favoriteRecipesView = document.getElementById('favoriteRecipesView');
const filteredFavoriteRecipesView = document.getElementById('userFaveRecipeFilteredView');

//RANDOM.
const recipeTitle = document.getElementById('recipeTitle')
const currentRecipeImage = document.getElementById('currentRecipeImage')
const instructionsList = document.getElementById('instructionsList')
const ingredientsList = document.getElementById('ingredientsList')
const totalCost = document.getElementById('totalCost')
// const randomRecipeImage = document.getElementById('randomRecipeImage');

//CLASS INSTANSTIATION
let cookbook = new RecipeBox(recipeData);
let recipe = new Recipe(recipeData);
let newUser;
let currentRecipe; 

// const getRandomIndex = (array) => {
//   return Math.floor(Math.random() * array.length);
// }
let getRandomIndex = (array => Math.floor(Math.random() * array.length));
let randomUser = usersData[getRandomIndex(usersData)]

window.addEventListener('load', () => {
  newUser = new User(randomUser);
  console.log(newUser)
});

const favRecipeCards = document.getElementById('favRecipeCards')

const displayFavoritedRecipes = () => {
  showFavoriteRecipesView();
  favRecipeCards.innerHTML = ``
  newUser.favoriteRecipes.forEach(recipe => {
    favRecipeCards.insertAdjacentHTML('afterbegin', 
    `<article class="fav-recipe-card" id="${recipe.id}">
      <h2 class="fav-card-title">${recipe.name}</h2>
      <img class="current-recipe-image" src="${recipe.image}">
      <button class="recipe-information-btn" id="recipeInfoButton1">Recipe Information</button>`)
  })
}

//FUNCTIONS

//THE DOOOOM!!!
favoriteRecipesView.addEventListener('click', event => {  
  event.preventDefault();
  for (var i = 0; i < newUser.favoriteRecipes.length; i++) {
    if (`${newUser.favoriteRecipes[i].id}` === event.target.parentNode.id) {
      showRecipeInfoCard();
      recipe = new Recipe(newUser.favoriteRecipes[i])
      currentRecipe = recipe;
      const recipeIngredients = recipe.findRecipeIngredientInfo();
      const recipeInstructions = recipe.getRecipeInstructions();
      const recipeCostTotal = recipe.calculateRecipeCost();
      recipeTitle.innerHTML = ``
      recipeTitle.innerHTML = `${newUser.favoriteRecipes[i].name}`
      currentRecipeImage.src = `${newUser.favoriteRecipes[i].image}`
      currentRecipeImage.alt = `${newUser.favoriteRecipes[i].name}`
       
      ingredientsList.innerHTML = `` 
      recipeIngredients.forEach((ingredient) => {
        ingredientsList.insertAdjacentHTML('beforeEnd', `
        <li>${ingredient}</li>`)
      })
      instructionsList.innerHTML = `` 
      recipeInstructions.forEach((instruction) => {
        instructionsList.insertAdjacentHTML('beforeEnd', `
        <li>${instruction}</li>`)
      })
      totalCost.innerText = `$${recipeCostTotal}`
    }  
  }
})
  
  allRecipesView.addEventListener('click', event => {   
    for (var i = 0; i < cookbook.recipesCollection.length; i++) {
      if (`${cookbook.recipesCollection[i].id}` === event.target.parentNode.id) {
        showRecipeInfoCard();
        recipe = new Recipe(cookbook.recipesCollection[i])
        currentRecipe = recipe;
        const recipeIngredients = recipe.findRecipeIngredientInfo();
        const recipeInstructions = recipe.getRecipeInstructions();
        const recipeCostTotal = recipe.calculateRecipeCost();
        recipeTitle.innerHTML = ``
        recipeTitle.innerHTML = `${cookbook.recipesCollection[i].name}`
        currentRecipeImage.src = `${cookbook.recipesCollection[i].image}`
        currentRecipeImage.alt = `${cookbook.recipesCollection[i].name}`
        ingredientsList.innerHTML = ``  
        recipeIngredients.forEach((ingredient) => {
          ingredientsList.insertAdjacentHTML('beforeEnd', `
          <li>${ingredient}</li>`)
        })
        instructionsList.innerHTML = ``
        recipeInstructions.forEach((instruction) => {
          instructionsList.insertAdjacentHTML('beforeEnd', `
          <li>${instruction}</li>`)
        })
        totalCost.innerText = `$${recipeCostTotal}`
      }  
    }
  })
  
  const showAllRecipes = () => {
    cookbook.recipesCollection.forEach(recipe => {
      allRecipesView.insertAdjacentHTML('afterbegin', `
      <article class="recipes-views" id= ${recipe.id}>
      <h1>${recipe.name}</h1>
      <img src="${recipe.image}">
      `)
    })
    show([allRecipesView])
    hide([mainPageView, seeAllRecipesButton]) 
  }
      
      


const searchByInput = () => {
  if (nameRadioButton.checked) {
    cookbook.matchingRecipes = [];
    cookbook.findRecipeName(userSearchBox.value)
    return cookbook.matchingRecipes;
  } else if (tagRadioButton.checked)  {
    cookbook.matchingRecipesTags = [];
    cookbook.storeByTag(userSearchBox.value);
    return cookbook.matchingRecipesTags;
  } else if (ingredientRadioButton.checked) {
    cookbook.recipeMatch = [];
    cookbook.findIngredientById(userSearchBox.value);
    return cookbook.recipeMatch;
  } else if (!tagRadioButton.checked && !nameRadioButton.checked && !ingredientRadioButton) {
    userSearchBox.disabled;
  }
}

const showSearchResults = (event) => {
  event.preventDefault();
  showRecipeSearchResults();
  recipeResultsView.innerHTML = ``
  let searchedRecipeValues = searchByInput();
  searchedRecipeValues.map(searchedRecipe => {
    
    recipeResultsView.insertAdjacentHTML('afterbegin', 
    `<article class="result-card">
    <img class="result-image" alt="${searchedRecipe.name}" src="${searchedRecipe.image}">
    <h2>${searchedRecipe.name}</h2>
    </article>`)
  })
}


const addFavorite = () => {
  newUser.addFavoriteRecipe(currentRecipe)
  console.log(newUser.favoriteRecipes)
}



//HELPER FUNCTIONS
const show = (elements) => {
  elements.forEach(element => element.classList.remove('hidden'));
}
const hide = (elements) => {
  elements.forEach(element => element.classList.add('hidden'));
}


// const showMainPage = () => {
  //     show([]);
  //     hide([]);
  // }
  
  const showRecipeSearchResults = () => {
    show([recipeResultsView, seeAllRecipesButton, homeButton]);
    hide([mainPageView]);
  }
  
  const showFavoriteRecipesView = () => {
        show([favoriteRecipesView]);
        hide([mainPageView, allRecipesView, recipeInfoView]);
    }
    
    const showRecipeInfoCard = () => {
      show([recipeInfoView, seeAllRecipesButton, homeButton]);
      hide([allRecipesView, mainPageView, recipeResultsView, favoriteRecipesView]);
    }
    
    //EVENT LISTENERS
    
    

          
      favoritingButton.addEventListener('click', addFavorite)
      seeAllRecipesButton.addEventListener('click', showAllRecipes);
      searchButton.addEventListener('click', showSearchResults);
      favoriteRecipesButton.addEventListener('click', displayFavoritedRecipes);
      // // homeButton.addEventListener();
      // // tryRecipeButton.addEventListener();
      // // recipeInfoButton1.addEventListener();
      // // recipeInfoButton2.addEventListener();
    // // recipeInfoButton3.addEventListener();