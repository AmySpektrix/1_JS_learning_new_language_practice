const addToBatch = (array, number) => {
    if (array.length < 5) 
    {console.log(array.concat(number));}
    else {console.log(array)}
}

module.exports = addToBatch;