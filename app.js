const listaPokemon = document.querySelector(`listaPokemon`);
const URL = `https://pokeapi.co/api/v2/pokemon/`;


for (let index = 1; index <= 151; index++) {
  fetch(URL + index).then((res) => res.json()).then(data => console.log(data)) 
}

function mostrarPkm(data){
}