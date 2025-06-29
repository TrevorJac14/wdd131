import recipes from './recipes.mjs';
console.log("Recipes imported:", recipes);

function getRandomNumber(num) {
    console.log("Generating random number for", num);
  return Math.floor(Math.random() * num);
}

function getRandomRecipe() {
  const index = getRandomNumber(recipes.length);
  console.log("Selected recipe index:", index);
  return recipes[index];
}

function tagsTemplate(tags) {
  return `
    <div class="tags">
      ${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
  `;
}

function ratingTemplate(rating) {
  const filledStars = '<span aria-hidden="true" class="icon-star">⭐</span>'.repeat(Math.floor(rating));
  const emptyStars = '<span aria-hidden="true" class="icon-star-empty">☆</span>'.repeat(5 - Math.floor(rating));

  return `
    <span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
      ${filledStars}${emptyStars}
    </span>
  `;
}

function recipeTemplate(recipe) {
  return `
    <div class="recipe-card">
      <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}">
      <div class="recipe-info">
        ${tagsTemplate(recipe.tags)}
        <h2>${recipe.name}</h2>
        ${ratingTemplate(recipe.rating)}
        <p>${recipe.description}</p>
      </div>
    </div>
  `;
}

function init() {
  const recipeSection = document.querySelector('main');
  const randomRecipe = getRandomRecipe();
  recipeSection.innerHTML = recipeTemplate(randomRecipe);
  console.log("Random Recipe:", randomRecipe);
}

init();
// Filter recipes based on the query string
function filterRecipes(query) {
  return recipes
    .filter(recipe => {
      const q = query.toLowerCase();

      const inName = recipe.name.toLowerCase().includes(q);
      const inDescription = recipe.description.toLowerCase().includes(q);
      const inTags = recipe.tags?.find(tag => tag.toLowerCase().includes(q));
      const inIngredients = recipe.ingredients?.find(ingredient => ingredient.toLowerCase().includes(q));

      return inName || inDescription || inTags || inIngredients;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}


// Render a list of recipes (accepts an array)
function renderRecipes(recipeList) {
  const recipeSection = document.querySelector('main');
  if (recipeList.length === 0) {
    recipeSection.innerHTML = '<p>No recipes found.</p>';
    return;
  }
  recipeSection.innerHTML = recipeList.map(recipeTemplate).join('');
}

// Handle the search button click event
function searchHandler(event) {
  event.preventDefault(); // Prevent form submission or page reload
  const searchInput = document.getElementById('search');
  const query = searchInput.value.trim();
  if (!query) {
    // If input empty, show a random recipe
    init();
    return;
  }
  const filteredRecipes = filterRecipes(query);
  renderRecipes(filteredRecipes);
  searchInput.value = '';

}

// Attach event listener to search button
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', searchHandler);
