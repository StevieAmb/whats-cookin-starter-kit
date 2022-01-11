


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
    console.log('here', recipe)
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

  //DISPLAY FUNCTIONS

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
    
    let findTags = sortTags();
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
    show([removeRecipeToCookButton])
    hide([addRecipeToCookButton])
  },
  
  userRemoveRecipeToCook() { //attached to EL - button
    newUser.removeRecipeToCook(recipe);
    hide([removeRecipeToCookButton])
    show([addRecipeToCookButton])
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
    domUpdates.show([recipeInfoView, seeAllRecipesButton, homeButton, favoriteRecipesButton, searchButton, dropDownButton]);
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

export default  domUpdates;

// window.addEventListener('load', domUpdates.loadPage);
// unfavoritingButton.addEventListener('click', domUpdates.removeFavoriteRecipe);
// favoritingButton.addEventListener('click', domUpdates.addFavorite);
// favoriteRecipesButton.addEventListener('click', domUpdates.displayFavoritedRecipes);
// homeButton.addEventListener('click', domUpdates.showMainPage);
// seeAllRecipesButton.addEventListener('click', domUpdates.showAllRecipes);
// searchButton.addEventListener('click', domUpdates.showSearchResults);
// searchButton2.addEventListener('click', domUpdates.searchFavoriteResults);
// dropDownButton.addEventListener('click', domUpdates.showDropDown);
// myDropdown.addEventListener('click', domUpdates.searchByTags);
// allRecipesView.addEventListener('click', domUpdates.showRecipeInformation); 
// recipeResultsView.addEventListener('click', domUpdates.showRecipeInformation);
// tryRecipeButton.addEventListener('click', domUpdates.showRecipeInformation);
// favoriteRecipesView.addEventListener('click', domUpdates.showRecipeInformation);
// addRecipeToCookButton.addEventListener('click', domUpdates.userAddRecipeToCook);
// removeRecipeToCookButton.addEventListener('click', domUpdates.userRemoveRecipeToCook);
// recipesToCookButton.addEventListener('click', domUpdates.showRecipeToCook);
// recipesToCookView.addEventListener('click', domUpdates.showRecipeInformation);
