const checkLength = (phoneNumber) => {
    if (phoneNumber.length <= 10) {
        return true;}
    else {
        return false;}
} 

const filterLongNumbers = (phoneNumbersArray) => {
    newArray = phoneNumbersArray.filter(checkLength);
    return newArray
}

module.exports = filterLongNumbers;