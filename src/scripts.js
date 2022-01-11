import { fetchApiData } from './apiCalls';
import './images/cookies.jpg';
import RecipeBox from './classes/RecipeBox';
import Recipe from './classes/Recipe';
import User from './classes/User';
import Pantry from './classes/Pantry';
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
const goShoppingButton = document.getElementById('goShopping');
const shoppingSubmitButton = document.getElementById('shoppingSubmitButton')


//USER INPUT FIELD
const userSearchBox = document.getElementById('userSearchBox');
const mainPageNavForm = document.getElementById('mainPageNavForm');
//USER INPUT FIELDS - POST
const userAmountNeeded = document.getElementById('amt');
const userIngredientIdNeeded = document.getElementById('ingredientPost');


//VIEWS
const suggestedRecipe = document.getElementById('suggestedRecipe');
const mainPageView = document.getElementById('mainPageView');
const recipeResultsView = document.getElementById('recipeResultsView');
const recipeInfoView = document.getElementById('recipeInfoView');
const allRecipesView = document.getElementById('allRecipesView');
const favoriteRecipesView = document.getElementById('favoriteRecipesView');
const recipesToCookView = document.getElementById('recipesToCookView');
const userShoppingView = document.getElementById('userShoppingView');
const ingredientsNeededForUser = document.getElementById('ingredientsNeededForUser')


//RANDOM
const recipeTitle = document.getElementById('recipeTitle');
const currentRecipeImage = document.getElementById('currentRecipeImage');
const instructionsList = document.getElementById('instructionsList');
const ingredientsList = document.getElementById('ingredientsList');
const totalCost = document.getElementById('totalCost');
const errorHandlingLine = document.getElementById('errorMessage')
const ingredientsNeededList = document.getElementById('ingredientsNeededList')
const userPantryName = document.getElementById('userPantryName')


//CLASS INSTANSTIATION
var cookbook;
let recipe;
let newUser;
let groceryStore;
let pantry;

//EXECUTION FUNCTIONS

//input: old pantry, cookARecipe(), update pantry. 
//if neededIngredients list === 0, cookARecipe(), subtract recipe ingredients from pantry.

//input: old pantry, goShopping(), update pantry. 
//if 
//output: new pantry 
  //post 

  // fetch('http://localhost:3001/api/v1/users', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     userId: newUser.id,
  //     userPantry: newUser.pantry
  //     })
  //   })
  //   .then(response => displayUserErrorMessage(response))
  //   .catch(err => {
  //       displayServerErrorMessage(err)
  //     });
    
  //   const displayUserErrorMessage = (response) => {
  //       if (!response.ok) {

  //           errorHandlingLine.innerText = 'Please fill out all fields!';
  //         } else {
  //             return response.json();
  //           }
  //         }
          
  //         // const displayServerErrorMessage = (err) => {
            //   errorHandlingLine.innerText = err.message;
            // }

                
const loadPage = () => {
  suggestedRecipe.innerHTML = '';
  getData()
  .then((data) => {
    let randomUser = data[2][getRandomIndex(data[2])];
    newUser = new User(randomUser);
    cookbook = new RecipeBox(data[1]);
    recipe = new Recipe(data[1]);
    pantry = new Pantry(newUser)
    groceryStore = data[0];
    displayHomePage();
  })
};
                
const getData = () => {
  return Promise.all([fetchApiData('ingredients'), fetchApiData('recipes'), fetchApiData('users')])
};
                
//USER STORY EXPERIENCE


