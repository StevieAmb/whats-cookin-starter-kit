import { fetchApiData } from './apiCalls';
import RecipeBox from './classes/RecipeBox';
import Recipe from './classes/Recipe';
import User from './classes/User';
import Pantry from './classes/Pantry';

var cookbook;
let recipe;
let newUser;
let pantry;
let groceryStore;

let domUpdates = {
  //HELPER FUNCTIONS
  show(elements) {
    elements.forEach(element => element.classList.remove('hidden'));
  },
  
  hide(elements){
    elements.forEach(element => element.classList.add('hidden'));
  },

  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  },

  //EXECUTION FUNCTIONS
postApi() {
  let cookedRecipe = pantry.cookRecipe();
  let itemsToPost = cookedRecipe.concat(pantry.shoppingList)
    itemsToPost.forEach(elem => {
  
  fetch('http://localhost:3001/api/v1/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: newUser.id,
      "ingredientID": `${elem.id}`,
     "ingredientModification": `${elem.amount}`,
      })
    })
    .then(response => domUpdates.displayUserErrorMessage(response))
    .catch(err => {
        domUpdates.displayServerErrorMessage(err)
    });
  });
},
 
displayUserErrorMessage(response) {
  if (!response.ok) {

    errorHandlingLine.innerText = 'Please fill out all fields!';
  } else {
      return response.json();
    }
},
  
displayServerErrorMessage(err) {
  errorHandlingLine.innerText = err.message;
},

  loadPage() {
    suggestedRecipe.innerHTML = '';
    domUpdates.getData()
    .then((data) => {
      let randomUser = data[2][domUpdates.getRandomIndex(data[2])];
      newUser = new User(randomUser);
      cookbook = new RecipeBox(data[1]);
      recipe = new Recipe(data[1]);
      pantry = new Pantry(newUser)
      groceryStore = data[0];
      domUpdates.displayHomePage();
    })
  },

  getData() {
    return Promise.all([fetchApiData('ingredients'), fetchApiData('recipes'), fetchApiData('users')])
  },

  sortTags() {
    const result = cookbook.recipesCollection.reduce((acc, elem) => {
      elem.tags.forEach(tag => {
        if (!acc.includes(tag)) {
          acc.push(tag)
        }
      })
      return acc
    }, [])
    return result
  },

  addOrRemoveRecipeToCookButton(recipe) { //attached to EL on page load
    if (!recipe.addedToCook) {
      domUpdates.show([removeRecipeToCookButton])
      domUpdates.hide([addRecipeToCookButton])
    } else if (!recipe.addedToCook) {
      domUpdates.hide([removeRecipeToCookButton])
      domUpdates.show([addRecipeToCookButton])
    }
  },

  addOrRemoveFavoriteButton() { //attached to EL on page load
    if (recipe.isFavorited) {
      domUpdates.show([unfavoritingButton])
      domUpdates.hide([favoritingButton])
    } 
    if (!recipe.isFavorited) {
      domUpdates.hide([unfavoritingButton])
      domUpdates.show([favoritingButton])
    }
  },

  //DISPLAY FUNCTIONS
displayHomePage() {
  let randomRecipe = cookbook.recipesCollection[domUpdates.getRandomIndex(cookbook.recipesCollection)];
  suggestedRecipe.innerHTML = ``;
  suggestedRecipe.insertAdjacentHTML('beforeEnd',
  `<img class="suggested-recipe-image" src="${randomRecipe.image}" alt="food image" id="${randomRecipe.id}">
  <h2>${randomRecipe.name}</h2>`)
  tryRecipeButton.value = `${randomRecipe.id}`
},

showDropDown() {
  myDropdown.innerHTML = ``
  myDropdown.classList.toggle("show");
  let allTags = domUpdates.sortTags();
  allTags.forEach((tag) => {
    myDropdown.insertAdjacentHTML('afterBegin', `<a class ="${tag}" href="#${tag}">${tag.toUpperCase()}</a>`)
  })
},


showAllRecipes() {
  allRecipesView.innerHTML = ``
  cookbook.recipesCollection.forEach(recipe => {
    allRecipesView.insertAdjacentHTML('afterbegin', `
    <article class="recipes-views" id= ${recipe.id}>
    <h1>${recipe.name}</h1>
    <img src="${recipe.image}" tabindex= "0">
    `)
  })
  domUpdates.showRecipeInformationView();
},

