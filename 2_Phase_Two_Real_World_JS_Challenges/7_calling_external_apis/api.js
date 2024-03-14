const Pokemon = require ('./pokemon')

const fetchPokemon = (pokemon) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then((response) => response.json()) //response.json is async operation which is why you cant combine it with following line
  .then((data) => {return createPokemon(data)});
//   .catch(response)
}

const createPokemon = (data) => {
        name = data.forms[0].name;
        id= data.id;
        height= data.height;
        weight= data.weight;
        typesNameArray=data.types.map((typesObject) => typesObject.type.name);
        newPokemon = {
            name : name,
            id: id,
            height: height,
            weight: weight,
            types: typesNameArray
        }
        return newPokemon
}

module.exports = fetchPokemon;
