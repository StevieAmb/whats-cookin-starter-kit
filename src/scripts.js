import './styles.css';
// import apiCalls from './apiCalls';
import './images/cookies.jpg';
import RecipeBox from '../src/classes/RecipeBox';
import Recipe from '../src/classes/Recipe';
// import { ingredientsData } from '../src/data/ingredients';
import { recipeData } from '../src/data/recipes';
import { usersData } from '../src/data/users';
import User from '../src/classes/User';

//BUTTONS
const favoriteRecipesButton = document.getElementById('favoriteRecipesButton');
const homeButton = document.getElementById('homeButton');
const tryRecipeButton = document.getElementById('tryRecipeButton');
const favoritingButton = document.getElementById('favoritingButton');
const seeAllRecipesButton = document.getElementById('seeAllRecipesButton');
const nameRadioButton = document.getElementById('name')
const tagRadioButton = document.getElementById('tag')
const ingredientRadioButton = document.getElementById('ingredient')
const searchButton = document.getElementById('searchButton')
//Favorites View Radio Buttons
const nameRadioButton2 = document.getElementById('name2')
const tagRadioButton2 = document.getElementById('tag2')
const ingredientRadioButton2 = document.getElementById('ingredient2')
const searchButton2 = document.getElementById('searchButton2')



//USER INPUT FIELD
const userSearchBox = document.getElementById('userSearchBox');
const mainPageNavForm = document.getElementById('mainPageNavForm')
const favRecipesNavForm = document.getElementById('favRecipesNavForm');
const userSearchBox2 = document.getElementById('userSearchBox2');

//VIEWS
const suggestedRecipe = document.getElementById('suggestedRecipe')
const mainPageView = document.getElementById('mainPageView');
const recipeResultsView = document.getElementById('recipeResultsView');
// const recipeResultsStatement = document.getElementById('recipeResultsStatement');
const recipeInfoView = document.getElementById('recipeInfoView');
const allRecipesView = document.getElementById('allRecipesView');
const favoriteRecipesView = document.getElementById('favoriteRecipesView');
// const filteredFavoriteRecipesView = document.getElementById('userFaveRecipeFilteredView');

//RANDOM
const recipeTitle = document.getElementById('recipeTitle')
const currentRecipeImage = document.getElementById('currentRecipeImage')
const instructionsList = document.getElementById('instructionsList')
const ingredientsList = document.getElementById('ingredientsList')
const totalCost = document.getElementById('totalCost')
const favRecipeCards = document.getElementById('favRecipeCards')
// const randomRecipeImage = document.getElementById('randomRecipeImage');

//CLASS INSTANSTIATION
let cookbook = new RecipeBox(recipeData);
let recipe = new Recipe(recipeData);
let newUser;
let currentRecipe; 



let getRandomIndex = (array => Math.floor(Math.random() * array.length));
let randomUser = usersData[getRandomIndex(usersData)]

window.addEventListener('load', () => {
  newUser = new User(randomUser);
  displayHomePage();
});

const displayHomePage = () => {
  let randomRecipe = cookbook.recipesCollection[getRandomIndex(cookbook.recipesCollection)]
  suggestedRecipe.innerHTML = ``;
  suggestedRecipe.insertAdjacentHTML('beforeEnd', 
  `<img class="suggested-recipe-image" src="${randomRecipe.image}" alt="food image" id="${randomRecipe.id}">
  <h2>${randomRecipe.name}</h2>`)
  tryRecipeButton.value = `${randomRecipe.id}`
  console.log(tryRecipeButton.value)
}



const searchByFavoriteInput = () => {
  console.log('hello');
  if (nameRadioButton2.checked) {
    let recipeByName = newUsers.filterFavoritesByName(userSearchBox2.value)
    return recipeByName;
  } else if (tagRadioButton2.checked)  {
    let recipeByTags = newUsers.filterFavoritesByTag(userSearchBox2.value);
    return recipeByTags;
  } else if (ingredientRadioButton2.checked) {
    newUsers.recipeMatch = [];
    newUsers.filterFavoritesByIngredient(userSearchBox2.value);
    return newUsers.recipeMatch;
  } else if (!tagRadioButton2.checked && !nameRadioButton2.checked && !ingredientRadioButton2) {
    userSearchBox2.disabled;
  }
}

const showSearchResults2 = (event) => {
  event.preventDefault();
  showRecipeSearchResults();
  recipeResultsView.innerHTML = ``
  let searchedRecipeValues = searchByFavoriteInput();
  searchedRecipeValues.map(searchedRecipe => {
    
    recipeResultsView.insertAdjacentHTML('afterbegin', 
    `<article class="result-card">
    <img class="result-image" alt="${searchedRecipe.name}" src="${searchedRecipe.image}">
    <h2>${searchedRecipe.name}</h2>
    </article>`)
  })
}


//hide the original form of our top nav bar in the favorites view
//show different nav bar, with different categories (name, tag, ingredient)
//use the exact same log, just change the array

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
  show([allRecipesView, homeButton, favoriteRecipesButton])
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


const showMainPage = () => {
  show([mainPageView, mainPageNavForm, favoriteRecipesButton, seeAllRecipesButton]);
  hide([favoriteRecipesView, recipeInfoView, recipeResultsView, favRecipesNavForm]);
}

const showRecipeSearchResults = () => {
  show([recipeResultsView, seeAllRecipesButton, homeButton, favoriteRecipesButton]);
  hide([mainPageView, favoriteRecipesView, recipeInfoView]);
}

const showFavoriteRecipesView = () => {
  show([favoriteRecipesView, favRecipesNavForm, homeButton]);
  hide([mainPageView,  favoriteRecipesButton, mainPageNavForm]);
  
}

const showRecipeInfoCard = () => {
  show([recipeInfoView, seeAllRecipesButton, homeButton]);
  hide([allRecipesView, mainPageView, recipeResultsView]);
}


tryRecipeButton.addEventListener('click', () => {
  showRecipeInfoCard();
  for (var i = 0; i < cookbook.recipesCollection.length; i++) {
    console.log("Value", cookbook.recipesCollection[i].id)
    if (`${cookbook.recipesCollection[i].id}` === `${tryRecipeButton.value}`) {
      console.log("hi2")
      recipe = new Recipe(cookbook.recipesCollection[i])
      let currentRecipe = recipe;
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


//EVENT LISTENERS

homeButton.addEventListener('click', showMainPage);
searchButton2.addEventListener('click', showSearchResults2);
favoritingButton.addEventListener('click', addFavorite);
seeAllRecipesButton.addEventListener('click', showAllRecipes);
searchButton.addEventListener('click', showSearchResults);
favoriteRecipesButton.addEventListener('click', displayFavoritedRecipes);
