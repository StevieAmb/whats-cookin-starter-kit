import './styles.css';
// import apiCalls from './apiCalls';
import './images/cookies.jpg';
import RecipeBox from '../src/classes/RecipeBox';
// import Recipe from '../src/classes/Recipe';
// import { ingredientsData } from '../src/data/ingredients';
import { recipeData } from '../src/data/recipes';


console.log('Hello world');

//BUTTONS
// const favoriteRecipesButton = document.getElementById('favoriteRecipesButton');
// const homeButton = document.getElementById('homeButton');
// const tryRecipeButton = document.getElementById('tryRecipeButton');
// const favoritingButton = document.getElementById('favoritingButton');
// const recipeInfoButton1 = document.getElementById('recipeInfoButton1');
// const recipeInfoButton2 = document.getElementById('recipeInfoButton2');
// const recipeInfoButton3 = document.getElementById('recipeInfoButton3');
const seeAllRecipesButton = document.getElementById('seeAllRecipesButton');

//USER INPUT FIELD
// const userSearchBox = document.getElementById('userSearchBox');

//VIEWS
const mainPageView = document.getElementById('mainPageView');
const recipeResultsView = document.getElementById('recipeResultsView');
// const recipeResultsStatement = document.getElementById('recipeResultsStatement');
const recipeInfoView = document.getElementById('recipeInfoView');
const favoriteRecipesView = document.getElementById('favoriteRecipesView')
const allRecipesView = document.getElementById('allRecipesView');

//RANDOM.
// const randomRecipeImage = document.getElementById('randomRecipeImage');


//CLASS INSTANSTIATION
const cookbook = new RecipeBox(recipeData);
const recipe = new Recipe(recipeData);

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

    //refactor to .find()
 allRecipesView.addEventListener('click', event => {
    for (var i = 0; i < cookbook.recipeData.length; i++) {
        if (`${cookbook.recipeData[i].id}` === event.target.parentNode.id) {
        showRecipeInfoCard();
        const recipeInstructions = recipe.findRecipeIngredientInfo();
        recipeInfoView.innerHTML = ``
        recipeInfoView.insertAdjacentHTML('afterbegin', `
        <h2>${cookbook.recipeData[i].name}</h2>
    <img class="current-recipe-image" src=${cookbook.recipeData[i].image} alt="food-image">
    <h3>${cookbook.recipeData[i].ingredients}</h3>
    <p>${recipeInstructions}</p>
        `)
            console.log(cookbook.recipeData[i])
        }
      }
 })



//show recipeinfo card view
//loop through the array of recipe data.link
//if the target id === event.target.parentNode.id


// const showInstructions = (event) {
//     showRecipeInfoCard();

// })
// //     //pull out image
// //     //pull out title
// //     //pull out ingredient
// //     //pull out instructions
// //     //based on the recipe.id
// // }
    
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

    //create random recipe on page load 
    // const whateverName = () => {
    //     randomRecipe = recipeData[getRandomIndex(recipeData)]
    //     recipeOnMainPage = new RecipeBox(randomRecipe)
    //     mainPageView.innerHTML = `
    //     <section id="">
    //     <img class="suggested-recipe-image" src=${recipeOnMainPage.image} alt="food image">
    //     <h2>${recipeOnMainPage.name}</h2>
    //     </section>`
    // }
    
    
    
    
    // let getRandomIndex = (array => Math.floor(Math.random() * array.length));
    
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
    
    // const showRecipeSearchResults = () => {
    //     show([]);
    //     hide([]);
    // }
    
    // const showFavoriteRecipes = () => {
    //     show([]);
    //     hide([]);
    // }
    
    const showRecipeInfoCard = () => {
        show([recipeInfoView, seeAllRecipesButton]);
        hide([allRecipesView, mainPageView, recipeResultsView, favoriteRecipesView]);
    }
    
    //EVENT LISTENERS
    
    seeAllRecipesButton.addEventListener("click", showAllRecipes)
    // favoriteRecipesButton.addEventListener();
    // homeButton.addEventListener();
    // tryRecipeButton.addEventListener();
    // favoritingButton.addEventListener();
    // recipeInfoButton1.addEventListener();
// recipeInfoButton2.addEventListener();
// recipeInfoButton3.addEventListener();
