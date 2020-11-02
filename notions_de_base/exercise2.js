const getSmallerNumber = (integersArray) => {
    let smallerInteger = null;
    if (!isAnArray(integersArray)) throw 'Your parameter must be an array';
    if (!containIntegersOnly(integersArray)) throw 'Your array must contain numbers only';
    integersArray.forEach(integer => {
        if(integer <= smallerInteger) smallerInteger = integer;
    });
    return smallerInteger;
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

module.exports = getSmallerNumber 
