import RandomQuote from "../classes/RandomQuote.js";

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.randomQuoteApiBtn = document.getElementById("random-quote-api-btn");
    this.quoteTextElement = document.getElementById("quote-text");
    this.quoteElementAuthor = document.getElementById("quote-author");
    this.currentQuote = null;
    this.init();
  }
  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.quoteElementAuthor.textContent = this.currentQuote.formatAuthor();
  }

  changeCurrentQuote(newQuote) {
    this.currentQuote = newQuote;
    this.displayCurrentQuote();
  }

  getRandomQuote() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  async getRandomQuoteViaAPI() {
    // RandomQuote.getRandomQuoteViaAPI() - возвращает промис
    const quoteViaApi = await RandomQuote.getRandomQuoteViaAPI();
    this.changeCurrentQuote(quoteViaApi);
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () => this.getRandomQuote());
    this.randomQuoteApiBtn.addEventListener("click", () =>
      this.getRandomQuoteViaAPI()
    );
  }
}
export default RandomQuotesApp;
