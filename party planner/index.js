const COHORT = "2309-FTB-ET-WEB-FT";
<<<<<<< HEAD
const API = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/" + COHORT;

const state = {
    events: []
}

const partyList = document.getElementById("party-list");
const partyForm = document.getElementById("party-form");

async function createEvent(event) {
    event.preventDefault();
    // 2023-10-31T14:50 + "00.000Z"
    // 2021-09-30T00:00:00.000Z, // Date ISO string
    try{
        const response = await fetch(API + "/events", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                name: document.getElementById("name").value,
                description: document.getElementById("description").value,
                date: document.getElementById("date").value,
                location: document.getElementById("location").value,
            })
        });
        getEvents();
    } catch(err) {
        console.error(err);
    }
}

partyForm.addEventListener("submit", createEvent);

async function getEvents() {
    try{
        const response = await fetch(API + "/events");
        const json = await response.json();
        state.events = json.data;
    
    } catch (err) { 
        console.error(err);
    }
}

function render() {
    const events = state.events.map((event) => {
        const article = document.createElement("article");
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "X"
        deleteBtn.addEventListener("click", async() => {
            try{
                const response = await fetch(API + `/events/${event.id}`, {
                    method:"DELETE"
                });
                console.log("deleted")
                getEvents();
            } catch(err) {
                console.error(err);
            }
        });
        article.innerHTML = `
        <h3>${event.name}</h3>
        <address>${event.location}</address>`
        article.append(deleteBtn);

        return article;
    });
    partyList.replaceChildren(...events);
}

getEvents();
=======
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

  
  
>>>>>>> a15c2847d87585fe4bb57c26521bdc66ffa5c3c5
