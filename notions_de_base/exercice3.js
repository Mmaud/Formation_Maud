const getObjectList = (cards) => {
    if (isEmpty(cards)) throw 'Your paramater is empty, it must contain a card';
    const cardListItemName = cards.map(card => card.item.name);
    return cardListItemName;
}

const isEmpty = (array) => {
    return array.length===0;
}

module.exports = getObjectList;