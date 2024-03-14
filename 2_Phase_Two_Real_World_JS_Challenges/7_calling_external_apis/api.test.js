const fetchPokemon = require('./api')

describe('Pokemon', () => {
    it('Can fetch the data for Jigglypuff', async () => {
        const pokemon = await fetchPokemon('jigglypuff');
        expect(pokemon.name).toEqual('jigglypuff');
        expect(pokemon.id).toEqual(39)
        expect(pokemon.height).toEqual(5)
        expect(pokemon.weight).toEqual(55)
        expect(pokemon.types).toEqual(['normal','fairy'])
        });
    });
