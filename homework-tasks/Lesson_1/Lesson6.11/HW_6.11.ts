const suits: string[] = ['spade','clubs','diamond','heart'];

const values:string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

type CardType = {
  value:string,
  cardSuit:string,
  color?:string
}

const deckOfCards:CardType[] = [];

for (const suit of suits) {
  for (const value of values) {
      const card: CardType = {cardSuit:suit, value:value}
        if (suit === 'heart' || suit === 'diamond') {
        card.color = 'red'
      } else  {
        card.color = 'black'
      }
    deckOfCards.push(card)
  }
}

interface IAcc {
  spades: CardType[],
  clubs:CardType[],
  diamonds: CardType[],
  hearts:CardType[]
}

let groupCards = deckOfCards.reduce((acc:IAcc, card: CardType) => {
  switch (card.cardSuit) {
    case 'spade':
      acc.spades.push(card)
      break
    case 'clubs':
      acc.clubs.push(card)
      break
    case 'diamond':
      acc.diamonds.push(card)
      break
    case 'heart':
      acc.hearts.push(card)
      break
  }

  return acc
},
  {spades: [],
  clubs:[],
  diamonds: [],
  hearts:[] }
)

console.log(groupCards)
