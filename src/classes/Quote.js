class Quote {
  constructor(id, text, author) {
    this.id = id;
    this.text = text;
    this.author = author;
  }

  formatText() {
    return (this.text = `${this.text}`);
  }
  formatAuthor() {
    return (this.author = `© ${this.author}`);
  }
}

export default Quote;
