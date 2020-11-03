const sortCardsByQuantities = (cards) => {
    if (isEmpty(cards)) throw 'Your paramater is empty, it must contain a card';
    if (hasNoQuantity(cards)) throw 'Some card(s) quantity is not valid';
    let sortedCards = cards.sort(function (oneCard, nextCard) {
        return oneCard.quantity - nextCard.quantity;
    });
    return sortedCards;
}

const isEmpty = (array) => {
    return array.length === 0;
}
const hasNoQuantity = (cards) => {
    let noQuantity = false;
    cards.forEach(card => {
        if (card.quantity === null || isNaN(card.quantity)) noQuantity = true;
        return;
    })
    return noQuantity;
}

module.exports = sortCardsByQuantities;