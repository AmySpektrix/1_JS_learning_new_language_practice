const searchCandies = require ('./searchCandies');

describe ("Testing searchCandies", () => {
    test ("searchCandies finds all beginning with Ma and less than 10", () => {
        expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
    })
    test ("searchCandies finds all beginning with Ma and less than 2", () => {
        expect(searchCandies('Ma', 2)).toEqual(['Mars']);
    })
    test ("searchCandies finds all beginning with S and less than 10", () => {
        expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
    })
    test ("searchCandies finds all beginning with S and less than 4", () => {
        expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
    })
    test ("searchCandies finds starting with ma find sweets regardless of upper or lowercase", () => {
        expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
    })
})