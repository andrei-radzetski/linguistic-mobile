import { Word } from "./word.model";

export class WordGroup {

  public key: string;
  public words: Array<Word>;

  constructor(key?: string) {
    this.key = key;
    this.words = new Array<Word>();
  }

  push(...word: Word[]) {
    this.words.push(...word);
  }

}
