import { Topic } from '../../topics/shared/topic.model';
import { TableMetadata } from "../../db/table-metadata.model";
import { Entity } from "../../db/entity.model";

export class Word extends Entity {

  public static readonly METADATA = new TableMetadata('WORDS', [
    'ID integer primary key',
    'VALUE text'
  ]);

  public value: string;
  public language: string;
  public translation: Word;
  public topics: Array<Topic>;
  public synonyms: Array<Word>;

  constructor(value?: string) {
    super();
    this.value = value;
    this.topics = new Array<Topic>();
    this.synonyms = new Array<Word>();
  }

  /**
   * Checks if there are topics.
   */
  hasTopics(): boolean {
    return this.topics != null && this.topics.length > 0;
  }

  /**
   * Checks if there are synonyms.
   */
  hasSynonyms(): boolean {
    return this.synonyms != null && this.synonyms.length > 0;
  }

  /**
   * Appends new topics, and returns the new length of the topics. 
   * 
   * @param synonyms New topics.
   */
  pushTopics(...topics: Topic[]): number {
    if (!this.topics) {
      this.topics = new Array<Topic>();
    }

    return this.topics.push(...topics);
  }

  /**
   * Appends new synonyms, and returns the new length of the synonyms. 
   * 
   * @param synonyms New synonyms.
   */
  pushSynonyms(...synonyms: Word[]): number {
    if (!this.synonyms) {
      this.synonyms = new Array<Word>();
    }

    return this.synonyms.push(...synonyms);
  }

}
