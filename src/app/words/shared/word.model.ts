export class Word {
  
  public id: number;
  public value: string;
  public language: string;
  public translation: Word;

  constructor(value?: string) {
    this.value = value;
  }

}
