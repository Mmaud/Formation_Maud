const sortCardsByPrice = (cards) => {
    if (isEmpty(cards)) throw 'Your paramater is empty, it must contain a card';
    if (hasInvalidPrice(cards)) throw 'Some price item is invalid';
    let sortedCards = cards.sort((oneCard, nextCard) => {
        return oneCard.item.price - nextCard.item.price;
    })
    return sortedCards;
}

const isEmpty = (array) => {
    return array.length === 0;
}
const hasInvalidPrice = (cards) => {
    let invalidPrice = false;
    cards.forEach(card => {
        if (card.item.price === null || isNaN(card.item.price)) invalidPrice = true;
        return;
    });
    return invalidPrice;
}

module.exports = sortCardsByPrice;