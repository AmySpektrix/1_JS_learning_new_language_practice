const Pokemon = require ('./pokemon')

class Pokedex{
    constructor(){
        this.deck = []
    };
    all(){
        return this.deck;
    }
    catch(pokemon) {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => {return response.json();}) //response.json is async operation which is why you cant combine it with following line
        .then((data) => {
            const newPokemon = this._createPokemon(data);
            this.deck.push(newPokemon);
        });
    }
    _createPokemon(data){
        this.pokemonName = data.forms[0].name;
        this.id= data.id;
        this.height= data.height;
        this.weight= data.weight;
        this.typesNameArray=data.types.map((typesObject) => typesObject.type.name);
        this.newPokemon = new Pokemon(this.pokemonName, this.id, this.height, this.weight, this.typesNameArray)
        console.log(this.newPokemon);
        return this.newPokemon
    }
}

module.exports = Pokedex;