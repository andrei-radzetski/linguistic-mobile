import { Topic } from "./topic.model";

export class TopicMock {

  static getTopics(): Array<Topic> {
    
    let topics = new Array<Topic>();

    let topic1 = new Topic("A street cat named Bob");
    topic1.wordsNumber = 23;
    let topic2 = new Topic("Verbs");
    topic2.wordsNumber = 7;
    let topic3 = new Topic("Other");
    topic3.wordsNumber = 89;
    
    topics.push(topic1, topic2, topic3);
    
    return topics;
  }

}