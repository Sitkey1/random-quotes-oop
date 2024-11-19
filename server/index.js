const express = require("express");
const cors = require("cors");
const quotes = require("./data/quotes.js");

const app = express();
const PORT = 3000;

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  return quote;
}

const corsOption = {
  origin: "*", // * - разрешает любому домену обращаться к API серверу
  // origin: "http://127.0.0.1:5500",
};

app.use(cors(corsOption));

app.get("/quotes/random-single", (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Quotes API services is running on port ${PORT}`);
});
