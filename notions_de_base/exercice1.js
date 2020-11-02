const getHigherNumber = (integersArray) => {
    let higherNumber = null;
    if (!isAnArray(integersArray)) throw 'Your parameter must be an array';
    if (!containIntegersOnly(integersArray)) throw 'Your array must contain numbers only';
    
    integersArray.forEach(integer => {
        if (integer >= higherNumber)  higherNumber = integer;
    });
    return higherNumber;
}

const isAnArray = (parameter) => {
   return Array.isArray(parameter) 
}

const containIntegersOnly = (array) => {
    let isInteger = true;
    array.forEach(element => {
        if (isNaN(element)) isInteger = false;
    })
    return isInteger;
}
module.exports = {getHigherNumber};