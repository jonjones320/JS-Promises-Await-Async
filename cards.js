//1
async function singleCard() {
  try {  
    let card = (await axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)).data.cards[0];
    console.log(`${card.value} of ${card.suit}`);
  } catch(e) {
    console.log(`Error: ${e}`);
  }};



// // 2
async function drawCards(numCards) {
  let cards = (await axios.get(
    `https://deckofcardsapi.com/api/deck/new/draw/?count=${numCards}`)).data.cards;
  console.log(`${cards[0].value} of ${cards[0].suit}`);  
  console.log(`${cards[1].value} of ${cards[1].suit}`);   
};



// 3. Build an HTML page that lets you draw cards from a deck. 
// When the page loads, go to the Deck of Cards API to create a new deck.
// Show a button on the page that will let you draw a card. 
// When you click the button, show a new card, until there are no cards left in the deck.
let deckID;
let deck;
let $drawBtn = $('#draw-btn')
let $cardArea = $('#card-display')

async function getShuffledDeck() {
  deck = (await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)).data;
  deckID = deck.deck_id;
  };

getShuffledDeck()
$drawBtn.on('click', async function drawCard() {
  res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`);
  let cardImg = res.data.cards[0].image;
  
  $cardArea.append($(`<img src=${cardImg}>`));
  if (res.data.remaining === 0) $drawBtn.remove(); 
})