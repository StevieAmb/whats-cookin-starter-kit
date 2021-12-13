         import './styles.css';
// import apiCalls from './apiCalls';
import './images/cookies.jpg';
import RecipeBox from '../src/classes/RecipeBox';
import Recipe from '../src/classes/Recipe';
// import { ingredientsData } from '../src/data/ingredients';
import {
	recipeData
} from '../src/data/recipes';
import { ingredientsData } from './data/ingredients';


console.log('Hello world');

//BUTTONS
// const favoriteRecipesButton = document.getElementById('favoriteRecipesButton');
const homeButton = document.getElementById('homeButton');
// const tryRecipeButton = document.getElementById('tryRecipeButton');
// const favoritingButton = document.getElementById('favoritingButton');
// const recipeInfoButton1 = document.getElementById('recipeInfoButton1');
// const recipeInfoButton2 = document.getElementById('recipeInfoButton2');
// const recipeInfoButton3 = document.getElementById('recipeInfoButton3');
const seeAllRecipesButton = document.getElementById('seeAllRecipesButton');
const nameRadioButton = document.getElementById('name')
const tagRadioButton = document.getElementById('tag')
const ingredientRadioButton = document.getElementById('ingredient')

//CLASS INSTANSTIATION
let cookbook;
let recipe;
let newUser;
let ingredientsList;

//ON PAGE LOAD


const getData = () => {
  return Promise.all([fetchApiData('ingredients'), fetchApiData('recipes'), fetchApiData('users')])
  .then((data) => {
    newUser = new User(data[2].userData[Math.floor(Math.random() * data[2].userData.length)]);
    cookbook = new RecipeBox(data[1].recipeData);
    ingredientsList = data[0].ingredientsData;
  })
};


//USER INPUT FIELD
const userSearchBox = document.getElementById('userSearchBox');

//VIEWS
const mainPageView = document.getElementById('mainPageView');
const recipeResultsView = document.getElementById('recipeResultsView');
// const recipeResultsStatement = document.getElementById('recipeResultsStatement');
const recipeInfoView = document.getElementById('recipeInfoView');
const favoriteRecipesView = document.getElementById('favoriteRecipesView')
const allRecipesView = document.getElementById('allRecipesView');

//RANDOM.
// const randomRecipeImage = document.getElementById('randomRecipeImage');



//FUNCTIONS

//THE DOOOOM!!!

//goal: load up random image and title on main page,  

//at try recipe button eventlistener, 'on click',
// const function = () => {
  //     hide([mainPageView]);
  //     show([recipeInfoView]);
  //     //iterate our array and if the title matches the main page view, load the entire object onto the recipe info view
  // };
  
  //to show all recipes (have a hard stop at git);
  const recipeTitle = document.getElementById('recipeTitle')
  const currentRecipeImage = document.getElementById('currentRecipeImage')
  const instructionsList = document.getElementById('instructionsList')
  const ingredientsList = document.getElementById('ingredientsList')
  const totalCost = document.getElementById('totalCost')
  //refactor to .find()
  //refactore line 68 so the ingredients are in bullet points 
  



//show recipeinfo card view
//loop through the array of recipe data.link
//if the target id === event.target.parentNode.id


allRecipesView.addEventListener('click', event => {
	for (var i = 0; i < cookbook.recipeData.length; i++) {
		if (`${cookbook.recipeData[i].id}` === event.target.parentNode.id) {
			showRecipeInfoCard();
			recipe = new Recipe(cookbook.recipeData[i])
			const recipeIngredients = recipe.findRecipeIngredientInfo();
			const recipeInstructions = recipe.getRecipeInstructions();
      const recipeCostTotal = recipe.calculateRecipeCost();
			recipeTitle.innerHTML = ``
			recipeTitle.innerHTML = `${cookbook.recipeData[i].name}`
			currentRecipeImage.src = `${cookbook.recipeData[i].image}`
			currentRecipeImage.alt = `${cookbook.recipeData[i].name}`
			recipeIngredients.forEach((ingredient) => {
				ingredientsList.insertAdjacentHTML('beforeEnd', `
				<li>${ingredient}</li>`)
			})
		recipeInstructions.forEach((instruction) => {
				instructionsList.insertAdjacentHTML('beforeEnd', `
			<li>${instruction}</li>`)
			})
      totalCost.innerText = `$${recipeCostTotal}`
		}
	}
})

const showAllRecipes = () => {
  cookbook.recipeData.forEach(recipe => {
    allRecipesView.insertAdjacentHTML('afterbegin', `
    <article class="recipes-views" id= ${recipe.id}>
    <h1>${recipe.name}</h1>
    <img src="${recipe.image}">
    `)
  })
  show([allRecipesView])
  hide([mainPageView, seeAllRecipesButton]) //hid "see all recipe button"
}

//filter by recipes tags 
  //
const searchButton = document.getElementById('searchButton')


const searchByInput = () => {//I wonder if we can do radio buttons for this, instead, and then have it throw an error/disable search if they don't click a category before searching for something
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
console.log(searchedRecipeValues);
searchedRecipeValues.map(searchedRecipe => {

  recipeResultsView.insertAdjacentHTML('afterbegin', 
       `<article class="result-card">
        <img class="result-image" alt="${searchedRecipe.name}" src="${searchedRecipe.image}">
        <h2>${searchedRecipe.name}</h2>
      </article>`)
})
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
    
    // const showFavoriteRecipes = () => {
      //     show([]);
      //     hide([]);
      // }
      
      const showRecipeInfoCard = () => {
        show([recipeInfoView, seeAllRecipesButton, homeButton]);
        hide([allRecipesView, mainPageView, recipeResultsView, favoriteRecipesView]);
      }
      
      //EVENT LISTENERS
      
      seeAllRecipesButton.addEventListener("click", showAllRecipes)
      searchButton.addEventListener('click', showSearchResults)
      // // favoriteRecipesButton.addEventListener();
      // // homeButton.addEventListener();
      // // tryRecipeButton.addEventListener();
      // // favoritingButton.addEventListener();
      // // recipeInfoButton1.addEventListener();
      // // recipeInfoButton2.addEventListener();
      // // recipeInfoButton3.addEventListener();