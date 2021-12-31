import './styles.css';
import { fetchApiData } from './apiCalls';
import './images/cookies.jpg';
import RecipeBox from './classes/RecipeBox';
import Recipe from './classes/Recipe';
// import { ingredientsData } from '../src/data/ingredients';
// import { recipeData } from '../src/data/recipes';
// import { usersData } from '../src/data/users';
import User from './classes/User';

//BUTTONS
const favoriteRecipesButton = document.getElementById('favoriteRecipesButton');
const homeButton = document.getElementById('homeButton');
const tryRecipeButton = document.getElementById('tryRecipeButton');
const favoritingButton = document.getElementById('favoritingButton');
const seeAllRecipesButton = document.getElementById('seeAllRecipesButton');
const nameRadioButton = document.getElementById('name')
const tagRadioButton = document.getElementById('tag')
const ingredientRadioButton = document.getElementById('ingredient')
const searchButton = document.getElementById('searchButton');
const recipesToCookButton = document.getElementById('recipesToCookButton');
const dropDownButton = document.getElementById('dropDownButton')
const myDropdown = document.getElementById("myDropdown")

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
const recipesToCookView = document.getElementById('recipesToCookView');
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
var cookbook;
let recipe;
let newUser;
let currentRecipe; 
let groceryStore;
let randomUser;
let randomRecipe;

//ON PAGE LOAD

//FUNCTIONS
const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
}

const getData = () => {
  return Promise.all([fetchApiData('ingredients'), fetchApiData('recipes'), fetchApiData('users')])
};

const loadPage = () => {
  getData()
  .then((data) => {
    randomUser = data[2].usersData[getRandomIndex(data[2].usersData)];
    console.log(randomUser)
    newUser = new User(randomUser);
    cookbook = new RecipeBox(data[1].recipeData);
    recipe = new Recipe(data[1].recipeData);
    groceryStore = data[0].ingredientsData;
    displayHomePage();
  })
};

const displayHomePage = () => {
  randomRecipe = cookbook.recipesCollection[getRandomIndex(cookbook.recipesCollection)];
  suggestedRecipe.innerHTML = ``;
  suggestedRecipe.insertAdjacentHTML('beforeEnd', 
  `<img class="suggested-recipe-image" src="${randomRecipe.image}" alt="food image" id="${randomRecipe.id}">
  <h2>${randomRecipe.name}</h2>`)
  tryRecipeButton.value = `${randomRecipe.id}`
}

const sortTags = () => {
  const result = cookbook.recipesCollection.reduce((acc, elem) => {
    elem.tags.forEach(tag => {
      if(!acc.includes(tag)) {
        acc.push(tag)
      }
    })
  return acc
  }, [])
  console.log(result);
  return result
}
  
const showDropDown = () => {
  myDropdown.innerHTML = ``
  myDropdown.classList.toggle("show");
  let allTags = sortTags();
  console.log(allTags)
  allTags.forEach((tag) => {
  myDropdown.insertAdjacentHTML('afterBegin', `<a class ="${tag}" href="#${tag}">${tag.toUpperCase()}</a>`)
  })
}

const searchByTags = (event) => {
  event.preventDefault();

  let findTags = sortTags();
  findTags.forEach((tag) => {
    console.log(event.target.className)
    if(event.target.className === tag) {
      showRecipeSearchResults();
    cookbook.matchingRecipesTags = [];
    let searchedRecipeTag = cookbook.storeByTag(tag);
    
    recipeResultsView.innerHTML = ``
    searchedRecipeTag.forEach((elem) => {
    recipeResultsView.insertAdjacentHTML('afterBegin', 
    `<article class="result-card" id="${elem.id}">
    <img class="result-image" alt="${elem.name}" src="${elem.image}">
    <h2>${elem.name}</h2>
    </article>`)
  })
    }
  })
}  

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
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


const showRecipeInformation = (event)  => {
  console.log(event.target.parentNode)
  event.preventDefault();
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
}