const searchByInput = () => {
  if (nameRadioButton.checked) {
   return cookbook.findRecipeName(userSearchBox.value)
  } else if (ingredientRadioButton.checked) {
   return cookbook.findIngredientById(userSearchBox.value);
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
        <img class="result-image" id="${elem.id}" alt="${elem.name}" src="${elem.image}" tabindex= "0">
        <h2>${elem.name}</h2>
        </article>`)
      })
    }
  })
};

const searchByFavoriteInput = () => {
  if (nameRadioButton.checked) {
    return newUser.filterFavoritesByName(userSearchBox.value)
  } else if (ingredientRadioButton.checked) {
    return newUser.filterFavoritesByIngredient(userSearchBox.value);
  }
};

const searchFavoriteResults = (event) => {
  event.preventDefault();
  showRecipeSearchResults();
  recipeResultsView.innerHTML = ``
  let searchedRecipeValues2 = searchByFavoriteInput();
  searchedRecipeValues2.map(searchedRecipe2 => {
    
    recipeResultsView.insertAdjacentHTML('afterbegin',
    `<article class="result-card" id="${searchedRecipe2.id}">
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
  cookbook.recipesCollection.find(oneRecipe => {
    if((event.target.parentNode.id === `${oneRecipe.id}`) || (`${tryRecipeButton.value}` === `${oneRecipe.id}`)) {
      showRecipeInfoCard();
      recipe = new Recipe(oneRecipe)
      console.log('favorite', recipe)
      
      const recipeIngredients = recipe.findRecipeIngredientInfo(recipe);
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
  displayIngredientsNeeded(recipe);
  displayUserPantry();
}

const displayIngredientsNeeded = (recipe) => {
  let userNeededIngredients = pantry.determineIfEnoughIngredientsForRecipe(recipe);
  userNeededIngredients.forEach((ingredient) => {
    ingredientsNeededList.insertAdjacentHTML('beforeEnd', `
    <li>${ingredient.quantity.amount} ${ingredient.name}</li>`)
  })
  if (userNeededIngredients.length === 0) {
    show([addRecipeToCookButton])
    addOrRemoveRecipeToCookButton();
  }
};

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


const displayUserPantry = () => {
  let userPantryIngredients = pantry.showPantryIngredientInfo();
  userPantryName.innerText = `${newUser.name}'s Pantry`
  if (userPantryIngredients.length === 0) {
    userPantryName.insertAdjacentHTML('afterEnd', `<p> You have no ingredients in your pantry </p>` )
  } else {
  userPantryIngredients.forEach((ingredient) => {
    userPantryName.insertAdjacentHTML('beforeEnd', `
    <li>${ingredient.amount} ${ingredient.name}</li>`)
    })
  }
}

const addOrRemoveRecipeToCookButton = (recipe) => { //attached to EL on page load
  if (!recipe.addedToCook) {
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
  show([unfavoritingButton])
  hide([favoritingButton])
};

const removeFavoriteRecipe = () => { //attached to EL - button
  newUser.removeFavoriteRecipe(recipe);
  hide([unfavoritingButton])
  show([favoritingButton])
};

const addOrRemoveFavoriteButton = () => { //attached to EL on page load
  if (recipe.isFavorited) {
    show([unfavoritingButton])
    hide([favoritingButton])
  } 
  if (!recipe.isFavorited) {
    hide([unfavoritingButton])
    show([favoritingButton])
  }
};


//HELPER FUNCTIONS
const show = (elements) => {
  elements.forEach(element => element.classList.remove('hidden'));
};

const hide = (elements) => {
  elements.forEach(element => element.classList.add('hidden'));
};

const showMainPage = () => {
  displayHomePage();
  show([mainPageView, mainPageNavForm, favoriteRecipesButton, seeAllRecipesButton, searchButton, dropDownButton]);
  hide([favoriteRecipesView, recipeInfoView, recipeResultsView, searchButton2, allRecipesView, userShoppingView, recipesToCookView, userShoppingView]);
};

const showRecipeSearchResults = () => {
  show([recipeResultsView, seeAllRecipesButton, homeButton, favoriteRecipesButton, mainPageNavForm, searchButton, dropDownButton]);
  hide([ mainPageView, favoriteRecipesView, recipeInfoView, searchButton2, allRecipesView, recipesToCookView]);
};

const showFavoriteRecipesView = () => {

  show([favoriteRecipesView, searchButton2, homeButton, searchButton]);
  hide([mainPageView, favoriteRecipesButton, recipeInfoView, allRecipesView, recipeResultsView, searchButton, recipesToCookView, dropDownButton, userShoppingView]);
};

const showRecipeInfoCard = () => {
  show([recipeInfoView, seeAllRecipesButton, homeButton, favoriteRecipesButton, searchButton, dropDownButton]);
  hide([allRecipesView, mainPageView, recipeResultsView, searchButton2, favoriteRecipesView, recipesToCookView]);
};

const showRecipesToCookView = () => {
  show([recipesToCookView, homeButton, favoriteRecipesButton, searchButton, dropDownButton]);
  hide([mainPageView, recipeInfoView, allRecipesView, recipeResultsView, searchButton2, favoriteRecipesView, userShoppingView]);
};

const showRecipeInformationView = () => {
  addOrRemoveFavoriteButton();
  show([allRecipesView, homeButton, favoriteRecipesButton, dropDownButton])
  hide([mainPageView, seeAllRecipesButton, favoriteRecipesView, recipeInfoView, recipesToCookView])
};

// const showShoppingCart = () => {
//   show([userShoppingView, homeButton, ])
//   hide([mainPageView, seeAllRecipesButton, favoriteRecipesView, recipeInfoView, recipesToCookView, favoriteRecipesButton])
// }

const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
};
  
  
//EVENT LISTENERS
// const shoppingSubmitButton.addEventListener('click', addIngredientsToPantry)

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
tryRecipeButton.addEventListener('click', showRecipeInformation);
favoriteRecipesView.addEventListener('click', showRecipeInformation);
addRecipeToCookButton.addEventListener('click', userAddRecipeToCook);
removeRecipeToCookButton.addEventListener('click', userRemoveRecipeToCook);
recipesToCookButton.addEventListener('click', showRecipeToCook);
recipesToCookView.addEventListener('click', showRecipeInformation);
