const COHORT = "2309-FTB-ET-WEB-FT";
const API_URL = `https:fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/resources`;

const state = {
    resources: [],
  };

  const resourceList = document.querySelector("#resources");

const addResourceForm = document.querySelector("#addResource");
addResourceForm.addEventListener("submit", addResource);

async function render() {
    await getRecipes();
    renderRecipes();
    console.log('state', state)
  }
  render();

  async function getRecipes() {
    try {
      const reponse = await fetch(API_URL);
      const json = await response.json();
      state.recipes = json.data;
    } catch (error) {
      console.error(error);
    }
  }

  function renderRecipes() {
    if (!state.recipes.length) {
      recipeList.innerHTML = "<li>No recipes.</li>";
      return;
    }
  
    const recipeCards = state.recipe.map((recipe) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <h2>${recipe.name}</h2>
        <img src="${recipe.imageUrl}" alt="${recipe.name}" />
        <p>${recipe.description}</p>
      `;
      return li;
    });
  
    recipeList.replaceChildren(...recipeCards);
  }

  
  