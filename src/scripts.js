import './styles.css';
import apiCalls from './apiCalls';
import './images/cookies.jpg';
import RecipeBox from './classes/RecipeBox';



console.log('Hello world');

//BUTTONS
const favoriteRecipesButton = document.getElementById('favoriteRecipesButton');
const homeButton = document.getElementById('homeButton');
const tryRecipeButton = document.getElementById('tryRecipeButton');
const favoritingButton = document.getElementById('favoritingButton');
const recipeInfoButton1 = document.getElementById('recipeInfoButton1');
const recipeInfoButton2 = document.getElementById('recipeInfoButton2');
const recipeInfoButton3 = document.getElementById('recipeInfoButton3');

//USER INPUT FIELD
const userSearchBox = document.getElementById('userSearchBox');

//VIEWS
const mainPageView = document.getElementById('mainPageView');
const recipeResultsView = document.getElementById('recipeResultsView');
const recipeResultsStatement = document.getElementById('recipeResultsStatement');
const recipeInfoView = document.getElementById('recipeInfoView');
const favoriteRecipesView = document.getElementById('favoriteRecipesView')
const showAllRecipesView = document.getElementById('allRecipes');

//RANDOM
const randomRecipeImage = document.getElementById('randomRecipeImage')



//CLASS INSTANSTIATION
const cookbook = new RecipeBox(recipeData);
savedRecipes;


//FUNCTIONS

//THE DOOOOM!!!

//goal: load up random image and title on main page,  

//at try recipe button eventlistener, 'on click',
const funct = () => {
    hide([mainPageView]);
    show([recipeInfoView]);
    //iterate our array and if the title matches the main page view, load the entire object onto the recipe info view
}

//to show all recipes (have a hard stop at 20 recipes)

const showAllRecipes = () => {
    cookbook.forEach((recipe) => {
    someSectionView.innerHTML += `
    <section>
    <button></button>
    <whatever>${recipe.name}
    <more whatever>${recipe.image}
    `
    })
}

//create random recipe on page load 
const whateverName = () => {
    randomRecipe = recipeData[getRandomIndex(recipeData)]
    recipeOnMainPage = new RecipeBox(randomRecipe)
    mainPageView.innerHTML = `
    <section id="">
    <img class="suggested-recipe-image" src=${recipeOnMainPage.image} alt="food image">
    <h2>${recipeOnMainPage.name}</h2>
    </section>`
}




let getRandomIndex = (array => Math.floor(Math.random() * array.length));

//HELPER FUNCTIONS



const show = (elements) => {
    elements.forEach(element => element.classList.remove('hidden'));
}
const hide = (elements) => {
    elements.forEach(element => element.classList.add('hidden'));
}

const showMainPage = () => {
    show([]);
    hide([]);
}

const showRecipeSearchResults = () => {
    show([]);
    hide([]);
}

const showFavoriteRecipes = () => {
    show([]);
    hide([]);
}

const showRecipeInfoCard = () => {
    show([]);
    hide([]);
}

//EVENT LISTENERS
    
favoriteRecipesButton.addEventListener();
homeButton.addEventListener();
tryRecipeButton.addEventListener();
favoritingButton.addEventListener();
recipeInfoButton1.addEventListener();
recipeInfoButton2.addEventListener();
recipeInfoButton3.addEventListener();
