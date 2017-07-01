export class Topic {

  public static readonly TABLE_NAME = 'TOPICS';
  public static readonly TABLE_DECLARATION = 'ID integer primary key, NAME text';

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
