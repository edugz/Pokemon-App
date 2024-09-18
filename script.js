async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonsprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";

    const pokeNameDiv = document.getElementById("pokemon-name");
    pokeNameDiv.innerHTML = "";
    pokeNameDiv.innerHTML = `<h3>${data.name.toUpperCase()}</h3>`;
  } catch (error) {
    console.error("Error", error);
  }
}

document
  .getElementById("pokemonName")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      document.getElementById("searchBtn").click();
    }
  });
