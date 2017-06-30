import { Word } from "./word.model";

export class WordGroup {

  public key: string;
  public words: Array<Word>;

  constructor(key?: string) {
    this.key = key;
    this.words = new Array<Word>();
  }

  /**
   * Checks if there are words.
   */
  hasWords(): boolean {
    return this.words != null && this.words.length > 0;
  }

  /**
   * Appends new words, and returns the new length of the words. 
   * 
   * @param words New words.
   */
  pushWords(...words: Word[]): number {
    if (!this.words) {
      this.words = new Array<Word>();
    }

    return this.words.push(...words);
  }

}
