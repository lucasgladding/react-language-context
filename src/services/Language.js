class Language {
  constructor(language) {
    this.language = language;
  }

  translate(name) {
    return `${name} (${this.language})`;
  }
}

export default Language;
