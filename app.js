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

            // Actualizar la pantalla de la pokedex
            document.querySelector(".pokemon-name").textContent = pokemonName;
            document.getElementById("pokemon-img").src = pokemonImage;

            // Limpiar tipos anteriores
            const typesContainer = document.getElementById('pokemon-types');
            typesContainer.innerHTML = ''; // Limpiamos el contenido anterior

            // Crear elementos para cada tipo y agregarlos al contenedor
            data.types.forEach(typeInfo => {
                const typeName = typeInfo.type.name;
                
                const typeElement = document.createElement('div');
                typeElement.classList.add('pokemon-type', typeName); // Añadir clase para tipo
                typeElement.textContent = typeName;

                typesContainer.appendChild(typeElement);
            });
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

// Función para buscar Pokémon por ID
function searchPokemonById() {
    const inputElement = document.getElementById('pokemon-id-input');
    const pokemonId = parseInt(inputElement.value);

    if (pokemonId >= 1 && pokemonId <= 151) {
        fetchPokemon(pokemonId);
        currentPokemonId = pokemonId; // Actualizamos el ID actual para sincronizar
    } else {
        alert('Por favor, introduce un número entre 1 y 151.');
    }
}
