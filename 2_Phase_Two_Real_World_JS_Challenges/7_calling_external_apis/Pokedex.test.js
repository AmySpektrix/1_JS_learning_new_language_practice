const Pokedex = require('./Pokedex')

describe('Pokedex', () => {
    test ('can instantiate with a blank array', () => {
        const pokedex = new Pokedex();
        expect(pokedex.deck).toEqual([])
    });
    test ('can "catch" a pokemon add to the pokedex', async () => {
        const pokedex = new Pokedex();
        await pokedex.catch('pikachu');
        expect(pokedex.deck[0].name).toEqual('pikachu')
    })
    test ('can "catch" mupliple pokemon and add to the pokedex', async () => {
        const pokedex = new Pokedex();
        await pokedex.catch('pikachu');
        await pokedex.catch('jigglypuff');
        expect(pokedex.deck[0].name).toEqual('pikachu');
        expect(pokedex.deck[1].name).toEqual('jigglypuff');
        expect(pokedex.deck.length).toEqual(2)
    })
    test ('all returns an array of all the pokemon in the pokedex', async () => {
        const pokedex = new Pokedex();
        expect(pokedex.all()).toEqual([]);
        await pokedex.catch('pikachu');
        expect(pokedex.all()).toEqual([{
            name: 'pikachu',
            id: 25,
            height: 4,
            weight: 60,
            types: [ 'electric' ]
        }]);
        await pokedex.catch('jigglypuff');
        expect(pokedex.all()).toEqual([{
            name: 'pikachu',
            id: 25,
            height: 4,
            weight: 60,
            types: [ 'electric' ]
        }, {
            name: 'jigglypuff',
            id: 39,
            height: 5,
            weight: 55,
            types: [ 'normal', 'fairy' ]
        }]);
        expect(pokedex.all().length).toEqual(2);
        })
    })