// Import the recipes from the provided recipes.mjs file
import recipes from 'recipes/recipes.mjs';

// Random function to generate a random number
function random(num) {
  return Math.floor(Math.random() * num);
}

// Function to get a random entry from a list
function getRandomListEntry(list) {
  const listLength = list.length;
  const randomNum = random(listLength);
  return list[randomNum];
}

// Function to generate the HTML for recipe tags
function tagsTemplate(tags) {
  let html = '';
  tags.forEach(tag => {
    html += `<li>${tag}</li>`;
  });
  return html;
}

// Function to generate the HTML for rating stars
function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }

  html += `</span>`;
  return html;
}

// Function to generate the full recipe HTML
function recipeTemplate(recipe) {
  return `<figure class="recipe">
    <img src="${recipe.image}" alt="image of ${recipe.name}" />
    <figcaption>
      <ul class="recipe__tags">
        ${tagsTemplate(recipe.tags)}
      </ul>
      <h2><a href="#">${recipe.name}</a></h2>
      <p class="recipe__ratings">
        ${ratingTemplate(recipe.rating)}
      </p>
      <p class="recipe__description">${recipe.description}</p>
    </figcaption>
  </figure>`;
}

// Function to render recipes into the page
function renderRecipes(recipeList) {
  // Get the element we will output the recipes into
  const recipeContainer = document.querySelector('.recipe-container');
  
  // Generate HTML for each recipe and set the innerHTML
  recipeContainer.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
}

// Function to initialize the random recipe
function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

// Call init to render a random recipe on page load
init();

// Search handler to filter recipes based on user input
function filterRecipes(query) {
  const filtered = recipes.filter(recipe => {
    const queryLower = query.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(queryLower) ||
      recipe.description.toLowerCase().includes(queryLower) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(queryLower))
    );
  });

  // Sort the filtered recipes alphabetically by name
  return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

// Event listener for the search button
document.querySelector('.search-button').addEventListener('click', (e) => {
  e.preventDefault();

  // Get the search input value and convert to lowercase
  const query = document.querySelector('.search-bar input').value;
  
  // Get the filtered and sorted recipes
  const filteredRecipes = filterRecipes(query);
  
  // Render the filtered recipes
  renderRecipes(filteredRecipes);
});
