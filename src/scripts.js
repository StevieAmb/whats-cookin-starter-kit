import { fetchApiData } from './apiCalls';
import './images/cookies.jpg';
import RecipeBox from './classes/RecipeBox';
import Recipe from './classes/Recipe';
import User from './classes/User';
import { usersData } from './data/users';
import './css/index.scss';
import './css/_variables.scss';

//BUTTONS
const favoriteRecipesButton = document.getElementById('favoriteRecipesButton');
const homeButton = document.getElementById('homeButton');
const tryRecipeButton = document.getElementById('tryRecipeButton');
const favoritingButton = document.getElementById('favoritingButton');
const seeAllRecipesButton = document.getElementById('seeAllRecipesButton');
const nameRadioButton = document.getElementById('name');
const ingredientRadioButton = document.getElementById('ingredient');
const searchButton = document.getElementById('searchButton');
const searchButton2 = document.getElementById('searchButton2');
const dropDownButton = document.getElementById('dropDownButton');
const myDropdown = document.getElementById("myDropdown");
const unfavoritingButton = document.getElementById('unfavoritingButton');
const recipesToCookButton = document.getElementById('recipesToCookButton');
const addRecipeToCookButton = document.getElementById('addRecipeToCookButton');
const removeRecipeToCookButton = document.getElementById('removeRecipeToCookButton');



//USER INPUT FIELD
const userSearchBox = document.getElementById('userSearchBox');
const mainPageNavForm = document.getElementById('mainPageNavForm');

//VIEWS
const suggestedRecipe = document.getElementById('suggestedRecipe');
const mainPageView = document.getElementById('mainPageView');
const recipeResultsView = document.getElementById('recipeResultsView');
const recipeInfoView = document.getElementById('recipeInfoView');
const allRecipesView = document.getElementById('allRecipesView');
const favoriteRecipesView = document.getElementById('favoriteRecipesView');
const recipesToCookView = document.getElementById('recipesToCookView');


//RANDOM
const recipeTitle = document.getElementById('recipeTitle');
const currentRecipeImage = document.getElementById('currentRecipeImage');
const instructionsList = document.getElementById('instructionsList');
const ingredientsList = document.getElementById('ingredientsList');
const totalCost = document.getElementById('totalCost');


//CLASS INSTANSTIATION
var cookbook;
let recipe;
let newUser;
let groceryStore;

//EXECUTION FUNCTIONS
const loadPage = () => {
  suggestedRecipe.innerHTML = '';
  getData()
    .then((data) => {
      let randomUser = data[2].usersData[getRandomIndex(data[2].usersData)];
      newUser = new User(randomUser);
      cookbook = new RecipeBox(data[1].recipeData);
      recipe = new Recipe(data[1].recipeData);
      groceryStore = data[0].ingredientsData;
      displayHomePage();
    })
};

const getData = () => {
  return Promise.all([fetchApiData('ingredients'), fetchApiData('recipes'), fetchApiData('users')])
};

//USER STORY EXPERIENCE


const searchByInput = () => {
  if (nameRadioButton.checked) {
    cookbook.matchingRecipes = [];
    cookbook.findRecipeName(userSearchBox.value)
    return cookbook.matchingRecipes;
  } else if (ingredientRadioButton.checked) {
    cookbook.recipeMatch = [];
    cookbook.findIngredientById(userSearchBox.value);
    return cookbook.recipeMatch;
  } 
};

const searchByTags = (event) => {
  event.preventDefault();
  
  let findTags = sortTags();
  findTags.forEach((tag) => {
    if (event.target.className === tag) {
      showRecipeSearchResults();
      cookbook.matchingRecipesTags = [];
      let searchedRecipeTag = cookbook.storeByTag(tag);
      
      recipeResultsView.innerHTML = ``
      searchedRecipeTag.forEach((elem) => {
        recipeResultsView.insertAdjacentHTML('afterBegin',
        `<article class="result-card" id="${elem.id}">
        <img class="result-image" alt="${elem.name}" src="${elem.image}" tabindex= "0">
        <h2>${elem.name}</h2>
        </article>`)
      })
    }
  })
};

const searchByFavoriteInput = () => {
  if (nameRadioButton.checked) {
    let recipeByName = newUser.filterFavoritesByName(userSearchBox.value)
    return recipeByName;
  } else if (ingredientRadioButton.checked) {
    newUser.recipeMatch = [];
    newUser.filterFavoritesByIngredient(userSearchBox.value);
    return newUser.recipeMatch;
  } else if (!nameRadioButton.checked && !ingredientRadioButton) {
    userSearchBox.disabled;
  }
};

