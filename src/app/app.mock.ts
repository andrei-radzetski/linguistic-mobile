import { WordGroup } from "./words/shared/word-group.model";
import { Word } from "./words/shared/word.model";
import { Topic } from "./topics/shared/topic.model";

export class AppMock {

  static getTopics(): Array<Topic> {
    let topic1 = new Topic('A street cat named Bob');
    let topic2 = new Topic('Something');
    let topic3 = new Topic('Other');

    topic1.wordsNumber = 6;
    topic2.wordsNumber = 3;
    topic3.wordsNumber = 3;

    return [topic1, topic2, topic3];
  }

  static getAllWords(): Array<WordGroup> {
    let topic1 = new Topic('A street cat named Bob');
    let topic2 = new Topic('Something');
    let topic3 = new Topic('Other');

    let wordGroup1 = new WordGroup('C');
    let wordGroup2 = new WordGroup('M');
    let wordGroup3 = new WordGroup('O');

    let word1 = new Word('Claim');
    word1.pushSynonyms(new Word('Demand'));
    word1.translation = new Word('Требовать');
    word1.translation.pushSynonyms(new Word('Претендовать'))
    word1.pushTopics(topic1);
    let word2 = new Word('Certain');
    word2.translation = new Word('Определенный');
    word2.pushTopics(topic1, topic2);
    let word3 = new Word('Commitment');
    word3.translation = new Word('Очевидный');
    word3.pushTopics(topic3);
    wordGroup1.pushWords(word1, word2, word3);

    let word4 = new Word('Mankind');
    word4.translation = new Word('Человечество');
    word4.pushTopics(topic1);
    let word5 = new Word('Mindset');
    word5.translation = new Word('Образ мышления');
    word5.pushTopics(topic1, topic2);
    let word6 = new Word('Mock');
    word6.translation = new Word('Ложный');
    word6.pushTopics(topic3);
    wordGroup2.pushWords(word4, word5, word6);

    let word7 = new Word('Obvious');
    word7.translation = new Word('Очевидный');
    word7.pushTopics(topic1);
    let word8 = new Word('Omit');
    word8.translation = new Word('Пропускать');
    word8.pushTopics(topic1, topic2);
    let word9 = new Word('Opportunity');
    word9.translation = new Word('Возможность');
    word9.pushTopics(topic3);
    wordGroup3.pushWords(word7, word8, word9);

    return [wordGroup1, wordGroup2, wordGroup3];
  }

  static getWords(topic: Topic): Array<WordGroup> {
    let topic1 = new Topic('A street cat named Bob');
    let topic2 = new Topic('Something');
    let topic3 = new Topic('Other');

    if (topic.name === 'A street cat named Bob') {
      let wordGroup1 = new WordGroup('C');
      let word1 = new Word('Claim');
      word1.pushSynonyms(new Word('Demand'));
      word1.translation = new Word('Требовать');
      word1.translation.pushSynonyms(new Word('Претендовать'))
      word1.pushTopics(topic1);
      let word11 = new Word('Certain');
      word11.translation = new Word('Определенный');
      word11.pushTopics(topic1, topic2);
      wordGroup1.pushWords(word1, word11);

      let wordGroup2 = new WordGroup('M');
      let word2 = new Word('Mankind');
      word2.translation = new Word('Человечество');
      word2.pushTopics(topic1);
      let word22 = new Word('Mindset');
      word22.translation = new Word('Образ мышления');
      word22.pushTopics(topic1, topic2);
      wordGroup2.pushWords(word2, word22);

      let wordGroup3 = new WordGroup('O');
      let word3 = new Word('Obvious');
      word3.translation = new Word('Очевидный');
      word3.pushTopics(topic1);
      let word33 = new Word('Omit');
      word33.translation = new Word('Пропускать');
      word33.pushTopics(topic1, topic2);
      wordGroup3.pushWords(word3, word33);

      return [wordGroup1, wordGroup2, wordGroup3];
    }

    if (topic.name === 'Something') {
      let wordGroup1 = new WordGroup('C');
      let word1 = new Word('Certain');
      word1.translation = new Word('Определенный');
      word1.pushTopics(topic1, topic2);
      wordGroup1.pushWords(word1);

      let wordGroup2 = new WordGroup('M');
      let word2 = new Word('Mindset');
      word2.translation = new Word('Образ мышления');
      word2.pushTopics(topic1, topic2);
      wordGroup2.pushWords(word2);

      let wordGroup3 = new WordGroup('O');
      let word3 = new Word('Omit');
      word3.translation = new Word('Пропускать');
      word3.pushTopics(topic1, topic2);
      wordGroup3.pushWords(word3);

      return [wordGroup1, wordGroup2, wordGroup3];
    }

    if (topic.name === 'Other') {
      let wordGroup1 = new WordGroup('C');
      let word1 = new Word('Commitment');
      word1.translation = new Word('Очевидный');
      word1.pushTopics(topic3);
      wordGroup1.pushWords(word1);

      let wordGroup2 = new WordGroup('M');
      let word2 = new Word('Mock');
      word2.translation = new Word('Ложный');
      word2.pushTopics(topic3);
      wordGroup2.pushWords(word2);

      let wordGroup3 = new WordGroup('O');
      let word3 = new Word('Opportunity');
      word3.translation = new Word('Возможность');
      word3.pushTopics(topic3);
      wordGroup3.pushWords(word3);

      return [wordGroup1, wordGroup2, wordGroup3];
    }
  }

}