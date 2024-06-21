let BASE_URL = "http://numbersapi.com";
let faveNumber = 7;

// 1
async function getTrivia() {
  let randomFact = await axios.get(`${BASE_URL}/${faveNumber}?json`)
  console.log(`Random fact: ${randomFact.data.text}`)
}

// 2
let faveNumbers = [3,7,9]
async function getMultipleTrivia() {
  let data = await $.getJSON(`${BASE_URL}/${faveNumbers}?json`)
  console.log(data)
}

// 3
async function get4Trivias() {
  let data = await axios.get(`${BASE_URL}/${faveNumber}?json`)
  console.log(`Random fact: ${randomFact.data.text}`)
}

async function getFourTrivia() {
  let facts = await Promise.all([
    axios.get(`${BASE_URL}/${faveNumber}?json`),
    axios.get(`${BASE_URL}/${faveNumber}?json`),
    axios.get(`${BASE_URL}/${faveNumber}?json`),
    axios.get(`${BASE_URL}/${faveNumber}?json`)
  ]);

  facts.forEach(facts => {
    $('body').append(`<p>${facts.data.text}</p>`);
  });
}

getFourTrivia()