const searchFavoriteResults = (event) => {
  event.preventDefault();
  showRecipeSearchResults();
  recipeResultsView.innerHTML = ``
  let searchedRecipeValues2 = searchByFavoriteInput();
  searchedRecipeValues2.map(searchedRecipe2 => {
    
    recipeResultsView.insertAdjacentHTML('afterbegin',
    `<article class="result-card">
    <img class="result-image" alt="${searchedRecipe2.name}" src="${searchedRecipe2.image}" tabindex= "0">
    <h2>${searchedRecipe2.name}</h2>
    </article>`)
  })
};

const sortTags = () => {
  const result = cookbook.recipesCollection.reduce((acc, elem) => {
    elem.tags.forEach(tag => {
      if (!acc.includes(tag)) {
        acc.push(tag)
      }
    })
    return acc
  }, [])
  return result
};

//pertaining to 

const userAddRecipeToCook = () => { //attached to EL - button
  newUser.addRecipeToCook(recipe);
  show([removeRecipeToCookButton])
  hide([addRecipeToCookButton])
};

const userRemoveRecipeToCook = () => { //attached to EL - button
  newUser.removeRecipeToCook(recipe);
  console.log(newUser.recipesToCook);
  hide([removeRecipeToCookButton])
  show([addRecipeToCookButton])
};

//DISPLAY FUNCTIONS
const displayHomePage = () => {
  let randomRecipe = cookbook.recipesCollection[getRandomIndex(cookbook.recipesCollection)];
  suggestedRecipe.innerHTML = ``;
  suggestedRecipe.insertAdjacentHTML('beforeEnd',
  `<img class="suggested-recipe-image" src="${randomRecipe.image}" alt="food image" id="${randomRecipe.id}">
  <h2>${randomRecipe.name}</h2>`)
  tryRecipeButton.value = `${randomRecipe.id}`
  console.log('tryBtnValue', tryRecipeButton.value)
  console.log('recipeId', randomRecipe.id)
};

const showDropDown = () => {
  myDropdown.innerHTML = ``
  myDropdown.classList.toggle("show");
  let allTags = sortTags();
  allTags.forEach((tag) => {
    myDropdown.insertAdjacentHTML('afterBegin', `<a class ="${tag}" href="#${tag}">${tag.toUpperCase()}</a>`)
  })
};

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

