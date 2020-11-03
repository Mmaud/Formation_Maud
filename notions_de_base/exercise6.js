const sortsCardsByPrice = (cards) => {
    let sortedCards = cards.sort((oneCard, nextCard) => {
        return oneCard.item.price - nextCard.item.price;
    })
    return sortedCards;
}

module.exports = sortsCardsByPrice;