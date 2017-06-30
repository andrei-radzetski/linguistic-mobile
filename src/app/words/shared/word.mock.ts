import { Word } from './word.model';
import { WordGroup } from './word-group.model';
import { Topic } from '../../topics/shared/topic.model';

export class WordMock {

  static getWords(): Array<WordGroup> {
    let wordGroups = new Array<WordGroup>();

    let topic1 = new Topic('A street cat named Bob');
    let topic2 = new Topic('Verbs');
    let topic3 = new Topic('Other');
    let topic4 = new Topic('New');

    let wordGroup1 = new WordGroup('C');
    let word1 = new Word('Certain');
    word1.id = 1;
    word1.translation = new Word('Определенный');
    word1.pushTopic(topic1, topic2, topic3, topic4);
    wordGroup1.push(word1);

    let wordGroup2 = new WordGroup('M');
    let word2 = new Word('Mankind');
    let word3 = new Word('Mindset');
    word2.id = 2;
    word2.translation = new Word('Человечество');
    word3.id = 3;
    word3.translation = new Word('Образ мышления');
    wordGroup2.push(word2, word3);

    wordGroups.push(wordGroup1, wordGroup2);

    return wordGroups;
  }

}