const displayRecommendedRecipeInfo = (event) => {
  event.preventDefault();
  showRecipeInfoCard();
  addOrRemoveRecipeToCookButton();
  displayUserPantry();
  for (var i = 0; i < cookbook.recipesCollection.length; i++) {
    if (`${cookbook.recipesCollection[i].id}` === `${tryRecipeButton.value}`) {
      recipe = new Recipe(cookbook.recipesCollection[i])
      
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
        <li> ${ingredient.quantity.amount} ${ingredient.quantity.unit} ${ingredient.name} </li>`)
        })
      instructionsList.innerHTML = ``
      recipeInstructions.forEach((instruction) => {
        instructionsList.insertAdjacentHTML('beforeEnd', `
        <li>${instruction}</li>`)
      })
      totalCost.innerText = `$${recipeCostTotal}`
    }
  }
} 

const showAllRecipes = () => {
  allRecipesView.innerHTML = ``
  cookbook.recipesCollection.forEach(recipe => {
    allRecipesView.insertAdjacentHTML('afterbegin', `
    <article class="recipes-views" id= ${recipe.id}>
    <h1>${recipe.name}</h1>
    <img src="${recipe.image}" tabindex= "0">
    `)
  })
  showRecipeInformationView();
};

const showRecipeInformation = (event) => {
  event.preventDefault();
  addOrRemoveFavoriteButton();
  addOrRemoveRecipeToCookButton();
  cookbook.recipesCollection.forEach(oneRecipe => {
    console.log(oneRecipe.id)
    console.log(event.target.parentNode.id)
    if(event.target.parentNode.id === `${oneRecipe.id}`) {
      showRecipeInfoCard();
      recipe = new Recipe(oneRecipe)
      
      const recipeIngredients = recipe.findRecipeIngredientInfo();
      const recipeInstructions = recipe.getRecipeInstructions();
      const recipeCostTotal = recipe.calculateRecipeCost();
      recipeTitle.innerHTML = ``
      recipeTitle.innerHTML = `${oneRecipe.name}`
      currentRecipeImage.src = `${oneRecipe.image}`
      currentRecipeImage.alt = `${oneRecipe.name}`
      ingredientsList.innerHTML = ``  
      recipeIngredients.forEach((ingredient) => {
        ingredientsList.insertAdjacentHTML('beforeEnd', `
        <li>${ingredient.quantity.amount} ${ingredient.quantity.unit} ${ingredient.name}</li>`)
      })
      instructionsList.innerHTML = ``
      recipeInstructions.forEach((instruction) => {
        instructionsList.insertAdjacentHTML('beforeEnd', `
        <li>${instruction}</li>`)
      })
      totalCost.innerText = `$${recipeCostTotal}`
    }
  })
  displayUserPantry();
}

const showSearchResults = (event) => {
  event.preventDefault();
  if (!nameRadioButton.checked && !ingredientRadioButton.checked) {
    alert("ERROR: Please Select Name or Ingredient to Search");
    userSearchBox.disabled;
    showMainPage();
  } else if (!userSearchBox.value) {
    alert("ERROR: Please Enter Value In To Search");
  } else if (userSearchBox.value) {
    showRecipeSearchResults();
    recipeResultsView.innerHTML = ``
    let searchedRecipeValues = searchByInput();
    searchedRecipeValues.forEach((searchedRecipe) => {
      recipeResultsView.insertAdjacentHTML('afterBegin',
      `<article class="result-card ${searchedRecipe.isFavorite}" id="${searchedRecipe.id}">
      <img class="result-image" alt="${searchedRecipe.name}" src="${searchedRecipe.image}">
      <h2>${searchedRecipe.name}</h2>
      </article>`)
    })
  }
};

const displayFavoritedRecipes = () => {
  showFavoriteRecipesView();
  favoriteRecipesView.innerHTML = ``
  newUser.favoriteRecipes.forEach((recipe) => {
    favoriteRecipesView.insertAdjacentHTML('afterBegin',
    `<article class="fav-recipe-card" id="${recipe.id}">
    <h2 class="fav-card-title">${recipe.name}</h2>
    <img class="current-recipe-image" src="${recipe.image}" tabindex= "0">`
    )
  })
};

const displaySelectedFavoriteRecipe = (event) => {
  addOrRemoveFavoriteButton();
  addOrRemoveRecipeToCookButton();
  for (var i = 0; i < newUser.favoriteRecipes.length; i++) {
    if (`${newUser.favoriteRecipes[i].id}` === event.target.parentNode.id) {
      showRecipeInfoCard();
      recipe = new Recipe(newUser.favoriteRecipes[i])
      const recipeIngredients = recipe.findRecipeIngredientInfo();
      const recipeInstructions = recipe.getRecipeInstructions();
      const recipeCostTotal = recipe.calculateRecipeCost();
      
      recipeTitle.innerHTML = ``;
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
};

const userPantryName = document.getElementById('userPantryName')

const displayUserPantry = () => {
  // newUser = newUser(userData[0]);
  let userPantryIngredients = newUser.showPantryIngredientInfo();
  userPantryName.innerText = `${newUser.name}'s Pantry`
  userPantryIngredients.forEach((ingredient) => {
    userPantryName.insertAdjacentHTML('beforeEnd', `
    <li>${ingredient}</li>`)
  })
}


const addOrRemoveRecipeToCookButton = () => { //attached to EL on page load
  if (recipe.addedToCook) {
    show([removeRecipeToCookButton])
    hide([addRecipeToCookButton])
  } else if (!recipe.addedToCook) {
    hide([removeRecipeToCookButton])
    show([addRecipeToCookButton])
  }
};

const showRecipeToCook = () => {   //connected to EL for button on NAV
  showRecipesToCookView();
  newUser.recipesToCook.forEach(recipe => {
    recipesToCookView.insertAdjacentHTML('afterbegin',
      `<article class="result-card" id="${recipe.id}">
    <img class="result-image" alt="${recipe.name}" src="${recipe.image}" tabindex= "0">
    <h2>${recipe.name}</h2>
    </article>`)
  })
};

const addFavorite = () => { //attached to EL - button
  newUser.addFavoriteRecipe(recipe);
  console.log(newUser.favoriteRecipes);
  show([unfavoritingButton])
  hide([favoritingButton])
};

const removeFavoriteRecipe = () => { //attached to EL - button
  newUser.removeFavoriteRecipe(recipe);
  console.log(newUser.favoriteRecipes);
  hide([unfavoritingButton])
  show([favoritingButton])
};

const addOrRemoveFavoriteButton = () => { //attached to EL on page load
  if (recipe.isFavorited) {
    show([unfavoritingButton])
    hide([favoritingButton])
  } else if (!recipe.isFavorited) {
    hide([unfavoritingButton])
    show([favoritingButton])
  }
};

//input: recipe data file, in order to access the unit for the ingredients
//output: the amounts and the units next to the ingredient name in the recipe info card

//we already have access to the ingredient name based on the id from the recipe data
//we need to stay IN the recipe data, but pull out the amount and the unit needed. 
//iterate through recipeData (recipeData.forEach(recipe => {
//   recipe.ingredients.amount recipe.ingredients.unit
// }))

//HELPER FUNCTIONS
const show = (elements) => {
  elements.forEach(element => element.classList.remove('hidden'));
};

const hide = (elements) => {
  elements.forEach(element => element.classList.add('hidden'));
};

const showMainPage = () => {
  displayHomePage();
  addOrRemoveFavoriteButton();
  show([mainPageView, mainPageNavForm, favoriteRecipesButton, seeAllRecipesButton, searchButton]);
  hide([favoriteRecipesView, recipeInfoView, recipeResultsView, searchButton2, allRecipesView, recipesToCookView]);
};

const showRecipeSearchResults = () => {
  addOrRemoveFavoriteButton();
  show([recipeResultsView, seeAllRecipesButton, homeButton, favoriteRecipesButton, mainPageNavForm, searchButton]);
  hide([ mainPageView, favoriteRecipesView, recipeInfoView, searchButton2, allRecipesView, recipesToCookView]);
};

const showFavoriteRecipesView = () => {

  show([favoriteRecipesView, searchButton2, homeButton, searchButton]);
  hide([mainPageView, favoriteRecipesButton, recipeInfoView, allRecipesView, recipeResultsView, searchButton, recipesToCookView, dropDownButton]);
};

const showRecipeInfoCard = () => {
  show([recipeInfoView, seeAllRecipesButton, homeButton, favoriteRecipesButton, searchButton]);
  hide([allRecipesView, mainPageView, recipeResultsView, searchButton2, favoriteRecipesView, recipesToCookView]);
};

const showRecipesToCookView = () => {
  show([recipesToCookView, homeButton, favoriteRecipesButton, searchButton]);
  hide([mainPageView, recipeInfoView, allRecipesView, recipeResultsView, searchButton2, favoriteRecipesView]);
};

const showRecipeInformationView = () => {
  addOrRemoveFavoriteButton();
  addOrRemoveRecipeToCookButton();
  show([allRecipesView, homeButton, favoriteRecipesButton])
  hide([mainPageView, seeAllRecipesButton, favoriteRecipesView, recipeInfoView, recipesToCookView])
};

const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
};
  
  
//EVENT LISTENERS
window.addEventListener('load', loadPage);
unfavoritingButton.addEventListener('click', removeFavoriteRecipe);
favoritingButton.addEventListener('click', addFavorite);
favoriteRecipesButton.addEventListener('click', displayFavoritedRecipes);
homeButton.addEventListener('click', showMainPage);
seeAllRecipesButton.addEventListener('click', showAllRecipes);
searchButton.addEventListener('click', showSearchResults);
searchButton2.addEventListener('click', searchFavoriteResults);
dropDownButton.addEventListener('click', showDropDown);
myDropdown.addEventListener('click', searchByTags);
allRecipesView.addEventListener('click', showRecipeInformation); 
recipeResultsView.addEventListener('click', showRecipeInformation);
tryRecipeButton.addEventListener('click', displayRecommendedRecipeInfo);
favoriteRecipesView.addEventListener('click', displaySelectedFavoriteRecipe);
addRecipeToCookButton.addEventListener('click', userAddRecipeToCook);
removeRecipeToCookButton.addEventListener('click', userRemoveRecipeToCook);
recipesToCookButton.addEventListener('click', showRecipeToCook);
recipesToCookView.addEventListener('click', showRecipeInformation);
