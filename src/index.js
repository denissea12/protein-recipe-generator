function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function AIRecipeGenerator(event) {
  event.preventDefault();

  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = "Generating a recipe...";

  apiKey = "3d5bfbffo3ac0fea0f4a244a4b9t3ca4";
  let userInputElement = document.querySelector("#protein-source");
  let prompt = `Generate a recipe using ${userInputElement.value} as a main ingredient`;
  let context =
    "You are a fitness coach who loves to indulge in good food that is nutritious and high in protein. Your mission is to generate a recipe using the protein source provided by the user. Make sure you return the recipe in basic html format. Do not include html in response.";
  apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let RecipeElementBox = document.querySelector("#recipe");
  RecipeElementBox.classList.remove("hidden");
  RecipeElementBox.innerHTML = `<div class="blink">Generating a recipe using ${userInputElement.value} as an ingredient...</div>`;

  console.log("generating recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayRecipe);
}
let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", AIRecipeGenerator);
