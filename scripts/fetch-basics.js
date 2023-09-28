const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;

async function getPokemon(url) {
  const response = await fetch(url);
  // Check to see if the fetch was successful
  if (response.ok) {
    // The API will send us JSON, but we have to convert the response before we can use it
    // .json() also returns a promise, so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}

function doStuff(data) {
  results = data;
  console.log("first: ", results);
  displayPokemonInfo(data);
}

// function doStuff(data) {
//   results = data;
//   console.log('first: ', results);
//   results.results.forEach((pokemon) => {
//     const div = document.createElement('div');
//     div.textContent = pokemon.name;
//     document.querySelector('main').appendChild(div);
//       // assumes you have a <main> element in your HTML document
//   });
// }

function displayPokemonInfo(data) {
  const pokemonInfoDiv = document.getElementById("pokemon-info");
  pokemonInfoDiv.innerHTML = `
    <h2>${data.name}</h2>
    <img src="${data.sprites.front_default}" alt="${data.name}">
    <p>ID: ${data.id}</p>
    <p>Height: ${data.height} decimetres</p>
    <p>Weight: ${data.weight} hectograms</p>
  `;
}
getPokemon(url);
console.log("second: ", results);
