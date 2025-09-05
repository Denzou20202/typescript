"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const suits = ['spade', 'clubs', 'diamond', 'heart'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deckOfCards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = { cardSuit: suit, value: value };
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        }
        else {
            card.color = 'black';
        }
        deckOfCards.push(card);
    }
}
let groupCards = deckOfCards.reduce((acc, card) => {
    switch (card.cardSuit) {
        case 'spade':
            acc.spades.push(card);
            break;
        case 'clubs':
            acc.clubs.push(card);
            break;
        case 'diamond':
            acc.diamonds.push(card);
            break;
        case 'heart':
            acc.hearts.push(card);
            break;
    }
    return acc;
}, { spades: [],
    clubs: [],
    diamonds: [],
    hearts: [] });
console.log(groupCards);
//# sourceMappingURL=HW_6.11.js.map