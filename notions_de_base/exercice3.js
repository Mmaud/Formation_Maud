const getObjectList = (card) => {
    let cardListItemName = [];
    if (isEmpty(card)) throw 'Your paramater is empty, it must contain a caddie';
    card.forEach(element => {
        cardListItemName.push(element.item.name);   
    });
    return cardListItemName;
}

const isEmpty = (array) => {
    return array.length===0;
}

module.exports = {getObjectList}