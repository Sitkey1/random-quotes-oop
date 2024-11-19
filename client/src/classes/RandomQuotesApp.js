import RandomQuote from "./RandomQuote.js";

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.randomQuotePublicApiBtn = document.getElementById(
      "random-quote-public-api-btn"
    );
    this.randomQuoteOwnApiBtn = document.getElementById(
      "random-quote-own-api-btn"
    );
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

  randomQuoteHandler() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  async handleRandomQuoteViaPublicAPI() {
    // RandomQuote.getRandomQuoteViaAPI() - возвращает промис
    this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaPublicAPI());
  }

  async handleRandomQuoteViaOwnAPI() {
    // RandomQuote.getRandomQuoteViaAPI() - возвращает промис
    this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaOwnAPI());
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () =>
      this.randomQuoteHandler()
    );
    this.randomQuotePublicApiBtn.addEventListener("click", () =>
      this.handleRandomQuoteViaPublicAPI()
    );
    this.randomQuoteOwnApiBtn.addEventListener("click", () =>
      this.handleRandomQuoteViaOwnAPI()
    );
  }
}
export default RandomQuotesApp;