const showAllRecipes = () => {
  allRecipesView.innerHTML = ``
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

const searchByFavoriteInput = () => {
  if (nameRadioButton2.checked) {
    let recipeByName = newUser.filterFavoritesByName(userSearchBox2.value)
    return recipeByName;
  } else if (tagRadioButton2.checked)  {
    let recipeByTags = newUser.filterFavoritesByTag(userSearchBox2.value);
    return newUser.matchingRecipesTags;
  } else if (ingredientRadioButton2.checked) {
    newUser.recipeMatch = [];
    newUser.filterFavoritesByIngredient(userSearchBox2.value);
    return newUser.recipeMatch;
  } else if (!tagRadioButton2.checked && !nameRadioButton2.checked && !ingredientRadioButton2) {
    userSearchBox2.disabled;
  }
}

const searchFavoriteResults = (event) => {
  event.preventDefault();
  showRecipeSearchResults();
  recipeResultsView.innerHTML = ``
  let searchedRecipeValues2 = searchByFavoriteInput();
  searchedRecipeValues2.map(searchedRecipe2 => {
    
    recipeResultsView.insertAdjacentHTML('afterbegin', 
    `<article class="result-card">
    <img class="result-image" alt="${searchedRecipe2.name}" src="${searchedRecipe2.image}">
    <h2>${searchedRecipe2.name}</h2>
    </article>`)
  })
}

favoriteRecipesView.addEventListener('click', event => {  
  for (var i = 0; i < newUser.favoriteRecipes.length; i++) {
    if (`${newUser.favoriteRecipes[i].id}` === event.target.parentNode.id) {
      showRecipeInfoCard();
      recipe = new Recipe(newUser.favoriteRecipes[i])
      currentRecipe = recipe;
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
})

//goal: when we click the favorite button, it'll indicate to the user that the recipe has been favorited
  //changing the innerHTML text to show "favorited"
    
const displayFavoritedRecipes = () => {
  showFavoriteRecipesView();
  favRecipeCards.innerHTML = ``
  newUser.favoriteRecipes.forEach((recipe) => {
    favRecipeCards.insertAdjacentHTML('afterBegin', 
    `<article class="fav-recipe-card" id="${recipe.id}">
    <h2 class="fav-card-title">${recipe.name}</h2>
    <img class="current-recipe-image" src="${recipe.image}">`
    )
  })
}
  
  const searchByInput = () => {
    if (nameRadioButton.checked) {
      cookbook.matchingRecipes = [];
      cookbook.findRecipeName(userSearchBox.value)
      return cookbook.matchingRecipes;
    } else if (ingredientRadioButton.checked) {
      cookbook.recipeMatch = [];
      cookbook.findIngredientById(userSearchBox.value);
      return cookbook.recipeMatch;
    } else if (!nameRadioButton.checked && !ingredientRadioButton.checked) {
      alert("ERROR: Please Select Name or Ingredient to Search")
      userSearchBox.disabled;
      showMainPage();
    }
  }
  
  const showSearchResults = (event) => {
    event.preventDefault();
    showRecipeSearchResults();
    recipeResultsView.innerHTML = ``
    let searchedRecipeValues = searchByInput();
    searchedRecipeValues.forEach((searchedRecipe) => {
      
      recipeResultsView.insertAdjacentHTML('afterBegin', 
      `<article class="result-card" id="${searchedRecipe.id}">
      <img class="result-image" alt="${searchedRecipe.name}" src="${searchedRecipe.image}">
      <h2>${searchedRecipe.name}</h2>
      </article>`)
    })
  }
  


  
  
  
  //HELPER FUNCTIONS
  const addFavorite = () => {
    newUser.addFavoriteRecipe(currentRecipe)
    currentRecipe.isFavorited === true 
    favoritingButton.innerHTML = `Favorited`
    console.log(currentRecipe)
  }

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
    show([recipeResultsView, seeAllRecipesButton, homeButton, favoriteRecipesButton, mainPageNavForm]);
    hide([mainPageView, favoriteRecipesView, recipeInfoView, favRecipesNavForm, allRecipesView]);
  }
  
  const showFavoriteRecipesView = () => {
    show([favoriteRecipesView, favRecipesNavForm, homeButton]);
    hide([mainPageView,  favoriteRecipesButton, mainPageNavForm, recipeInfoView]);
  }
  
  const showRecipeInfoCard = () => {
    show([recipeInfoView, seeAllRecipesButton, homeButton]);
    hide([allRecipesView, mainPageView, recipeResultsView, favRecipesNavForm]);
  }
  
  const showRecipesToCookView = () => {
    show([recipesToCookView, homeButton]);
    hide([mainPageView, recipeInfoView, allRecipesView, recipeResultsView, favRecipesNavForm]);
  }
  
tryRecipeButton.addEventListener('click', () => {
  showRecipeInfoCard();
  for (var i = 0; i < cookbook.recipesCollection.length; i++) {
    if (`${cookbook.recipesCollection[i].id}` === `${tryRecipeButton.value}`) {
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
window.addEventListener('load', loadPage);
homeButton.addEventListener('click', showMainPage);
favoritingButton.addEventListener('click', addFavorite);
seeAllRecipesButton.addEventListener('click', showAllRecipes);
searchButton.addEventListener('click', showSearchResults);
favoriteRecipesButton.addEventListener('click', displayFavoritedRecipes);
searchButton2.addEventListener('click', searchFavoriteResults)
dropDownButton.addEventListener('click', showDropDown)
myDropdown.addEventListener('click', searchByTags)
allRecipesView.addEventListener('click', showRecipeInformation)
recipeResultsView.addEventListener('click', showRecipeInformation)
    