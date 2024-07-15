const consAPI = document.querySelector(`consumir-api`)

const callApi = () =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
  .then(res => res.json())
  .then(data =>{console.log(JSON.stringify(data))})
}

consAPI.addEventListener("click", callApi)