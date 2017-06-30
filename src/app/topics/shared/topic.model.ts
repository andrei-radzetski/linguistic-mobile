export class Topic {

  public id: number;

  public name: string;

  public wordsNumber: number;

  constructor(name?: string) {
    this.name = name;
  }

  getWordsNumberTemplate(): string {
    return `${this.wordsNumber} word(s)`;
  }

}
