let currentPokemonId = 1; // Empezamos con el Pokémon ID 1 (Bulbasaur)

document.addEventListener("DOMContentLoaded", () => {
    fetchPokemon(currentPokemonId); // Carga inicial del Pokémon con ID 1
});

function fetchPokemon(pokemonId) {
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const pokemonName = data.name;
            const pokemonImage = data.sprites.front_default;
            const pokemonDescription = `ID: ${data.id}`;

            // Obtener tipos del Pokémon
            const pokemonTypes = data.types.map(typeInfo => typeInfo.type.name).join(', ');

            // Actualizar la pantalla de la pokedex
            document.querySelector(".pokemon-name").textContent = pokemonName;
            document.getElementById("pokemon-img").src = pokemonImage;
            document.getElementById("pokemon-description").textContent = `${pokemonDescription}, Types: ${pokemonTypes}`;
        })
        .catch(error => {
            console.error('Error fetching Pokémon:', error);
        });
}

function getNewPokemon() {
    if (currentPokemonId < 151) {
        currentPokemonId++; // Incrementa el ID del Pokémon
    } else {
        currentPokemonId = 1; // Si llegamos al 151, volvemos al 1
    }
    fetchPokemon(currentPokemonId); // Carga el siguiente Pokémon
}
