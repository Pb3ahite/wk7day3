
const form = document.getElementById("pokemon-form");

const image = document.getElementById("pokemon-image");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const pokemonName = form.elements["pokemon-name"].value;

  const name = document.getElementById("pokemon-name");

  const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;
 
  fetch(url)
    .then(function(response) {
      
      if (response.ok) {
        
        return response.json();
      } else {
       
        throw new Error("Something went wrong");
      }
    })
    .then(function(data) {
     
      const spriteUrl = data.sprites.front_default;
      const pokemonName = data.name;
     
      image.src = spriteUrl;
   
      name.textContent = pokemonName[0].toUpperCase() + pokemonName.slice(1);
    })
    .catch(function(error) {
      
      console.error(error);
    });
});
