import { Topic } from "../../topics/shared/topic.model";

export class Word {
  
  public id: number;
  public value: string;
  public language: string;
  public translation: Word;
  public topics: Array<Topic>;

  constructor(value?: string) {
    this.value = value;
    this.topics = new Array<Topic>();
  }

  hasTopics(): boolean {
    return this.topics.length > 0;
  }

  pushTopic(...topic: Topic[]) {
    this.topics.push(...topic);
  }

}
