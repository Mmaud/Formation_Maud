const finalCardsPrice = (cards) => {
    if (isEmpty(cards)) throw 'Your paramater is empty, it must contain a card';
    if (itemHasNopriceOrQuantity(cards)) throw 'some item(s) have no price or quantity  : invalid cards';
    let finalPrice = 0;
    cards.map(card => finalPrice += (card.quantity * card.item.price));
    return finalPrice;
}

const itemHasNopriceOrQuantity = (cards) => {
    let hasNoPriceOrQuantity = false;
    cards.forEach(card => {
        if (card.item.price === null || isNaN(card.item.price) || card.quantity === null || isNaN(card.quantity)) hasNoPriceOrQuantity = true;
    });
    return hasNoPriceOrQuantity;
}

const isEmpty = (array) => {
    return array.length===0;
}

module.exports = finalCardsPrice;