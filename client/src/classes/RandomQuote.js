import quotes from "../data/quotes.js";
import Quote from "./Quote.js";
import MathUtils from "../utils/MathUtils.js";

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];

    return new Quote(id, text, author);
  }
  // Любая асинхронная функция возвращает промис
  static async getRandomQuoteViaAPI() {
    const url = "http://api.quotable.io/quotes/random";
    const options = { headers: { "Content-Type": "application/json" } };

    try {
      const response = await fetch(url, options);
      const quotes = await response.json();
      // Проверка , что нам с сервера приходит массив
      if (Array.isArray(quotes) && quotes.length === 1) {
        const quote = quotes[0];
        const { _id, content, author } = quote;

        if (_id && content &&  author) {
          return new Quote(_id, content, author);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export default RandomQuote;