showRecipeInformation(event) {
  event.preventDefault();
  domUpdates.addOrRemoveFavoriteButton();
  cookbook.recipesCollection.find(oneRecipe => {
    if((event.target.parentNode.id === `${oneRecipe.id}`) || (`${tryRecipeButton.value}` === `${oneRecipe.id}`)) {
      domUpdates.showRecipeInfoCard();
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
  domUpdates.displayIngredientsNeeded(recipe);
  domUpdates.displayUserPantry();
},

displayIngredientsNeeded(recipe) {
  let userNeededIngredients = pantry.determineIfEnoughIngredientsForRecipe(recipe);
  userNeededIngredients.forEach((ingredient) => {
    ingredientsNeededList.insertAdjacentHTML('beforeEnd', `
    <li>${ingredient.quantity.amount} ${ingredient.name}</li>`)
  })
  if (userNeededIngredients.length === 0) {
    domUpdates.show([addRecipeToCookButton])
    domUpdates.addOrRemoveRecipeToCookButton();
  }
},

showSearchResults(event) {
  event.preventDefault();
  if (!nameRadioButton.checked && !ingredientRadioButton.checked) {
    alert("ERROR: Please Select Name or Ingredient to Search");
    userSearchBox.disabled;
    domUpdates.showMainPage();
  } else if (!userSearchBox.value) {
    alert("ERROR: Please Enter Value In To Search");
  } else if (userSearchBox.value) {
    domUpdates.showRecipeSearchResults();
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
},

displayFavoritedRecipes() {
  domUpdates.showFavoriteRecipesView();
  favoriteRecipesView.innerHTML = ``
  newUser.favoriteRecipes.forEach((recipe) => {
    favoriteRecipesView.insertAdjacentHTML('afterBegin',
    `<article class="fav-recipe-card" id="${recipe.id}">
    <h2 class="fav-card-title">${recipe.name}</h2>
    <img class="current-recipe-image" src="${recipe.image}" tabindex= "0">`
    )
  })
},

displayFavoritedRecipes() {
  domUpdates.showFavoriteRecipesView();
  favoriteRecipesView.innerHTML = ``
  newUser.favoriteRecipes.forEach((recipe) => {
    favoriteRecipesView.insertAdjacentHTML('afterBegin',
    `<article class="fav-recipe-card" id="${recipe.id}">
    <h2 class="fav-card-title">${recipe.name}</h2>
    <img class="current-recipe-image" src="${recipe.image}" tabindex= "0">`
    )
  })
},


displayUserPantry() {
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
},

showRecipeToCook() {   //connected to EL for button on NAV
  domUpdates.showRecipesToCookView();
  newUser.recipesToCook.forEach(recipe => {
    recipesToCookView.insertAdjacentHTML('afterbegin',
    `<article class="result-card" id="${recipe.id}">
    <img class="result-image" alt="${recipe.name}" src="${recipe.image}" tabindex= "0">
    <h2>${recipe.name}</h2>
    </article>`)
  })
},

//USER STORY
searchByInput() {
  if (nameRadioButton.checked) {
    cookbook.matchingRecipes = [];
    cookbook.findRecipeName(userSearchBox.value)
    return cookbook.matchingRecipes;
  } else if (ingredientRadioButton.checked) {
    cookbook.recipeMatch = [];
    cookbook.findIngredientById(userSearchBox.value);
    return cookbook.recipeMatch;
  } 
},

searchByTags(event) {
  event.preventDefault();
  
  let findTags = domUpdates.sortTags();
  findTags.forEach((tag) => {
    if (event.target.className === tag) {
      domUpdates.showRecipeSearchResults();
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
},

searchByFavoriteInput() {
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
},

searchFavoriteResults(event) {
  event.preventDefault();
  domUpdates.showRecipeSearchResults();
  recipeResultsView.innerHTML = ``
  let searchedRecipeValues2 = domUpdates.searchByFavoriteInput();
  searchedRecipeValues2.map(searchedRecipe2 => {
    
    recipeResultsView.insertAdjacentHTML('afterbegin',
    `<article class="result-card">
    <img class="result-image" alt="${searchedRecipe2.name}" src="${searchedRecipe2.image}" tabindex= "0">
    <h2>${searchedRecipe2.name}</h2>
    </article>`)
  })
},

userAddRecipeToCook() { //attached to EL - button
  newUser.addRecipeToCook(recipe);
  domUpdates.show([removeRecipeToCookButton])
  domUpdates.hide([addRecipeToCookButton])
},

userRemoveRecipeToCook() { //attached to EL - button
  newUser.removeRecipeToCook(recipe);
  domUpdates.hide([removeRecipeToCookButton])
  domUpdates.show([addRecipeToCookButton])
},

addFavorite() { //attached to EL - button
  newUser.addFavoriteRecipe(recipe);
  domUpdates.show([unfavoritingButton])
  domUpdates.hide([favoritingButton])
},

removeFavoriteRecipe() { //attached to EL - button
  newUser.removeFavoriteRecipe(recipe);
  domUpdates.hide([unfavoritingButton])
  domUpdates.show([favoritingButton])
},

//VIEWS
showMainPage() {
  domUpdates.displayHomePage();
  domUpdates.show([mainPageView, mainPageNavForm, favoriteRecipesButton, seeAllRecipesButton, searchButton, dropDownButton]);
  domUpdates.hide([favoriteRecipesView, recipeInfoView, recipeResultsView, searchButton2, allRecipesView, userShoppingView, recipesToCookView, userShoppingView]);
},

showRecipeSearchResults() {
  domUpdates.show([recipeResultsView, seeAllRecipesButton, homeButton, favoriteRecipesButton, mainPageNavForm, searchButton, dropDownButton]);
  domUpdates.hide([ mainPageView, favoriteRecipesView, recipeInfoView, searchButton2, allRecipesView, recipesToCookView]);
},

showFavoriteRecipesView() {
  domUpdates.show([favoriteRecipesView, searchButton2, homeButton, searchButton]);
  domUpdates.hide([mainPageView, favoriteRecipesButton, recipeInfoView, allRecipesView, recipeResultsView, searchButton, recipesToCookView, dropDownButton, userShoppingView]);
},

showRecipeInfoCard() {
  domUpdates.show([recipeInfoView, seeAllRecipesButton, homeButton, favoriteRecipesButton, searchButton, dropDownButton, userShoppingView]);
  domUpdates.hide([allRecipesView, mainPageView, recipeResultsView, searchButton2, favoriteRecipesView, recipesToCookView]);
},

showRecipesToCookView() {
  domUpdates.show([recipesToCookView, homeButton, favoriteRecipesButton, searchButton, dropDownButton]);
  domUpdates.hide([mainPageView, recipeInfoView, allRecipesView, recipeResultsView, searchButton2, favoriteRecipesView, userShoppingView]);
},

showRecipeInformationView(){
  domUpdates.addOrRemoveFavoriteButton();
  domUpdates.show([allRecipesView, homeButton, favoriteRecipesButton, dropDownButton])
  domUpdates.hide([mainPageView, seeAllRecipesButton, favoriteRecipesView, recipeInfoView, recipesToCookView])
},


};

window.addEventListener('load', domUpdates.loadPage);
unfavoritingButton.addEventListener('click', domUpdates.removeFavoriteRecipe);
favoritingButton.addEventListener('click', domUpdates.addFavorite);
favoriteRecipesButton.addEventListener('click', domUpdates.displayFavoritedRecipes);
homeButton.addEventListener('click', domUpdates.showMainPage);
seeAllRecipesButton.addEventListener('click', domUpdates.showAllRecipes);
searchButton.addEventListener('click', domUpdates.showSearchResults);
searchButton2.addEventListener('click', domUpdates.searchFavoriteResults);
dropDownButton.addEventListener('click', domUpdates.showDropDown);
myDropdown.addEventListener('click', domUpdates.searchByTags);
allRecipesView.addEventListener('click', domUpdates.showRecipeInformation); 
recipeResultsView.addEventListener('click', domUpdates.showRecipeInformation);
tryRecipeButton.addEventListener('click', domUpdates.showRecipeInformation);
favoriteRecipesView.addEventListener('click', domUpdates.showRecipeInformation);
addRecipeToCookButton.addEventListener('click', domUpdates.userAddRecipeToCook);
removeRecipeToCookButton.addEventListener('click', domUpdates.userRemoveRecipeToCook);
recipesToCookButton.addEventListener('click', domUpdates.showRecipeToCook);
recipesToCookView.addEventListener('click', domUpdates.showRecipeInformation);
letsCookButton.addEventListener('click', domUpdates.postApi)

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
}


export default  domUpdates;

