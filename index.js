const express = require('express');
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

app.get('/', (req, res) => {
  const quote = getRandomQuote();
  res.render('index', { quote });
});

app.get('/singlyLL', (req, res) => {
  const quote = getRandomQuote();
  res.render('singlyLL', { quote });
});

app.get('/doublyLL', (req, res) => {
  const quote = getRandomQuote();
  res.render('doublyLL', { quote });
});

app.get('/circularLL', (req, res) => {
  const quote = getRandomQuote();
  res.render('circularLL', { quote });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000...");
});

function getRandomQuote() {
  const data = hackerQuotes;
  const index = Math.floor(Math.random() * data.length);

  return data[index];
};