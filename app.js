const listaPokemon = document.querySelector(`listaPokemon`);
const URL = `https://pokeapi.co/api/v2/pokemon/`;

for (let i = 1; 1 <= 151; i++){
  fetch(URL + i).then(res => res.json()).then(data => con(data))
}

function mostrarPkm(data){

}