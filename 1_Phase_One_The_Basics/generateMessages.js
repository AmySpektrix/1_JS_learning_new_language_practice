const personalisedMessage = (inputNameObject) => {
    return `Hi ${inputNameObject.name}! ${inputNameObject.discount}% off our best candies for you today!`
}

const generateMessages = (namesObjectArray) => {
    messageArray = namesObjectArray.map(personalisedMessage);
    return messageArray;
}

module.exports = generateMessages;