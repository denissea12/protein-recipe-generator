function AIRecipeGenerator(event) {
  event.preventDefault();

  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = "the recipe is";

  new Typewriter("#recipe", {
    strings: ["The recipe is"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", AIRecipeGenerator);
