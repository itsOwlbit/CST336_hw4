const express = require('express');
const fetch = require('node-fetch');
const app = express();
const path = require('path');

// hacker-quotes from npmjs.com
const hackerQuotes = require('hacker-quotes');

// set the view engine to ejs
app.set('view engine', 'ejs');
// set absolute path from this file's directory instead of cwd (if different)
app.set('views', path.join(__dirname, '/views'));

// specifies the folder for static files
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', async (req, res) => {
  const quote = getRandomQuote();
  const digimon = await getDigimon();
  res.render('index', { quote, digimon });
});

app.get('/singlyLL', async (req, res) => {
  const quote = getRandomQuote();
  const digimon = await getDigimon();
  res.render('singlyLL', { quote, digimon });
});

app.get('/doublyLL', async (req, res) => {
  const quote = getRandomQuote();
  const digimon = await getDigimon();
  res.render('doublyLL', { quote, digimon });
});

app.get('/circularLL', async (req, res) => {
  const quote = getRandomQuote();
  const digimon = await getDigimon();
  res.render('circularLL', { quote, digimon });
});

app.get('/sources', async (req, res) => {
  const quote = getRandomQuote();
  const digimon = await getDigimon();
  res.render('sources', { quote, digimon });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000...");
});

function getRandomQuote() {
  const data = hackerQuotes;
  const index = Math.floor(Math.random() * data.length);

  return data[index];
};

async function getDigimon() {
    const url = "https://digimon-api.vercel.app/api/digimon";
    const response = await fetch(url);
    const data = await response.json();

    return getRandomDigimon(data);
}

function getRandomDigimon(digimonList) {
  const numOfDigimon = digimonList.length;
  const randomIndex = Math.floor(Math.random() * numOfDigimon);

  return digimonList[randomIndex];
}